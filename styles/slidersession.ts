import styled, { setAnimation } from "@nobody/styled-components-deno";

export const SectionSlider = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  border: 5px solid red;
  overflow-x: auto;
  max-width: var(--container-xl);
`;

export const Sliders = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  animation: spin 5s infinite linear;
`;

setAnimation("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;
