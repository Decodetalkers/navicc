import styled from "@nobody/styled-components-deno";

export const SectionSlider = styled.section`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 6fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow-x: auto;

  max-width: var(--container-xl);
`;

export const Sliders = styled.div`
  display: flex;
  gap: 15em;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  grid-column: 4;
  grid-row: 2/9;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    flex: 0 0 100%;
    scroll-snap-align: center;
  }
  scrollbar-width: none;
`;

export const LeftButton = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  grid-row: 5;
  grid-column: 2;
  margin-left: 25px;
  background-image: url("static/arrow-left.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
`;

export const RightButton = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  grid-row: 5;
  grid-column: 6;
  margin-left: 25px;
  background-image: url("static/arrow-right.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
`;
