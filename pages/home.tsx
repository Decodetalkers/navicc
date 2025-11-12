import { MainTopBar as TitleBar } from "~/components/titlebar.tsx";
import { Section1Page } from "~/components/section1.tsx";
import { Section2Page } from "~/components/section2.tsx";
import { Empty, NewsTitle } from "~/components/common.tsx";

import { CloseButton, SideBar } from "~/styles/sidebar.ts";

import { useState } from "preact/hooks";
import { CenterTitle } from "~/components/centertitle.tsx";
import { SliderSection } from "~/components/slidersession.tsx";
import { NewsMainArea } from "~/components/newsarea.tsx";
import { LinkSectionArea } from "~/components/Link.tsx";
import { CenterArea } from "~/components/centersession.tsx";
import { Foot } from "~/components/foot.tsx";
import { SideMenu } from "~/components/sidebar.tsx";

export function Header({ onClick }: { onClick?: () => void }) {
  return (
    <TitleBar onClick={onClick}>
      <a href="#main">
        事業紹介
        <div class="dropDown">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </a>
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
  return (
    <>
      <Header onClick={toggleOpen} />
      <SideBar isOpen={isOpen}>
        <CloseButton type="button" onClick={toggleOpen} />
        <SideMenu />
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
      <Foot />
    </>
  );
}
