import {
  CopyRight,
  FootSession,
  SNSBtn,
  SNSPart,
  SNSPartInner,
} from "~/styles/foot.ts";
import { PropsWithChildren } from "react";

export function Foot() {
  return (
    <footer>
      <FootSession>
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
    </footer>
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
