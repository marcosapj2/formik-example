import React, { Fragment } from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import GlobalStyle from 'assets/style/global'

render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,

  global.document.querySelector('#root')
)
