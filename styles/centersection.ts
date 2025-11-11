import styled from "@nobody/styled-components-deno";

export const CenterSection = styled.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template_columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  width: 100%;
`;

export const CenterLogo = styled.div`
  align-self: center;
  justify-self: center;
  justify-content: center;
  grid-area: 1/1/2/2;
  position: relative;
  display: flex;
  height: auto;

  & img {
    object-fit: cover;
    width: 45%;
  }
`;
export const CenterSvg = styled.div`
  grid-area: 1/1/2/2;
  position: relative;
  justify-self: center;
  align-self: center;
  display: flex;
  height: auto;
  width: 64%;
  aspect-ratio: 1;
  background: transparent;
  & svg {
    width: 100%;
    height: 100%;
    fill-opacity: 0;
    stroke: #14508cff;
    stroke-width: 2px;
  }
`;
type Position = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

function getPosition(place?: number): Position {
  switch (place) {
    case 0:
      return { left: 41, right: 0, bottom: 62, top: 6 };
    case 1:
      return { left: 20, right: 0, bottom: 53, top: 15 };
    case 2:
      return { left: 10, right: 0, bottom: 0, top: 34 };
    case 3:
      return { left: 20, right: 0, bottom: 15, top: 56 };
    case 4:
      return { left: 41, right: 0, bottom: 8, top: 64 };
    case 5:
      return { left: 64, right: 0, bottom: 15, top: 56 };
    case 6:
      return { left: 72, right: 0, bottom: 0, top: 34 };
    default:
      return { left: 62, right: 0, bottom: 53, top: 15 };
  }
}

// deno-fmt-ignore
export const Circle = styled.div<{place?: number}>`
  aspect-ratio: 1;
  height: auto;
  display: grid;
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: start;
  margin-left: ${({place}) => {
    return getPosition(place).left
  }}%;
  margin-top: ${({place}) => {
    return getPosition(place).top
  }}%;
  margin-bottom: ${({place}) => {
    return getPosition(place).bottom
  }}%;
  margin-right: ${({place}) => {
    return getPosition(place).right
  }}%;
  width: 18%;
  position: relative;
  border-radius: 50%;
  background-color: white;
  align-items: center;
`;

export const CircleText = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #053769ff;
  width: 100%;
  font-size: 15px;
  gap: 0;
  margin: 0;
  & h1 {
    margin: 0;
  }
`;
