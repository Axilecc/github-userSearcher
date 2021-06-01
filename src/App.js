import React from "react";
import './App.css';
import { Header } from './Components/Header/Header';
import { InitialPage } from "./Components/InitialPage/InitialPage";
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage";
import { UserPage } from "./Components/UserPage/UserPage";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='app-content-wrapper'>
        <Switch>
          <Route exact path='/' render={ () => <InitialPage /> } />  

          <Route exact path='/notfound' render={ () => <NotFoundPage /> } />  

          <Route exact path='/user/:userId?' render={ () => <UserPage /> } />  

          <Route path='*' exact render={ () => <Redirect to={ '/' } /> } />
        </Switch>
      </div>
    </div>
  );
}

export default App;