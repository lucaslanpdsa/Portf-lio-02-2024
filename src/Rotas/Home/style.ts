import styled from "styled-components";

export const ApresentacaoFlex = styled.div`
  background-color: #4831d4;
  width: 100%;
  padding: 0 1.5em;
  margin: 0;
  width: 100%;

  @media (min-width: 581px){
    gap: 5em;
    padding:0 5rem;
  }

  @media (min-width: 581px){
    background: linear-gradient(90deg, #4831d4 67%, #ccf381 33%);
  }

  display:flex;

  img{
    width: 23.334em;

    @media (max-width: 581px){
      display: none;
    }
  }   
  }  
`