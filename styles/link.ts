import styled from "@nobody/styled-components-deno";

export const LinkSection = styled.section`
  align-items: center;
  position: relative;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  grid-template-columns: auto auto auto auto auto auto auto;
  gap: 4px;
`;

export const UnitDiv = styled.div`
  align-items: center;
  border: 1px solid blue;
`;

export const UnitImgDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UnitImg = styled.img`
  margin-top: 3px;
  margin-left: 4px;
  margin-right: 4px;
  width: 90%;
`;

export const UnitText = styled.div`
  align-items: center;
  color: blue;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 10px;
`;
