import { combineReducers } from 'redux'

import AuthorizationReducer from '../features/Authorization/redux/authorizationReducer'
import TrackerReducer from '../features/Tracking/redux/trackerReducer'

const reducers = combineReducers({
  authorization: AuthorizationReducer,
  tracker: TrackerReducer /* ,
  discussion: discussionReducer */
})

export default reducers