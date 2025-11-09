import styled from "@nobody/styled-components-deno";

const EmptyPlaceCSS = styled.div`
  width: 100%;
  height: 30px;
`;

const InlineLinkCSS = styled.span`
  position: relative;
  display: inline-block;
  & .tooltiptext {
    visibility: hidden;
    background-color: #222222;
    font-size: 20px;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  &:hover .tooltiptext {
    visibility: visible;
  }
`;

const NewsCSS = styled.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`;

const JapaneseTitleCSS = styled.div`
  text-align: left;
  margin-left: 12%;
  height: auto;
  width: 28%;
  align-self: center;
  justify-self: start;
  margin-bottom: 0%;
  grid-area: 1/1/2/2;
  position: relative;
  h2 {
    font-size: 3vw;
    margin: 0;
    color: white;
  }
`;

const EnglishTitleCSS = styled.div`
  grid-area: 1/1/2/2;
  align-self: start;
  margin-bottom: 0%;
  margin-top: 5%;
  margin-right: 0;
  margin-right: 6%;

  justify-self: end;
  grid-area: 1/1/2/2;
  h1 {
    font-size: 8vw;
    color: #7296baff;
    margin: 0;
  }
`;

export {
  EmptyPlaceCSS,
  EnglishTitleCSS,
  InlineLinkCSS,
  JapaneseTitleCSS,
  NewsCSS,
};
