import { PropsWithChildren } from "react";

import TopBarClass, {
  Header,
  Icon,
  MainIcon,
  MinIcon,
} from "~/styles/topbar.ts";

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
      <MainIcon>
        NAVIC <span style={{ fontSize: 25 }}>Inc.</span>
      </MainIcon>
      <MinIcon>
        ～ 新しいことにチャレンジし続ける ～
      </MinIcon>
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
