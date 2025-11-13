import {
  CopyRight,
  FootDetailArea,
  FootDetailLine,
  FootDetailMenu,
  FootDetailTitle,
  FootEmployment,
  FootInformation,
  FootIntroduction,
  FootMedia,
  FootSession,
  FootTextArea,
  FootTitle,
  FootTopArea,
  SNSBtn,
  SNSPart,
  SNSPartInner,
} from "~/styles/foot.ts";
import { PropsWithChildren } from "react";

export function Foot() {
  return (
    <FootSession>
      <FootTopArea>
        <FootTextArea>
          <FootTitle>
            <h4>TOP</h4>
            <h4>お知らせ</h4>
            <h4>お問い合わせ</h4>
          </FootTitle>
          <FootInformation>
            <FootDetailArea>
              <FootDetailTitle>
                <h4>会社情報</h4>
              </FootDetailTitle>
              <FootDetailLine />
              <FootDetailMenu>
                <h5>会社概要</h5>
                <h5>経営理念</h5>
                <h5>会社沿革</h5>
                <h5>SDGｓ</h5>
                <h5>健康経営</h5>
              </FootDetailMenu>
            </FootDetailArea>
          </FootInformation>
          <FootIntroduction>
            <FootDetailArea>
              <FootDetailTitle>
                <h4>事業紹介</h4>
              </FootDetailTitle>
              <FootDetailLine />
              <FootDetailMenu>
                <h5>車用品EC事業</h5>
                <h5>自社商品開発事業</h5>
                <h5>車用品 卸販売・外注取付事業</h5>
                <h5>レンタル事業</h5>
                <h5>豊橋リテール事業</h5>
                <h5>貿易事業</h5>
                <h5>健康事業</h5>
                <h5>グループ事業</h5>
              </FootDetailMenu>
            </FootDetailArea>
          </FootIntroduction>
          <FootEmployment>
            <FootDetailArea>
              <FootDetailTitle>
                <h4>採用情報</h4>
              </FootDetailTitle>
              <FootDetailLine />
              <FootDetailMenu>
                <h5>新卒採用</h5>
                <h5>高卒採用</h5>
                <h5>中途採用</h5>
              </FootDetailMenu>
            </FootDetailArea>
          </FootEmployment>
          <FootMedia>
            <FootDetailArea>
              <FootDetailTitle>
                <h4>ソーシャルメディア</h4>
              </FootDetailTitle>
              <FootDetailLine />
              <FootDetailMenu>
                <h5>NAVICオリジナルCM</h5>
                <h5>
                  CLEZEED公式YouTube
                </h5>
                <h5>豊橋モーターズ</h5>
                <h5>レース活動</h5>
              </FootDetailMenu>
            </FootDetailArea>
          </FootMedia>
        </FootTextArea>
      </FootTopArea>
      <CopyRight>
        <h5>
          Copyright(C) NAVIC Co.,LTD. All Rights Reserved.
        </h5>
      </CopyRight>
      <SNSPart>
        <SNSPartInner>
          <SNSButton
            img="static/youtube.svg"
            url="https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg"
          >
            NAVIC<br />公式チャンネル
          </SNSButton>
          <SNSButton
            img="static/youtube.svg"
            url="https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg"
          >
            CLEZEED<br />
            公式チャンネル
          </SNSButton>
          <SNSButton
            img="static/youtube.svg"
            url="https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg"
          >
            豊橋<br />
            モーターズ
          </SNSButton>
          <SNSButton
            img="static/tiktok.svg"
            url="https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1"
          >
            NAVIC公式<br />
            TikTok
          </SNSButton>
        </SNSPartInner>
      </SNSPart>
    </FootSession>
  );
}

type SNSBaseInfo = {
  img: string;
  url: string;
};

function SNSButton({ img, url, children }: PropsWithChildren<SNSBaseInfo>) {
  return (
    <SNSBtn>
      <a href={url}>
        <img src={img} />
        <span>
          {children}
        </span>
      </a>
    </SNSBtn>
  );
}
