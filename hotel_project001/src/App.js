import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Room from './Pages/Room'
import SingalRoom from './Pages/SingalRoom'
import {Switch,Route} from 'react-router-dom'
import ErrorPage from './Pages/ErroPage'
import Navbar from './Components/Navbar'
import { from } from 'rxjs';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Room" exact component={Room} />
          <Route path="/Room/:slug" exact component={SingalRoom} />
          <Route  exact component={ErrorPage} />
          
   
   </Switch>
    </>
  );
}

export default App;
