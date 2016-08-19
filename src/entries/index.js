import './index.html';
import { render } from 'react-dom'
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import About from '../components/About'
import Repos from '../components/Repos'







render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About}/>
      <Route path="/repos" component={Repos}/>

      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'))
