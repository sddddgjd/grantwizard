import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

// pages for this product
import LandingPage from 'views/LandingPage.js'
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { createMuiTheme } from '@material-ui/core'

var hist = createBrowserHistory()

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0C7AED',
      secondary: '#3394F9',
      light: '#3394F9',
      dark: '#0465C9'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
