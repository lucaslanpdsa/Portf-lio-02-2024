import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: #4831d4;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color:#ccf381;
  font-size: 1.2rem;
  padding: 25px 0;

  @media screen and (max-width: 700px){
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  h2{
    font-family: 'Protest Strike', sans-serif;
  }

  img{
    height: 50px;
  }
`