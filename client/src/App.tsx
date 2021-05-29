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

const loading = () =>
  <div className="animated fadeIn pt-3 text-center">Loading...</div>

export default function App() {
  return (
    <div id="AppContainer">
      <NavBar />
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Redirect to="/" />
          </Switch>
          </React.Suspense>
      </Router>
    </div>
  )
}