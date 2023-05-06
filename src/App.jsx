import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Discount from './pages/Discount/Discount';
import Graph from './pages/Graph/Graph';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/discount' element={<Discount/>}/>
        <Route path='/graph' element={<Graph/>}/>
      </Routes>
    </div>
  );
}

export default App;
