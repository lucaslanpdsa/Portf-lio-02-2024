import menu from "../../assets/hamburguer.svg"
import { Cabecalho } from "./style"

const Header = () => {

  return (
    <Cabecalho >
      <h2>Lucas</h2>
      <img src={menu} alt="Icone de menu" />
    </Cabecalho>
  )
}


export default Header