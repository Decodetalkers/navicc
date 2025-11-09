import { serveDir } from "@std/http";
import { parseArgs } from "@std/cli";

import {
  GenWebsite,
  refreshMiddleware,
  Route,
  type Script,
  watchChanges,
  WebPageUnit,
} from "@nobody/tananoni";

interface BuildMode {
  debug?: boolean;
  release?: boolean;
}

const input_args = parseArgs(Deno.args) as BuildMode;

const release_mode = input_args.release;

let route_path = "debug";

if (release_mode) {
  route_path = "release";
}

const base_asserts = { path: "static/asserts", alias: "static" };
const css_asserts = { path: "static/styles" };

const scripts: Script[] = [{ src: "main.js" }];

const homeroute = new Route(route_path)
  .appendAssert(base_asserts)
  .appendAssert(css_asserts)
  .appendWebPage(
    new WebPageUnit(
      "./src/main.tsx",
      [
        { type: "main", id: "mount" },
      ],
      scripts,
    )
      .withTitle("navicc")
      .withLinkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "static/favicon.ico" },
      ])
      .withHotReload(!release_mode),
  )
  .withHotReload(!release_mode);

const webgen = new GenWebsite();

await webgen.generateWebsite(homeroute);

if (release_mode) {
  Deno.exit(0);
}

const fsRoot = `${Deno.cwd()}/dist/debug`;
Deno.serve({ hostname: "localhost", port: 8000 }, async (req) => {
  const res = refreshMiddleware(req);

  if (res) {
    return res;
  }

  return await serveDir(req, { fsRoot });
});

async function fsWatch() {
  await webgen.generateWebsite(homeroute);
}

await watchChanges({
  watchedDir: "./",
  watchedFileTypes: [".ts", ".tsx", ".css", ".md"],
  excludes: ["dist", "build.ts", "build.ts~"],
  fallback: fsWatch,
});
