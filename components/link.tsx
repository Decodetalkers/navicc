import {
  GridContainer,
  LinkSection,
  UnitDiv,
  UnitImg,
  UnitImgDiv,
  UnitText,
} from "~/styles/link.ts";

function UnitImage({ src, url }: { src: string; url: string }) {
  return (
    <UnitImgDiv href={url}>
      <UnitImg src={src} />
    </UnitImgDiv>
  );
}

export function LinkSectionArea() {
  return (
    <LinkSection>
      <GridContainer>
        <UnitDiv>
          <UnitImage
            src="static/links/link1.jpg"
            url="https://www.navic-inc.jp/"
          />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link2.jpg"
            url="https://www.ja-oil.com/"
          />
          <UnitText>
            <h1>
              J&Aオイル
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link3.jpg"
            url="https://www.clezeed.com/"
          />
          <UnitText>
            <h1>
              CLEZEED(旧CLESEED)<br />
              ショップサイト
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link4.jpg"
            url="https://www.navic.cc/creer-shop/"
          />
          <UnitText>
            <h1>
              クレール<br />
              オンラインショップ
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link5.jpg"
            url="https://www.clevers.co.jp/"
          />
          <UnitText>
            <h1>
              FEEL<br />
              豊橋店
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link6.png"
            url="https://kenkoucreer.base.shop/"
          />
          <UnitText>
            <h1>
              健康クレール
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link7.jpg"
            url="https://tabirabo.com/"
          />
          <UnitText>
            <h1>
              キャンピングカー<br />
              レンタル
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link8.jpg"
            url="https://www.mimitakara.jp/"
          />
          <UnitText>
            <h1>
              Mimitakara
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link9.jpg"
            url="https://clevers-nagoya.com/"
          />
          <UnitText>
            <h1>
              クレヴァーズ<br />
              名古屋
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link10.png"
            url="https://navic-plaza.com/"
          />
          <UnitText>
            <h1>
              NAVIC公式ショップ
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage
            src="static/links/link11.jpg"
            url="https://www.outdo.jp/"
          />
          <UnitText>
            <h1>
              バイク用ナトリウム<br />
              イオンバッテリー
            </h1>
          </UnitText>
        </UnitDiv>
      </GridContainer>
    </LinkSection>
  );
}
