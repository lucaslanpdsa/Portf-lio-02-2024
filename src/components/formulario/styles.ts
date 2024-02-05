import styled from "styled-components";

export const ContainerForm = styled.div`
  h2{
    color: #4831d4;
    margin: 0 0 20px;
  }
  color: #3d155f;

  background-color: #F9F9F9;
  padding: 5em 0;

  @media (min-width: 581px){
    text-align:center;
  }
`

export const Form = styled.div`
  @media (min-width: 581px){
  width: 70%;
  text-align: start;
  }

  .div-input{
    display: flex;
    flex-direction: column;
    margin: 15px 0 15px;

    label{
      font-size: .6em;
    }

    input{
      padding: 4px 0;
      border: 0;
      border-bottom: 1px solid #3d155f;
      background-color: #F9F9F9
    }

    input::placeholder{
      font-size: .7em;
      color: rgba(61, 21, 95, 0.7);
    }
  }
`

export const BTN = styled.button`
  width: 100%;
  display:flex;
  justify-content: center;
  border: 1px solid #4831d4;
  color: #4831d4;
  background-color: #FFF;
  padding: 8px 0;
  margin: 0 auto;
`