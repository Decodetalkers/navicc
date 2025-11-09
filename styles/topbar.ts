import styled from "@nobody/styled-components-deno";

const Header = styled.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
`;

const Icon = styled.div`
  font-weight: bold;
  float: left;
`;

const MainIcon = styled.div`
  font-size: 50px;
  color: #1b4f80;
`;
const MinIcon = styled.div`
  font-size: 17px;
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
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  height: auto;
  visibility: visible;
  justify-content: space-between;
  padding: 0 3rem;
  & a {
    font-size: 1wv;
    padding: 14px 16px;
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
