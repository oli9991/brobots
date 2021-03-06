import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/home';
import Team from '../pages/team';
import Demos from '../pages/demos';
import Media from '../pages/media';
import Results from '../pages/results';
import Contact from '../pages/contact';
import Event from '../pages/event';
import Events from '../pages/events';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/team' component={Team} />
        <Route exact path='/events/demos' component={Demos} />
        <Route exact path='/events/media' component={Media} />
        <Route exact path='/events/' component={Events} />
        <Route path='/events/:title' component={Event} />
        <Route path='/alumni' component={Team} />
        <Route path='/results' component={Results} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
