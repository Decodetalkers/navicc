import styled, { setAnimation } from "@nobody/styled-components-deno";

export const SectionSlider = styled.section`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 12fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 7fr 1fr;
  overflow-x: auto;
  max-width: var(--container-xl);
`;

export const Sliders = styled.div`
  display: flex;
  gap: 15em;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  grid-column: 4;
  grid-row: 2;
  & img {
    flex: 0 0 100%;
    scroll-snap-align: center;
  }
  scrollbar-width: none;
`;

setAnimation("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;
