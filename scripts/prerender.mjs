import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const workspaceRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(workspaceRoot, "dist");
const emptyRoot = '<div id="root"></div>';

async function findIndexFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return findIndexFiles(filePath);
    }

    return entry.isFile() && entry.name === "index.html" ? [filePath] : [];
  }));

  return files.flat();
}

function pathnameFor(filePath) {
  const outputPath = relative(outputDirectory, filePath).split(sep).join("/");

  return outputPath === "index.html"
    ? "/"
    : `/${outputPath.slice(0, -"index.html".length)}`;
}

async function prerender() {
  const vite = await createServer({
    root: workspaceRoot,
    appType: "custom",
    server: { middlewareMode: true },
  });

  try {
    const serverEntry = await vite.ssrLoadModule("/src/entry-server.tsx");
    const { render } = serverEntry;

    if (typeof render !== "function") {
      throw new Error("The server renderer did not export a render function.");
    }

    const pages = await findIndexFiles(outputDirectory);
    let renderedPages = 0;

    for (const page of pages) {
      const document = await readFile(page, "utf8");

      // Only Vite pages that mount the shared React app are candidates. This
      // keeps unrelated static files in dist untouched.
      if (!document.includes(emptyRoot)) {
        continue;
      }

      const pathname = pathnameFor(page);
      const markup = await render(pathname);

      if (!markup.includes("<main")) {
        throw new Error(`The renderer produced no main content for ${pathname}.`);
      }

      const prerenderedDocument = document.replace(
        emptyRoot,
        `<div id="root">${markup}</div>`,
      );

      await writeFile(page, prerenderedDocument);
      renderedPages += 1;
      console.log(`Prerendered ${pathname}`);
    }

    if (renderedPages === 0) {
      throw new Error("No Vite page with an empty #root container was found in dist.");
    }

    console.log(`Prerendered ${renderedPages} route${renderedPages === 1 ? "" : "s"}.`);
  } finally {
    await vite.close();
  }
}

await prerender();
