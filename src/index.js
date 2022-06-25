import 'bulma/css/bulma.css'
import './static/styles.css'
import * as Sentry from '@sentry/browser'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Router'

// eslint-disable-next-line no-console
console.warn = () => {}

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_TOKEN })

ReactDOM.render(<App />, document.getElementById('root'))
