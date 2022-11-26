import styled from "styled-components";
import backgroundImage from "../../assets/image.png";

export const HeaderPrincipal = styled.header`
  height: 413px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const TextHeader = styled.h1`
  width: 426px;
  height: 125px;
  color: white;
  position: absolute;
  left: 80px;
  top: 180px;
  font-weight: 400;
  font-size: 60px;
  line-height: 77.45px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
