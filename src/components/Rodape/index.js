import React from "react";
import { Rodape, Icons } from "./style";

export const Footer = () => {
  return (
    <Rodape>
      <Icons>
        <img src="../../../imagem/fb.png" alt="logo facebook" />
        <img src="../../../imagem/tw.png" alt="logo twitter" />
        <img src="../../../imagem/ig.png" alt="logo instagram" />
      </Icons>
      <img src="../../../imagem/logo.png" alt="logo organo" />
      <h5>Desenvolvido por Marcos</h5>
    </Rodape>
  );
};
