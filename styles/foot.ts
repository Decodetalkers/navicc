import styled from "@nobody/styled-components-deno";

export const FootSession = styled.footer`
  position: relative;
`;

export const CopyRight = styled.div`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
  background-color: #14508cff;
  color: white;
  display: flex;
  justify-content: center;
  height: 30px;
  & h5 {
    margin: 6px;
  }
`;

export const SNSPart = styled.div`
  display: none;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
export const SNSPartInner = styled.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  gap: 10%;
  width: 70%;
`;
export const SNSBtn = styled.span`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  width: 120px;
  height: 120px;
  position: relative;
  cursor: pointer;
  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 12px;
    text-align: center;
  }
  & img {
    width: 50px;
    transition: width 1s 0.1s;
  }
  &:hover {
    border-radius: 30%;
    background-color: #14508cff;
    & img {
      width: 100px;
    }
  }
`;

export const FootTopArea = styled.div`
  background-color: #053769ff;
  width: 100%;
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-template-rows: 1fr 5fr;
  grid-template-areas:
    "left ."
    "left right";

  height: auto;
  min-width: 900px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const FootMainArea = styled.div`
  display: grid;

  grid-area: left;
  margin-left: 10%;
  margin-right: 2%;
  margin-top: 8%;
  margin-bottom: 1%;
  gap: 10px 40px;

  grid-template-areas:
    "navigation . . . "
    "information introduction employment media "
    "information introduction employment media "
    "information introduction employment other "
    "information introduction employment .  ";
`;
export const RightPart = styled.div`
  grid-area: right;
  height: auto;
  display: grid;
  margin-top: 0;
  gap: 0;
  grid-template-areas:
    "sns"
    "icon";
`;
export const SNSRightPart = styled.div`
  grid-area: sns;
  height: auto;
  margin-top: 0;
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
`;
export const LogoPart = styled.div`
  grid-area: icon;
  align-self: center;
  justify-self: center;
  justify-content: center;
  position: relative;
  top: -60%;
  display: flex;
  height: auto;

  & img {
    object-fit: cover;
    width: 65%;
  }
  @media screen and (max-width: 900px) {
    & img {
      width: 45%;
    }
  }
`;
export const FootTitle = styled.div`
  grid-area: navigation;
  & h4 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 15px;
    color: white;
  }
  margin-bottom: 4px;
`;

export const FootOtherDetail = styled.div`
  grid-area: other;
  & h4 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 14px;
    color: white;
  }
`;
export const FootInformation = styled.div`
  grid-area: information;
`;

export const FootIntroduction = styled.div`
  grid-area: introduction;
`;

export const FootEmployment = styled.div`
  grid-area: employment;
`;
export const FootMedia = styled.div`
  grid-area: media;
`;
export const FootDetailArea = styled.div`
  display: grid;
  gap: 5px;
  grid-template-areas:
    "title title"
    "line menu";
  grid-template-columns: 10px auto;
  & h5 {
    margin-top: 0;
    margin-bottom: 7px;
    font-size: 12px;
    color: white;
  }
  & h4 {
    margin-top: 0;
    margin-bottom: 7px;
    font-size: 15px;
    color: white;
  }
`;

export const FootDetailLine = styled.div`
  display: block;
  background-color: white;
  margin-bottom: 15px;
  margin-top: 0;
  grid-area: line;
  width: 2px;
`;
export const FootDetailTitle = styled.div`
  display: block;
  margin-top: 0;
  grid-area: title;
`;
export const FootDetailMenu = styled.div`
  display: block;
  margin-top: 0;
  grid-area: menu;
`;
