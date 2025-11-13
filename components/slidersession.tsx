import { TargetedUIEvent } from "preact";
import {
  LeftButton,
  RightButton,
  SectionSlider,
  Sliders,
} from "~/styles/slidersession.ts";

import { useEffect } from "preact/hooks";

export function SliderSection() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(intervalId);
  });
  const scrollMonitor = (e: TargetedUIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth } = e.currentTarget;

    if (scrollLeft >= clientWidth * 4.8) {
      e.currentTarget.scrollTo({ left: 0, behavior: "instant" });
    }
  };
  const goPre = () => {
    const target = document.getElementById("mainSlider");

    if (target != null) {
      const currentPlace = target.scrollLeft;
      const clientWidth = target.clientWidth;
      let left = currentPlace - clientWidth;
      if (left < 0) {
        left = 2 * clientWidth;
        target.scrollTo({
          left,
          behavior: "instant",
        });
        return;
      }
      target.scrollTo({
        left,
        behavior: "smooth",
      });
    }
  };
  const goNext = () => {
    const target = document.getElementById("mainSlider");

    if (target != null) {
      const currentPlace = target.scrollLeft;
      const clientWidth = target.clientWidth;
      target.scrollTo({
        // TODO: fix the problem
        left: currentPlace + clientWidth + 10,
        behavior: "smooth",
      });
    }
  };
  return (
    <SectionSlider>
      <LeftButton onClick={goPre} />
      <Sliders id="mainSlider" onScroll={scrollMonitor}>
        <img src="static/display.jpg" />
        <img src="static/display2.jpg" />
        <img src="static/display3.jpg" />
        <img src="static/display4.jpg" />
        <img src="static/display.jpg" />
      </Sliders>
      <RightButton onClick={goNext} />
    </SectionSlider>
  );
}
