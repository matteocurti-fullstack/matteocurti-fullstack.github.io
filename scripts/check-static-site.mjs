import { readdir, readFile } from "node:fs/promises";
import { join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDirectory = join(workspaceRoot, "dist");
const siteUrl = "https://matteocurti-fullstack.github.io";

async function findIndexFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) return findIndexFiles(filePath);
    return entry.isFile() && entry.name === "index.html" ? [filePath] : [];
  }));

  return nested.flat();
}

function displayPath(filePath) {
  return relative(workspaceRoot, filePath).split(sep).join("/");
}

function checkPage(document, filePath) {
  const checks = [
    [/<html\s+lang=["']it["']/i, "lingua italiana dichiarata"],
    [/<title>[^<]+<\/title>/i, "title"],
    [/<meta\s+name=["']description["']\s+content=["'][^"']+/i, "meta description"],
    [/<link\s+rel=["']canonical["']\s+href=["']https:\/\/matteocurti-fullstack\.github\.io\//i, "canonical"],
    [/<meta\s+http-equiv=["']Content-Security-Policy["']/i, "Content Security Policy"],
    [/<meta\s+property=["']og:image["']\s+content=["']https:\/\/matteocurti-fullstack\.github\.io\/social\/portfolio-linkedin-preview-1200x627\.png["']/i, "immagine Open Graph"],
    [/<meta\s+name=["']twitter:card["']\s+content=["']summary_large_image["']/i, "Twitter large image card"],
    [/<meta\s+name=["']twitter:image:alt["']\s+content=["'][^"']+/i, "testo alternativo Twitter"],
    [/<div\s+id=["']root["'][^>]*>\s*<(?:div|main)/i, "contenuto pre-renderizzato"],
    [/<main\b/i, "landmark principale"],
    [/<h1\b/i, "H1"],
  ];

  const missing = checks
    .filter(([pattern]) => !pattern.test(document))
    .map(([, description]) => description);

  if (document.includes('"@type": "Article"') && !document.includes('"image":')) {
    missing.push("immagine nei dati strutturati Article");
  }

  if (missing.length > 0) {
    throw new Error(`${displayPath(filePath)}: manca ${missing.join(", ")}.`);
  }
}

const pages = await findIndexFiles(outputDirectory);

if (pages.length === 0) {
  throw new Error("La build non ha prodotto pagine index.html in dist.");
}

const failures = [];
const canonicalUrls = new Map();

for (const page of pages) {
  try {
    const document = await readFile(page, "utf8");
    checkPage(document, page);

    const canonical = document.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1];
    if (canonical) {
      const existingPage = canonicalUrls.get(canonical);
      if (existingPage) {
        throw new Error(`${displayPath(filePath)}: canonical duplicato con ${displayPath(existingPage)}.`);
      }
      canonicalUrls.set(canonical, page);
    }
  } catch (error) {
    failures.push(error instanceof Error ? error.message : String(error));
  }
}

try {
  const sitemap = await readFile(join(outputDirectory, "sitemap.xml"), "utf8");
  const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url));

  for (const [canonical, page] of canonicalUrls) {
    if (!sitemapUrls.has(canonical)) {
      failures.push(`${displayPath(page)}: canonical assente dalla sitemap.`);
    }
  }

  for (const sitemapUrl of sitemapUrls) {
    const parsedUrl = new URL(sitemapUrl);
    if (parsedUrl.origin !== siteUrl) {
      failures.push(`Sitemap: URL esterno non previsto (${sitemapUrl}).`);
      continue;
    }

    const pathname = parsedUrl.pathname.replace(/^\//, "");
    const outputPath = join(outputDirectory, pathname, "index.html");

    try {
      await readFile(outputPath, "utf8");
    } catch {
      failures.push(`Sitemap: manca la pagina generata per ${sitemapUrl}.`);
    }
  }
} catch (error) {
  failures.push(error instanceof Error ? error.message : String(error));
}

if (failures.length > 0) {
  console.error("Controllo statico non superato:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Controllo statico superato per ${pages.length} pagine.`);
}
