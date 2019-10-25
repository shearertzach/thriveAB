import { combineReducers } from 'redux'

import AuthorizationReducer from '../features/Authorization/redux/authorizationReducer'

const reducers = combineReducers({
  authorization: AuthorizationReducer
})

export default reducers