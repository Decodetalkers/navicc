import styled, { StyleGroup } from "@nobody/styled-components-deno";

const Header = styled.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  overflow: visible;
  width: 100%;
  @media screen and (max-width: 900px) {
    grid-template-columns: auto 120px;
  }
`;

const Icon = styled.div`
  font-weight: bold;
  margin-top: 10px;
  & img {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    & img {
      width: 280px;
    }
  }
  @media screen and (min-width: 1200px) {
    & img {
      width: 300px;
    }
  }
  @media screen and (min-width: 1500px) {
    & img {
      width: 480px;
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
  z-index: 1000;
  color: #4e7295ff;
  & a {
   color: black;
   padding: 12px 16px;
   text-decoration: none;
   display: block;
  }
  & a:hover {
    background-color: #14508cff;
  }
`;

export const DropDownCSS = dropDownGen.generate();

const TopBar = styled.nav<{ isdark?: boolean; autohide?: boolean }>`
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
  }
  & a:hover {
    color: #4e72e5ff;
  }
  & a:hover .dropDown {
    display: block;
  }
  @media screen and (max-width: 1100px) {
    & a {
      font-size: 1.4vw;
    }
  }
  @media screen and (max-width: 1000px) {
    & a {
      font-size: 1.32vw;
    }
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
