import { MainTopBar as TitleBar } from "~/components/titlebar.tsx";
import { Section1Page } from "~/components/section1.tsx";
import { Section2Page } from "~/components/section2.tsx";
import { Empty, NewsTitle } from "~/components/common.tsx";

import { MenuButton, SideBar, SideBarA } from "~/styles/sidebar.ts";

import { useState } from "preact/hooks";
import { CenterTitle } from "~/components/centertitle.tsx";
import { SliderSection } from "~/components/slidersession.tsx";
import { NewsMainArea } from "~/components/newsarea.tsx";
import { LinkSectionArea } from "~/components/Link.tsx";
import { CenterArea } from "~/components/centersession.tsx";

export function Header() {
  return (
    <TitleBar>
      <a href="#main">事業紹介</a>
      <a href="#feature">お知らせ</a>
      <a href="#install">会社情報</a>
      <a href="/doc">採用情報</a>
      <a href="/doc">ソーシャルメディア</a>
      <a href="/doc">お問い合わせ</a>
      <a href="/doc">公式ショップ</a>
    </TitleBar>
  );
}

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const backString = "<<";
  return (
    <>
      <Header />
      <MenuButton isOpen={isOpen} onClick={() => toggleOpen()} />
      <SideBar isOpen={isOpen} autohide>
        <SideBarA href="#main">Neocmakelsp</SideBarA>
        <SideBarA href="#feature">Features</SideBarA>
        <SideBarA href="#install">Install</SideBarA>
        <SideBarA href="/doc">Document</SideBarA>
        <SideBarA
          isBottom
          href="https://github.com/neocmakelsp/neocmakelsp"
        >
          Github
        </SideBarA>
        <button type="button" class="bottom" onClick={() => toggleOpen()}>
          {backString}
        </button>
      </SideBar>
      <Section1Page />
      <Empty />
      <Section2Page />
      <CenterTitle />
      <CenterArea />
      <NewsTitle ja="お知らせ" en="NEWS" />
      <NewsMainArea />
      <NewsTitle ja="ソーシャルメディア" en="SOCIAL MEDIA" />
      <SliderSection />
      <NewsTitle ja="外部リンク" en="LINK" />
      <LinkSectionArea />
    </>
  );
}
