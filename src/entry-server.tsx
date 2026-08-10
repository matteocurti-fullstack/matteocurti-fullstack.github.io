import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/**
 * Renders one of the existing static routes during the production build.
 */
export function render(pathname: string) {
  return renderToString(
    <StrictMode>
      <App path={pathname} />
    </StrictMode>,
  );
}
