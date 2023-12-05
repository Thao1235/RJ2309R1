import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage';
import ShoePage from './pages/ShoePage';

function App() {
  return (
    <>
      <Routes>
            <Route path='/' element={<ShoePage />} />
            <Route path='/shoe' element={<ShoePage />} />
            <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
    
  );
}

export default App;
