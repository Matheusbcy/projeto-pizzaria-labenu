import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { GlobalStyle } from "./GlobalStyle";
import { Body } from "./styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import cards from "./object.json";
import { Carrinho } from "./components/Carrinho";
import { HeaderImage } from "./components/HeaderImage";

export default function App() {
  return (
    <Body>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<HeaderImage />}></Route>
        </Routes>
        <Routes>
          <Route exact="true" path="/" element={<Nav />}></Route>
        </Routes>
        <Routes>
          <Route exact="true" path="/" element={<Main cards={cards} />}></Route>
          <Route path="/Carrinho" element={<Carrinho />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Body>
  );
}
