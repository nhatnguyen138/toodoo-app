import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './styles/_styles.scss'

import HomePage from './pages'
import AboutPage from './pages/AboutPage'
import NavBar from './layouts/NavBar'

export default function App() {
  return (
    <div id="AppContainer">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  )
}