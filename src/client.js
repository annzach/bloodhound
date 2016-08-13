import React from 'react';
import {render} from 'react-dom'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import Welcome from './components/Welcome'

render(
  <Router history = {browserHistory}>
  <Route path = '/' component ={Welcome}>
  </Route>
  </Router>,
 document.getElementById('index'));
