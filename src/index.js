import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Cadastro/Video';
import Categoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro-video" component={Video} />
      <Route path="/cadastro-categoria" component={Categoria} />
      <Route component={()=>(<>404</>)}  />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


