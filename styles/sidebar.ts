import styled from "@nobody/styled-components-deno";

const SideBar = styled.div<
  {
    isOpen?: boolean;
    zIndex?: number;
    top?: string;
  }
>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: ${({ top }) => top ? top : 0}px;
  z-index: ${({ zIndex }) => zIndex ? zIndex : 8};
  list-style-type: none;
  display: none;
  /* move flex-items in column */
  flex-direction: column;

  right: ${({ isOpen }) => isOpen ? "0" : "-100%"};
  transition: right 0.3s ease-in-out;

  @media screen and (max-width: 900px) {
    visibility: visible;
    display: flex;
  }
  & button {
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  & button:hover {
    background-color: #ddd;
    color: black;
  }
`;

export const CloseButton = styled.div`
  background-color: transparent;
  cursor: pointer;
  height: 50px;
  width: 50px;
  position: sticky;
  margin-right: 40px;
  margin-left: 85%;
  margin-top: 40px;
  color: blue;
  background-image: url("static/cross.svg");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
`;

export const MenuGridContext = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 6fr 4fr;
`;

export const MenuBlur = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  background-color: transparent;
  backdrop-filter: blur(5px);

  @media screen and (min-width: 600px) {
    display: none;
  }
  grid-column: 1;
  grid-row: 1;
  display: block;
`;

export const MenuRight = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  grid-column: 1/3;
  background-color: white;
  @media screen and (min-width: 600px) {
    grid-column: 2/3;
  }

  grid-row: 1;
  display: block;
`;

export const MenuList = styled.nav`
  margin-left: 15%;
  margin-right: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 7fr 1fr;
  gap: 4px;
  position: relative;
`;

export const Label = styled.span<{ hidden?: boolean }>`
  text-align: center;
  grid-column: 3;
  font-size: 25px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: #73acdeff;
  visibility: ${({ hidden }) => hidden ? "hidden" : "visible"};
  cursor: pointer;
  & a {
    font-size: 15px;
    color: #73acdeff;
    text-decoration: none;
  }
`;
export const NormalLabel = styled.span`
  text-align: center;
  grid-column: 3;
  font-size: 25px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: #73acdeff;
  & a {
    color: #73acdeff;
    text-decoration: none;
  }
`;
export const Arrow = styled.div<{ ishidden?: boolean }>`
  grid-column: 2;
  width: auto;
  height: 100%;
  background-image: ${({ ishidden }) => {
    return ishidden
      ? 'url("static/arrow-down.svg")'
      : 'url("static/arrow-up.svg")';
  }};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const SideBarA = styled.a<{ isBottom?: boolean }>`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-top: ${({ isBottom }) => isBottom ? "auto" : "0"};
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const MenuButtonDiv = styled.div`
  grid-column: 2/2;
  display: flex;
  justify-content: right;
  align-items: center;
  grid-row: 1;
  margin-right: 20px;
`;

const MenuButton = styled.button`
  background-color: #73acdeff;

  color: white;
  border: none;
  border-radius: 25%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: hidden;
  background-image: url("static/menu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`;

const SearchButton = styled.button<
  { isOpen?: boolean; alwaysShown?: boolean; bottom?: number; left?: number }
>`
  position: fixed;
  bottom: ${({ bottom }) => bottom ? bottom : 20}px;
  left: ${({ isOpen, left }) => isOpen ? left ? left : 210 : 20}px;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({ alwaysShown }) => alwaysShown ? "visible" : "hidden"};
  background-image: url("static/search_icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`;

export { MenuButton, MenuButtonDiv, SearchButton, SideBar, SideBarA };
