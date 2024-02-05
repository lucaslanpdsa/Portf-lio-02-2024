import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: #4831d4;
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 25px 1.5em;

  @media (min-width: 581px){
    background: linear-gradient(90deg, #4831d4 67%, #ccf381 33%);
  }

  @media screen and (max-width: 700px){
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  h2{
    font-family: 'Protest Strike', sans-serif;
    color:#ccf381;
  }

  img{
    height: 50px;

    @media (min-width: 581px){
      color: #4831d4;
    }
  }
`