import React from "react";
import {
  Button,
  ConteinerLista,
  DivCard,
  ImageCard,
  Input,
  Lista,
  Preco,
  Sabor,
  Tamanho,
  TextSabor,
} from "./style";

export const CardPizza = ({ key, name, image, value }) => {
  return (
    <DivCard>
      <TextSabor>
        Sabor: <Sabor>{name}</Sabor>
      </TextSabor>

      <ImageCard src={image} alt="" />
      <Preco>Preço: R$ {value}</Preco>
      <Tamanho>Tamanho: </Tamanho>
      <ConteinerLista>
        <Lista>
          <Input type="checkbox" name="" id="" />
          Pequeno
        </Lista>
        <Lista>
          <Input type="checkbox" name="" id="" />
          Medio
        </Lista>
        <Lista>
          <Input type="checkbox" name="" id="" />
          Grande
        </Lista>
      </ConteinerLista>
      <Button>Adicionar</Button>
    </DivCard>
  );
};
