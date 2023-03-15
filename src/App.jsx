import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Discount from './pages/Discount/Discount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/discount' element={<Discount/>}/>
      </Routes>
    </div>
  );
}

export default App;