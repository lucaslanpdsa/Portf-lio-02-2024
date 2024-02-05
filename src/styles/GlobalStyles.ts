import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.container{
  @media screen and (max-width: 580px) {
    padding: 0 15vw;   
  }

  @media (min-width: 581px){
    padding: 0 5rem;
  }
}
`