import styled from "@nobody/styled-components-deno";

export const NewsMain = styled.section`
  display: grid;
  grid-area: 8/1/9/2;
  position: relative;
  align-self: stretch;
  height: auto;
`;

export const NewsContent = styled.div`
  margin-top: 50px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
`;

export const UnitImg = styled.img`
  width: 20%;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Text = styled.div`
  width: 80%;
  margin-left: 8px;
  overflow: clip;
  & h1 {
    font-size: 20px;
    color: #32679bff;
  }
  & h3 {
    font-size: 12px;
    color: #32679bff;
  }
`;

export const UnitAll = styled.div`
  border: 1px solid blue;
  height: 16vw;
  display: flex;
`;
