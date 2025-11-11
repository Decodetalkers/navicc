import styled from "@nobody/styled-components-deno";

const Header = styled.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
  display: grid;
  grid-template_columns: auto auto;
  margin-left: 10px;
`;

const Icon = styled.div`
  font-weight: bold;
  margin-top: 10px;
  & img {
    width: 250px;
  }
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
  & a {
    font-size: 1.5vw;
    padding: 14px 15px;
    text-decoration: none;
    flex-direction: row;
    box-sizing: border-box;
    color: #4e7295ff;
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
