import * as types from './trackerTypes'
import firebase from 'firebase'


export const submitTrackerSurveyData = (surveyData) => (dispatch, getState) => {
  const { user } = getState().authorization
  const { userId } = user
  const db = firebase.firestore();
  const date = new Date()
  db.collection('users').doc(userId).collection('Surveys').doc(date.getFullYear()).collection(date.getMonth() + 1).doc(date.getDate()).set(surveyData)
}

const submitTrackerSurveyDataBegin = () => ({
  type: types.SUBMIT_TRACKER_SURVEY_DATA_BEGIN
})

const submitTrackerSurveyDataFail = () => ({
  type: types.SUBMIT_TRACKER_SURVEY_DATA_FAIL
})

const submitTrackerSurveyDataSuccess = () => ({
  type: types.SUBMIT_TRACKER_SURVEY_DATA_SUCCESS
})