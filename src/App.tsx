import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root.tsx';
import Main from './pages/Main.tsx';
import { Fragment } from 'react';
import GetPokemons from './pages/GetPokemons.tsx';
import PokemonInfo from './pages/PokemonInfo.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: 'pokedex',
    element: <Root></Root>,
    children: [
      {index: true, element: <Main></Main>},
      {path: 'pokemons', element: <GetPokemons></GetPokemons>},
      {path: 'pokemons/:id', element:<PokemonInfo></PokemonInfo>}
    ]
  }
])
function App() {
  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </Fragment>
  )
}

export default App
