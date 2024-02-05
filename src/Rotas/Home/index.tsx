import Apresentaçao from "../../components/Apresentação"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Links from "../../components/Links"
import Formulario from "../../components/formulario"
import { ApresentacaoFlex } from "./style"
import Minhafoto from "../../assets/minhaFoto.png"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ApresentacaoFlex>
          <Apresentaçao />
          <img src={Minhafoto} alt="Minha foto" />
        </ApresentacaoFlex>
        <Links />
        <Formulario />
        <Footer />
      </main >
    </>
  )
}

export default Home