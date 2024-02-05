import styled from "styled-components";

export const Container = styled.footer`
  background-color: #3d155f;
  color: #badd76;
  padding: 2em 5vw;

  @media (min-width: 581px){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 581px){
    padding: 2em 1.5em;
  }

  ul{ 
    margin: 0 0 2em 0;
    padding:0;
  }

  .direitos-altorais{
    width: 100%;
    margin-top: 3em;
    padding: 2em 0;
    border-top: 1px solid rgba(186, 221, 118, 0.7);
  }
`