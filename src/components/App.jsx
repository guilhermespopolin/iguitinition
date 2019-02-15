import React, { Fragment } from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from 'components/ui/GlobalStyle'
import Routes from 'components/Routes'

import theme from 'themes/default'
import store from 'store'

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Router>
            <Routes />
          </Router>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
