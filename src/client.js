import React from 'react';
import {render} from 'react-dom'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import Sample from './components/Sample'
import Title from './components/Title'
import Registration from './components/Registration'
import Home from './components/Home'
import SearchDonors from './components/SearchDonors'


render(
  <Router history = {browserHistory}>
  <Route path = '/' component ={Title}/>
  <Route path = 'registration' component ={Registration}/>
  <Route path = 'home' component ={Home}/>
  <Route path = 'searchdonors' component ={SearchDonors}/>
  </Router>,
 document.getElementById('index'));
