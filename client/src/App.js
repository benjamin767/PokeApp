import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';


function App() {

  return (
    <>
    <Routes>
      <Route 
        path='/'
        element={<Home/>}
      />
      <Route 
        path='/:name'
        element={<PokemonDetails/>}
      />
    </Routes>
    </>
  );
}

export default App;
