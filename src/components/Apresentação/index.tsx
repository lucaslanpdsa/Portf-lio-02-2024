import { Container } from "./style"

const Apresentaçao = () => {
  return (
    <Container>
      <div>
        <h2>Desenvolvedor Full Stack</h2>
        <p className="descrição">Crio aplicações sólidas e escaláveis ​que entregam uma ótima experiência para o usuário.</p>
      </div>
      <div className="container_textos">
        <p className="textos">Desenvolvo interfaces que não apenas agradam esteticamente, mas também cativam usuários através de uma experiência fluida e intuitiva</p>
        <p className="textos">Como programador, minha missão é transformar visões criativas em realidade digital.</p>
      </div>
    </Container>
  )
}

export default Apresentaçao