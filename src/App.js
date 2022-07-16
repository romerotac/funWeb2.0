//import logo from './logo.svg';
import './App.css'; 
import { Routes, Link, Route} from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import {Provider} from 'react-redux';
import {store} from './reduxFiles/store'
import { Contact } from './pages/contact';
import { useEffect } from 'react';
import { NavBar } from './Components/navbar';


 
function App() {

  return (
    <Provider store={store}>

    <NavBar/>

    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path = '/about' element={<About/>}></Route>
      <Route path = '/contact' element= {<Contact/>}></Route>
    </Routes>
    
    
    </Provider>
  );
}

export default App;
