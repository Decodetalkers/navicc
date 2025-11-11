import { CenterLogo, CenterSection, Circle } from "~/styles/centersection.ts";

export function CenterArea() {
  return (
    <CenterSection>
      <CenterLogo>
        <img src="static/navic_logo.png" />
      </CenterLogo>
      <Circle>
        <img src="static/white.jpg" />
      </Circle>
    </CenterSection>
  );
}
