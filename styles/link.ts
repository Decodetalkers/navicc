import styled from "@nobody/styled-components-deno";

export const LinkSection = styled.section`
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  grid-template-columns: auto auto auto auto auto auto auto;
  gap: 4px;

  & div {
    background-color: #f1f1f1;
    border: 1px solid black;
    padding: 10px;
    font-size: 30px;
    text-align: center;
  }
`;
