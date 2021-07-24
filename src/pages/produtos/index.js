import React, {useState }from 'react';
import * as S from './styled'
import {useHistory} from 'react-router-dom';

export default function Produtos() {
  const history =useHistory();
  const HandleBack = () => {
    history.push ("/")
  };

  const [tipo, setTipo] = useState();
  const [desc, setDesc] = useState();
  const [preco, setPreco] = useState();
  const [estoque, setEstoque] = useState();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("@welcome-app", JSON.stringify({tipo,desc,preco,estoque}));
    window.location.reload()
    
  };
  



  return <S.Container>
  <S.Title>Gestão de produtos</S.Title>
  <S.Intro>Seção para adição de produtos no LocalStorager.</S.Intro>
  <S.ContainerFor > 
    <S.Formulario onSubmit={handleSubmit}>
    <S.Label>Categoria</S.Label>
      
      <S.Select>
    <option value="">Escolha a categoria</option>
    <option value ="opcao1" >Eletrodomésticos</option>
    <option value ="opcao1"  >Celulares</option>
    <option value ="opcao1">Móveis</option>
    <option value ="opcao4">Outros</option>
    </S.Select>
    
    
    <S.Label>Tipo</S.Label>
    <S.Inpunt placeholder="Tipo do Produto" type="text"
    onChange={(e) => setTipo(e.target.value)}/>

    <S.Label>Descrição</S.Label>
    <S.Inpunt placeholder="Descrição com características e fucionalidades" type="text"
    onChange={(e) => setDesc(e.target.value)}/>

    <S.Label>Preço</S.Label>
    <S.Inpunt placeholder="Digite somente os números " type="numb"
    onChange={(e) => setPreco(e.target.value)} />

    <S.Label>Estoque</S.Label>
    <S.Inpunt placeholder ="Estoque em números inteiros" type="numb"
    onChange={(e) => setEstoque(e.target.value)}/>

    <S.Botoes>
      <S.Back type="button" onClick ={HandleBack}>Voltar</S.Back>
      <S.Adicionar type ="submit">Adicionar Produto</S.Adicionar>
    </S.Botoes>
    </S.Formulario>
  </S.ContainerFor>
  </S.Container>;
}

