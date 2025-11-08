import { render } from "preact";

import { Home } from "~/pages/home.tsx";

const mount = document.getElementById("mount");

if (mount) {
  render(<Home />, mount);
}
