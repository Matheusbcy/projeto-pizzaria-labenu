import React from "react";
import icone from "../../assets/image16.png";
import icone2 from "../../assets/image16 (1).png";
import icone3 from "../../assets/image16 (2).png";
import { DivNav, Image } from "./style";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <DivNav>
        <Link to="/"><Image src={icone} alt=""/></Link>
        <Link to="/Carrinho"><Image src={icone2} alt=""/></Link>
        <Link to="/"><Image src={icone3} alt=""/></Link>
    </DivNav>
  );
};
