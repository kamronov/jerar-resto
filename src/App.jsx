import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Discount from './pages/Discount/Discount';
import Graph from './pages/Graph/Graph';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/discount' element={<Discount/>}/>
        <Route path='/graph' element={<Graph/>}/>
      </Routes>
    </div>
  );
}

export default App;
