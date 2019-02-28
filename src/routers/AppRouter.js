import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';
import Work from '../components/Work';
import Profile from '../components/Profile';
import ColorGame from '../components/ColorGame';
import Indecision from '../components/Indecision';
import XpenseMe from '../components/Xpenseme';
// import Footer from '../components/Footer';

// <Footer />

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Work} exact={true} />
        <Route path="/work" component={Work} exact={true}/>
        <Route path="/work/colorgame" component={ColorGame} />
        <Route path="/work/indecision" component={Indecision} />
        <Route path="/work/xpenseme" component={XpenseMe} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
      
    </div>
  </BrowserRouter>
);

export default AppRouter;