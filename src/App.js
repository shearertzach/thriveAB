import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

import LaunchHero from './screens/LaunchHero'
import Navigator from './features/Navigation/components/Navigator'

export const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <>
    <LaunchHero />
    <Navigator />
    </>
  )
}

export default App
