import React from 'react'
import {Route} from "react-router-dom"
import CharacterDetail from './Screen/CharacterDetail'
import MainPage from './Screen/MainPage'
const App = () => {
  return (
    <div>

        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/details/:id">
          <CharacterDetail/>
        </Route>
     
    </div>
  )
}

export default App
