import React from 'react';
import * as S from './styled'
// import { Container } from './styles';

function produtos() {
  return <S.Container>
  <S.Title>Gestão de produtos</S.Title>
  <S.Intro>Seção para adição de produtos no LocalStorager.</S.Intro>
  <S.ContainerFor > 
    <S.Formulario>
    <S.Label>Categoria</S.Label>
      
      <S.Select>
    <option value="">Escolha a categoria</option>
    <option value ="opcao1">Eletrodomésticos</option>
    <option value ="opcao1">Celulares</option>
    <option value ="opcao1">Móveis</option>
    <option value ="opcao4">Outros</option>
    </S.Select>
    
    
    <S.Label>Tipo</S.Label>
    <S.Inpunt placeholder="Tipo do Produto" type="text"/>
    <S.Label>Descrição</S.Label>
    <S.Inpunt placeholder="Descrição com características e fucionalidades" type="text"/>
    <S.Label>Preço</S.Label>
    <S.Inpunt placeholder="Digite somente os números " type="numb" />
    <S.Label>Estoque</S.Label>
    <S.Inpunt placeholder ="Estoque em números inteiros" type="numb"/>

    <S.Botoes>
      <S.Back type="button">Voltar</S.Back>
      <S.Adicionar type ="submit">Adicionar Produto</S.Adicionar>
    </S.Botoes>
    </S.Formulario>
  </S.ContainerFor>
  </S.Container>;
}

export default produtos;