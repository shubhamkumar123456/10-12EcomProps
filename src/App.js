
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PNF from './pages/PNF';
import Cart from './pages/Cart';
import ViewDetails from './pages/ViewDetails';
import { useState } from 'react';

function App() {
    const [cartArr, setcartArr] = useState([]);
    console.log(cartArr)
  function getItem(ans){

    let updatedObj = {...ans , quantity:1}
  
    setcartArr([...cartArr,updatedObj])
  }
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element = {<Home getItem = {getItem}/>} />
              <Route path='/register' element = {<Signup/>} />
              <Route path='/login' element = {<Login/>} />
              <Route path='/cart' element = {<Cart cartArr={cartArr} setcartArr={setcartArr}/>} />
              <Route path='/view' element = {<ViewDetails/>} />
              <Route path='/*' element = {<PNF/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
