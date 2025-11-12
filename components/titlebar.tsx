import { PropsWithChildren } from "react";

import TopBarClass, { Header, Icon } from "~/styles/topbar.ts";
import { MenuButton, MenuButtonDiv } from "~/styles/sidebar.ts";

export type MainTopBarProps = {
  onClick?: () => void;
};

export function MainTopBar(
  { children, onClick }: PropsWithChildren<MainTopBarProps>,
) {
  return (
    <Header>
      <IconPart />
      <TopBarClass autohide>
        {children}
      </TopBarClass>
      <MenuButtonDiv>
        <MenuButton onClick={onClick} />
      </MenuButtonDiv>
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
