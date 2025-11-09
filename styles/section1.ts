import styled from "@nobody/styled-components-deno";

export const Section1Top = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
`;

export const Background = styled.img`
  height: auto;
  width: 53%;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;

export const Empty = styled.div`
  position: relative;
  width: 47%;
`

export const Text = styled.div`
  height: auto;
  z-index: 3;
  top: 10%;
  left: 10%;
  position: absolute;
  text-align: left;
  font-size: 4vw;
  font-weight: bold;
  color: #1b4f80;
  padding: 0;
  gap: 0
`;
