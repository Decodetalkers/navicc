import { MainTopBar as TitleBar } from "~/components/titlebar.tsx";
import { Section1Page } from "~/components/section1.tsx";
import { Section2Page } from "~/components/section2.tsx";
import { Empty, FadeInSection, NewsTitle } from "~/components/common.tsx";

import {
  CloseButton,
  MenuBlur,
  MenuGridContext,
  MenuRight,
  SideBar,
} from "~/styles/sidebar.ts";

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
          <a>車用品 卸販売・外注取付事業</a>
          <a>車用品 EC事業</a>
          <a>自社商品開発事業</a>
        </div>
      </a>
      <a href="#feature">お知らせ</a>
      <a href="#install">
        会社情報
        <div class="dropDown">
          <a>車用品 卸販売・外注取付事業</a>
          <a>車用品 EC事業</a>
          <a>自社商品開発事業</a>
        </div>
      </a>
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
      <FadeInSection>
        <Header onClick={toggleOpen} />
      </FadeInSection>
      <SideBar isOpen={isOpen}>
        <MenuGridContext>
          <MenuBlur />
          <MenuRight>
            <CloseButton type="button" onClick={toggleOpen} />
            <SideMenu />
          </MenuRight>
        </MenuGridContext>
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
