import './App.css'
import Apresentaçao from './components/Apresentação'
import Footer from './components/Footer'
import Foto from './components/Foto'
import Header from './components/Header'
import Links from './components/Links'
import Formulario from './components/formulario'
import { GlobalStyle } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Apresentaçao />
        <Foto />
        <Links />
        <Formulario />
        <Footer />
      </main>
    </>
  )
}


export default App
