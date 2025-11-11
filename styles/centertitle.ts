import styled from "@nobody/styled-components-deno";

export const CenterTitleSectionCSS = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  background-color: #f5faffff;
`;

export const CenterTitleCSS = styled.div`
  text-align: center;
  width: 100%;
  padding: 0;
  margin-top: 0;
  & h1 {
    margin: 1px;
    font-size: 5vw;
    color: #73acdeff;
  }
  & h5 {
    margin-bottom: 40px;
    margin-top: 0px;
    font-size: 1.5vw;
    color: #14508cff;
    @media screen and (max-width: 900px) {
      visibility: hidden;
    }
  }
`;

export const WaveLineCSS = styled.div`
  width: 100%;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 50px;
`;
