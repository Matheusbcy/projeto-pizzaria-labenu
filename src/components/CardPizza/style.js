import styled from "styled-components";

export const DivCard = styled.div`
  width: 307px;
  height: 276px;
  border-radius: 1px;
  background-color: #fbefdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ImageCard = styled.img`
  width: 276px;
  height: 142px;
  border-radius: 2px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 20px 15px 0px 16px;
`;
export const ConteinerLista = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 7px 0px 0px 32px;
`;
export const TextSabor = styled.p`
  width: 48px;
  height: 18px;
  font-weight: 400;
  font-size: 12px;
  margin: 6px 0px 0px 16px;
`;
export const Sabor = styled.span`
  width: 94px;
  height: 22px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 0px 0px 8px 102px;
`;
export const Preco = styled.p`
  width: 149px;
  height: 22px;
  font-weight: 400px;
  font-size: 16px;
  line-height: 19px;
  margin: 16px 143px 7px 15px;
`;
export const Tamanho = styled.p`
  width: 68px;
  height: 13px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin: 0px 0px 0px 10px;
`;
export const Lista = styled.li`
  width: 53px;
  height: 10px;
  font-size: 10px;
  line-height: 12px;
`;
export const Input = styled.input`
  width: 10px;
  height: 9px;
`;
export const Button = styled.button`
  width: 307px;
  height: 37px;
  background-color: #ffc77d;
  margin: 17px 0px 0px 0px;
  border: none;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  
  cursor: pointer;
  text-transform: uppercase;
  &:active {
    top: 5px;
    box-shadow: none;
  }
`;
