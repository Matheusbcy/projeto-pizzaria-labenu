import React, { useState } from "react";
import { ContainerForm, DivCarrinho, InputButton, InputForm } from "./style";

export const Carrinho = () => {
  const [name, setName] = useState("");
  const [end, setEnd] = useState("");
  const [tel, setTel] = useState();
  const [numberHouse, setNumberHouse] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEnd = (e) => {
    setEnd(e.target.value);
  };
  const onChangeTel = (e) => {
    setTel(e.target.value);
  };
  const onChangeNumberHouse = (e) => {
    setNumberHouse(e.target.value);
  };
  const pedido = {
    nome: name,
    endereço: end,
    telefone: tel,
    numeroDaCasa: numberHouse,
  };
  const handleClick = () => {
    console.log(pedido);
  };
  return (
    <DivCarrinho>
      <ContainerForm>
        <InputForm
          onChange={onChangeName}
          type="text"
          name=""
          id=""
          required
          placeholder="Seu nome"
        />
        <InputForm
          onChange={onChangeEnd}
          type="text"
          name=""
          id=""
          required
          placeholder="Endereço"
        />
        <InputForm
          onChange={onChangeTel}
          type="number"
          name=""
          id=""
          required
          placeholder="Número da casa"
        />
        <InputForm
          onChange={onChangeNumberHouse}
          type="tel"
          name=""
          id=""
          required
          placeholder="(xx) xxxxx-xxxx"
        />
        <InputButton onClick={handleClick} type="button" value="Finalizar pedido" />
      </ContainerForm>
    </DivCarrinho>
  );
};
