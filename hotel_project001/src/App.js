import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import {Switch,Route} from 'react-router'
import ErrorPage from './Pages/ErroPage'
import { from } from 'rxjs';
function App() {
  return (
    <>
    <Switch>

      <Route path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default App;
