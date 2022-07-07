import './App.css';
import StarshipList from './pages/StarshipList/StarshipList';
import { Routes, Route } from 'react-router-dom';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
