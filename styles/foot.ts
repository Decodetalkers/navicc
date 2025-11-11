import styled from "@nobody/styled-components-deno";

export const FootSession = styled.section`
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
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
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
