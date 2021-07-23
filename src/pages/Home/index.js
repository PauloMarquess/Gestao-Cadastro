import React from 'react';
import * as S from '../../styled';

import {useHistory} from 'react-router-dom';



export default function Home() {
  const history = useHistory();
  const HandleClientes = () => {
    history.push("clientes");
  }

  const HandleProdutos = () => {
    history.push("produtos")
  } 
  return (
      <S.Container>
      <S.Title>Gestão de cadastros</S.Title>
      <S.Intro>Sistema para gestão de cadastros. Clique em Clientes para adicionar clientes na base de dados ou acione o botão de Produtos para adicionar produtos na base de dados.</S.Intro>
      <S.Botoes>
      <S.BotaoC onClick={HandleClientes}>Clientes</S.BotaoC>
      <S.BotaoP onClick={HandleProdutos}>Produtos</S.BotaoP>
      </S.Botoes>
      </S.Container>
  );
}

