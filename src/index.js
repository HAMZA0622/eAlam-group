import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Login from './views/login'
import AboutUs from './views/about-us'
import Contact from './views/contact'
import Home from './views/home'
import Company from './views/company'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/login" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={Company} exact path="/company" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
