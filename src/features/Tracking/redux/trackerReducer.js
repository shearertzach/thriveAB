import * as types from './trackerTypes'

const INITIAL_STATE = {
  completedSurvey: true,
  loadingData: true
}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case types.SUBMIT_TRACKER_SURVEY_DATA_SUCCESS: {
      return {
        ...state,
        completedSurvey: action.payload
      }
    }
    case types.GET_TRACKER_SURVEY_DATA_SUCCESS: {
      return {
        ...state,
        completedSurvey: action.payload
      }
    }
    case types.TRACKER_LOADER_START: {
      return {
        ...state,
        loadingData: true
      }
    }
    case types.TRACKER_LOADER_END: {
      return {
        ...state,
        loadingData: false
      }
    }
    default: return state
  }
}