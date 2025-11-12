import styled from "@nobody/styled-components-deno";

export const NewsMain = styled.section`
  display: grid;
  grid-area: 8/1/9/2;
  grid-template-columns: repeat(15, 1fr);
  position: relative;
  align-self: stretch;
  height: auto;
  gap: 30px;
`;

export const NewsContent = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
  grid-column: 2/14;
  grid-row: 2;
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

export const ViewAll = styled.div`
  grid-column: 2/14;
  grid-row: 3;

  & h3 {
    font-size: 40px;
  }
  & a {
    color: #14508cff;
  }
`;
