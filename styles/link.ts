import styled from "@nobody/styled-components-deno";

export const LinkSection = styled.section`
  align-items: center;
  position: relative;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UnitDiv = styled.div`
  border: 1px solid #99ccffff;
  display: grid;
  grid-template-areas:
    "img"
    "text";
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: 700px) {
    grid-template-rows: 3fr 60px;
  }
  @media screen and (max-width: 600px) {
    grid-template-rows: 3fr 50px;
  }
  @media screen and (max-width: 500px) {
    grid-template-rows: 3fr 40px;
  }
  gap: 0px;
`;

export const UnitImgDiv = styled.a`
  display: flex;
  justify-content: center;
  grid-area: img;
  width: 100%;
  margin: 0;
`;

export const UnitImg = styled.img`
  object-fit: contain;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const UnitText = styled.div`
  align-items: center;
  grid-area: text;
  color: #14508cff;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 8px;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: 1200px) {
    font-size: 7px;
  }
  @media screen and (max-width: 800px) {
    font-size: 6px;
  }
  @media screen and (max-width: 700px) {
    font-size: 8px;
  }
  @media screen and (max-width: 600px) {
    font-size: 5px;
  }
`;
