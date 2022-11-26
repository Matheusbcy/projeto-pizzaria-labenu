import styled from "styled-components";

export const DivCarrinho = styled.div`
  height: 804px;
`;
export const ContainerForm = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 161px;
`;
export const InputForm = styled.input`
  width: 492px;
  height: 66px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.3px solid #000000;
  background: #ffffff;
  margin-top: 27px;
  font-size: 30px;
  line-height: 35.31px;
  font-weight: 400;
  padding: 15px 0px 15px 18px;
  border: none;
`;
export const InputButton = styled.input`
  width: 492px;
  height: 59px;
  background: #81b97c;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  margin-top: 39px;
  font-weight: 400;
  font-size: 30px;
  &:active {
    top: 5px;
    box-shadow: none;
  }
`;
