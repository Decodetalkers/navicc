import styled, { StyleGroup } from "@nobody/styled-components-deno";

const Header = styled.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
  display: grid;
  grid-template_columns: auto auto;
  margin-left: 10px;
  z-index: 10;
  overflow: visible;
`;

const Icon = styled.div`
  font-weight: bold;
  margin-top: 10px;
  & img {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    & img {
      width: 350px;
    }
  }
`;

const DropDownGroup = ["dropDown"] as const;

const dropDownGen = new StyleGroup(DropDownGroup, "dropDown");

dropDownGen.setCSS("dropDown")`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1000;
  & a {
   color: black;
   padding: 12px 16px;
   text-decoration: none;
   display: block;
  }
`;

export const DropDownCSS = dropDownGen.generate();

const TopBar = styled.nav<{ isdark?: boolean; autohide?: boolean }>`
  backdrop-filter: blur(10px);
  background-color: ${({ isdark }) => {
    if (isdark) {
      return "#111111";
    }
    return "white";
  }};
  overflow: visible;
  margin-left: 0;
  margin-right: 0;
  grid-column: 2/2;
  grid-row: 1;
  position: relative;
  display: flex;
  align-items: center;
  height: auto;
  visibility: visible;
  justify-content: center;
  & a {
    font-size: 1.5vw;
    padding: 14px 15px;
    text-decoration: none;
    flex-direction: row;
    box-sizing: border-box;
    color: #4e7295ff;
    overflow: visible;
    z-index: 999;
  }
  & a:hover .dropDown {
    display: block;
  }

  @media screen and (max-width: 900px) {
    visibility: ${({ autohide }) => {
      if (autohide) {
        return "hidden";
      }
      return "visible";
    }};
  }
`;

export default TopBar;

export { Header, Icon };
