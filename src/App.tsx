import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Rotas/Home';
import { GlobalStyle } from './styles/GlobalStyles';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}


export default App
