import styled from "@nobody/styled-components-deno";

const EmptyPlace = styled.div`
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

const WaveLine = styled.div`
  width: 100%;
  background-color: #f6fafd;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 35px;
`;

export { EmptyPlace as EmptyPlaceCSS, InlineLinkCSS, WaveLine as WaveLineCSS };
