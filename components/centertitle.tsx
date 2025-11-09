import {
  CenterTitleCSS,
  CenterTitleSectionCSS,
  WaveLineCSS,
} from "~/styles/centertitle.ts";

export function CenterTitle() {
  return (
    <CenterTitleSectionCSS>
      <WaveLineCSS />
      <CenterTitleCSS>
        <h1>
          NAVICの取り組み
        </h1>
        <h5>
          OUR SERVICE
        </h5>
      </CenterTitleCSS>
    </CenterTitleSectionCSS>
  );
}
