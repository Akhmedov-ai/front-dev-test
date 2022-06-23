import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseContextWrapper from './components/common/BaseContext'
import { HomePage } from './pages/HomePage'

export default function App() {
    return (
        <BrowserRouter>
            <BaseContextWrapper>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                </Switch>
            </BaseContextWrapper>
        </BrowserRouter>
    )
}
