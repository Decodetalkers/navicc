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

type Position = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

function getPosition(place?: number): Position {
  switch (place) {
    case 0:
      return { left: 42, right: 0, bottom: 62, top: 6 };
    case 1:
      return { left: 20, right: 0, bottom: 53, top: 15 };
    case 2:
      return { left: 10, right: 0, bottom: 0, top: 34 };
    case 3:
      return { left: 20, right: 0, bottom: 15, top: 56 };
    case 4:
      return { left: 42, right: 0, bottom: 8, top: 64 };
    case 5:
      return { left: 64, right: 0, bottom: 15, top: 56 };
    case 6:
      return { left: 74, right: 0, bottom: 0, top: 34 };
    default:
      return { left: 62, right: 0, bottom: 53, top: 15 };
  }
}

// deno-fmt-ignore
export const Circle = styled.div<{place?: number}>`
  aspect-ratio: 1;
  height: auto;
  width: auto;
  display: flex;
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
  width: 16%;
  position: relative;
  border-radius: 50%;
  background-image: url("static/white.jpg")
`;
