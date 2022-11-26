import React from "react";
import { CardPizza } from "../CardPizza";
import { DivCatalogo, TextMain } from "./style";

export const Main = ({ cards }) => {
  return (
    <div>
      <TextMain>MENU</TextMain>
      <DivCatalogo>
        {cards.map((post) => (
          <CardPizza
            key={post.id}
            name={post.sabor}
            image={post.image}
            value={post.value}
          />
        ))}
      </DivCatalogo>
    </div>
  );
};
