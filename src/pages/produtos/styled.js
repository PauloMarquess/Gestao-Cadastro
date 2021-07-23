import styled from 'styled-components';


export const Container =styled.div`

width: 100%;
height: 100vh;
font-family: "Nunito", sans-serif;

`

export const Title =styled.h1 `

display: flex;
justify-content: center;
text-align: center;
font-weight: bolder;
font-size: 4rem;
color: #333347;
`
export const Intro =styled.p`
text-align: center;
align-items: center;
font-size: 1.5rem;
color: #333347;
`
export const ContainerFor =styled.div`

display: grid;
justify-content: center;
align-items: center;
padding: 10px;

`


export const Formulario =styled.form`
width:500px;
display: flex;
flex-direction: column;
height: 2.5rem;
border-radius: 20px;
padding: 10px;
font-size: 1.5rem;

`
export const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  border-radius: 1rem;
  border: 1px solid #055f89;
  padding: 0.5rem 1rem;

  &:focus {
    outline: none;
  }
`;

export const Botoes =styled.div`
justify-content: center;
display: flex;
justify-content: space-space-around;
margin: 10px;
padding-top: 10px;
padding-bottom: 20px;

`

export const Back =styled.button`
margin-right: 30px;
width: 160px;
font-weight: bolder;
border-radius: 40px;
border:solid 1px ;
background: #333347;
color: white;
height: 3.5rem;
cursor: pointer;

`
export const Adicionar =styled.button`
margin-left: 30px;
width: 200px;
font-weight: bolder;
border-radius: 40px;
border:solid 1px ;
background: #022d3d;
color: white;
height: 3.5rem;
cursor: pointer;


`

export const Label =styled.label`
padding: 15px;
`
export const Inpunt =styled.input`
border-radius: 1rem;
padding: 10px;
border: 1px solid #333347;
`