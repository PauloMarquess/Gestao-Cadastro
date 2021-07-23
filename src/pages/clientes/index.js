import React from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';




export default function clientes() {


  


  return (
  
      <S.Container>
        <S.Title>Gestão de Clientes</S.Title>
        <S.Intro>Seção para adição de clientes no LocalStorage.</S.Intro>
        <S.ContainerFor>
        <S.Formulario>
         
          <S.Label>Nome</S.Label>
          <S.Inpunt placeholder="Digite seu nome completo"  type="text" required/>
          
          <S.Label>CPF</S.Label>
          <S.Inpunt placeholder="Digite somente os números"  type="numb" required/>
          <S.Label>Email</S.Label>
          <S.Inpunt placeholder="Contato@GamaAcademy.com"  type="email" required/>
          <S.Label>Telefone</S.Label>
          <S.Inpunt placeholder="Digite somente os números"  type="tel" required/>

          <S.Botoes>
        <S.Back type="button">Voltar</S.Back>
        <S.Adicionar type="submit">Adicionar Cliente</S.Adicionar>
        </S.Botoes>

        </S.Formulario>

        </S.ContainerFor>
        
      </S.Container>
  );
}

