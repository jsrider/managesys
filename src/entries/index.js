
import { render } from 'react-dom'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from '../components/App'
import About from '../components/About'
import Repos from '../components/Repos'







render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>

      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'))
