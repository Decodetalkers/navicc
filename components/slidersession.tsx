import {
  LeftButton,
  RightButton,
  SectionSlider,
  Sliders,
} from "~/styles/slidersession.ts";

export function SliderSection() {
  return (
    <SectionSlider>
      <LeftButton />
      <Sliders>
        <img src="static/display.jpg" />
        <img src="static/display.jpg" />
        <img src="static/display.jpg" />
        <img src="static/display.jpg" />
        <img src="static/display.jpg" />
        <img src="static/display.jpg" />
      </Sliders>
      <RightButton />
    </SectionSlider>
  );
}
