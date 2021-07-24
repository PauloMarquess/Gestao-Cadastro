import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

export default function Clientes() {
  const history = useHistory();
  const HandleBack = () => {
    history.push("/");
  };
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("@welcome-app", JSON.stringify({ nome, email, cpf ,tel}));
    window.location.reload()
    
  };



  return (
    <S.Container>
      <S.Title>Gestão de Clientes</S.Title>
      <S.Intro>Seção para adição de clientes no LocalStorage.</S.Intro>
      <S.ContainerFor>
        <S.Formulario onSubmit={handleSubmit}>
          <S.Label>Nome</S.Label>
          <S.Inpunt
            placeholder="Digite seu nome completo"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <S.Label>CPF</S.Label>
          <S.Inpunt
            placeholder="Digite somente os números"
            type="numb"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <S.Label>Email</S.Label>
          <S.Inpunt
            placeholder="Contato@GamaAcademy.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Label>Telefone</S.Label>
          <S.Inpunt
            placeholder="Digite somente os números"
            type="tel"
            required
            onChange={(e) => setTel(e.target.value)}
          />

          <S.Botoes>
            <S.Back type="button" onClick={HandleBack}>
              Voltar
            </S.Back>
            <S.Back type="submit" >Adicionar Cliente</S.Back>
          </S.Botoes>
        </S.Formulario>
      </S.ContainerFor>
    </S.Container>
  );
}