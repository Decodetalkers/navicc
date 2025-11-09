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
  width: 65%;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;

export const Empty = styled.div`
  position: relative;
  width: 35%;
`

export const Text = styled.div`
  height: auto;
  z-index: 3;
  top: 30%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
`;
