import { BTN, ContainerForm, Form } from "./styles"

const Formulario = () => {
  return (
    <ContainerForm>
      <div className="container">
        <h2>Me mande uma mensagem!</h2>
        <p>Tem uma pergunta, proposta ou apenas quer dizer olá? Vá em frente.</p>
      </div>
      <Form className="container">
        <div className="div-input">
          <label htmlFor="nome">Seu nome</label>
          <input type="text" id="nome" placeholder="Digite seu nome" />
        </div>
        <div className="div-input">
          <label htmlFor="email">Endereço de email</label>
          <input type="text" id="email" placeholder="Insira o seu endereço de email" />
        </div>
        <div className="div-input">
          <label htmlFor="mensagem">Sua mensagem</label>
          <input type="text" id="mensagem" />
        </div>
        <BTN>Enviar</BTN>
      </Form>
    </ContainerForm>
  )
}

export default Formulario