import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';
import Work from '../components/Work';
import Profile from '../components/Profile';
import About from '../components/About';
import Indecision from '../components/Indecision';
import XpenseMe from '../components/Xpenseme';
import Home from '../components/Home';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/work" component={Work} exact={true}/>       
        <Route path="/work/indecision" component={Indecision} />
        <Route path="/work/xpenseme" component={XpenseMe} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
      
    </div>
  </BrowserRouter>
);

export default AppRouter;