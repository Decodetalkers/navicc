import styled from "@nobody/styled-components-deno";

const Header = styled.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
  display: grid;
  grid-template_columns: auto auto;
  margin-left: 20px;
`;

const Icon = styled.div`
  font-weight: bold;
  float: left;
`;

const MainIcon = styled.div`
  margin-top: 10px;
  font-size: 50px;
  color: #1b4f80;
  grid-column: 2/2;
  grid-row: 1;
`;
const MinIcon = styled.div`
  font-size: 12px;
`;
const TopBar = styled.nav<{ isdark?: boolean; autohide?: boolean }>`
  backdrop-filter: blur(10px);
  overflow: hidden;
  background-color: ${({ isdark }) => {
    if (isdark) {
      return "#111111";
    }
    return "white";
  }};
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
  padding: 0 0;
  & a {
    font-size: 1.4vw;
    padding: 14px 20px;
    text-decoration: none;
    flex-direction: row;
    box-sizing: border-box;
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

export { Header, Icon, MainIcon, MinIcon };
