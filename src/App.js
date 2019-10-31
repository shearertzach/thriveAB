import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'
import firebase from 'firebase';

import { firebaseConfig } from './env'
import LaunchHero from './screens/LaunchHero'
import Navigator from './features/Navigation/components/Navigator'
import NavigatorContent from './features/Navigation/components/NavigatorContent'

export const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  firebase.initializeApp(firebaseConfig)
  return (
    <Provider store={store}>
      <LaunchHero />
      <Navigator />
      <NavigatorContent />
    </Provider>
  )
}

export default App
