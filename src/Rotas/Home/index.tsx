import Apresentaçao from "../../components/Apresentação"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Links from "../../components/Links"
import Formulario from "../../components/formulario"
import { ApresentacaoFlex } from "./style"
import Minhafoto from "../../assets/minhaFoto.png"
import Foto from "../../components/Foto"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ApresentacaoFlex>
          <Apresentaçao />
          <img src={Minhafoto} alt="Minha foto" />
        </ApresentacaoFlex>
        <Foto />
        <Links />
        <Formulario />
        <Footer />
      </main >
    </>
  )
}

export default Home