import React,{useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';




export default function Clientes() {

  const history = useHistory();
  const HandleBack = () => {
    history.push ("/")
  }
  const [nome,setNome] =useState();
  const armazenar =(chave,valor) =>{
    localStorage.setItem('nome',nome)
   
  }
  

  return (
  
      <S.Container>
        <S.Title>Gestão de Clientes</S.Title>
        <S.Intro>Seção para adição de clientes no LocalStorage.</S.Intro>
        <S.ContainerFor>
        <S.Formulario>
         
          <S.Label>Nome</S.Label>
          <S.Inpunt placeholder="Digite seu nome completo"  type="text" required 
          value ={nome} onChange = {(e) =>setNome(e.target.value)}/>
          
          <S.Label>CPF</S.Label>
          <S.Inpunt placeholder="Digite somente os números"  type="numb" required/>
          
          <S.Label>Email</S.Label>
          <S.Inpunt placeholder="Contato@GamaAcademy.com"  type="email" required/>
          <S.Label>Telefone</S.Label>
          <S.Inpunt placeholder="Digite somente os números"  type="tel" required/>

          <S.Botoes>
        <S.Back type="button" onClick={HandleBack}>Voltar</S.Back>
        <S.Adicionar type="submit" onClick ={armazenar}>Adicionar Cliente</S.Adicionar>
        </S.Botoes>

        </S.Formulario>

        </S.ContainerFor>
        
      </S.Container>
  );
}

