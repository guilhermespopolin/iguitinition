import React from 'react'
import { render, cleanup } from 'react-testing-library'

import { ThemeProvider } from 'styled-components'

import defaultTheme from 'themes/default'

afterEach(cleanup)

// Utility function that allows render styled-components properly
const renderComponent = child =>
  // eslint-disable-next-line react/jsx-filename-extension
  render(<ThemeProvider theme={defaultTheme}>{child}</ThemeProvider>)

export default renderComponent

