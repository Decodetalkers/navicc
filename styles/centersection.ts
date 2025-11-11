import styled from "@nobody/styled-components-deno";

export const CenterSection = styled.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template_columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  height: 500px;
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
    width: 60%;
  }
`;
