import { PropsWithChildren } from "react";

import TopBarClass, { Header, Icon } from "~/styles/topbar.ts";

export function MainTopBar(
  { children }: PropsWithChildren,
) {
  return (
    <Header>
      <IconPart />
      <TopBarClass autohide>
        {children}
      </TopBarClass>
    </Header>
  );
}

export function IconPart() {
  return (
    <Icon>
      <a href="https://www.navic.cc/">
        <img src="static/navic_logo.png" />
      </a>
    </Icon>
  );
}

export function DocTopBar(
  { children }: PropsWithChildren,
) {
  return (
    <TopBarClass isdark>
      {children}
    </TopBarClass>
  );
}
