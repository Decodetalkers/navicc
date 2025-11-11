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
      <img src="static/navic_logo.png" />
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
