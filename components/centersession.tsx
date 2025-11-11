import { CenterLogo, CenterSection, Circle } from "~/styles/centersection.ts";

export function CenterArea() {
  return (
    <CenterSection>
      <CenterLogo>
        <img src="static/navic_logo.png" />
      </CenterLogo>
      <Circle place={0}>
      </Circle>
      <Circle place={1}>
      </Circle>
      <Circle place={2}>
      </Circle>
      <Circle place={3}>
      </Circle>
      <Circle place={4}>
      </Circle>
      <Circle place={5}>
      </Circle>
      <Circle place={6}>
      </Circle>
      <Circle place={7}/>
    </CenterSection>
  );
}
