import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Rotas/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  useEffect(() => {
    alert('O portfólio ainda está em desenvolvimento!!')
  })
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}


export default App
