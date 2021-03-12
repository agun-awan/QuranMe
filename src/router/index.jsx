import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Surah from '../views/Surah'
import Home from '../views/Home'

const Index = (props) => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/surah/:surahId">
            <Surah />
        </Route>
    </Switch>
)

export default Index
