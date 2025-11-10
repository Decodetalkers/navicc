import styled, { setAnimation } from "@nobody/styled-components-deno";

export const SectionSlider = styled.section`
  position: relative;
  display: flex;
  gap: 1em;
`;

export const Sliders = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 1em;
  scroll-snap-type: x mandatory;
  &:-webkit-scrollbar {
    display: none;
  }
  &:hover {
    color: blue;
  }
  &::scroll-button(right) {
    content: 'Right'
  }
`;

setAnimation("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;
