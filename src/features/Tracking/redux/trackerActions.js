import * as types from './trackerTypes'
import firebase from 'firebase'
import { organizeData } from '../helpers/dataHelper'


export const submitTrackerSurveyData = (surveyData) => (dispatch, getState) => {
  const { user } = getState().authorization
  const { userId } = user
  const db = firebase.firestore()
  const date = new Date()
  db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${date.getDate()}`).set({ survey: surveyData })
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

export const getSurveyData = () => async (dispatch, getState) => {
  const { user } = getState().authorization
  const { userId } = user
  const db = firebase.firestore()
  const date = new Date()
  let currentDayData = {}
  let tommorowData = {}
  let dayTwoData = {}

  if (date.getDate() === 1) {
    await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${date.getDate()}`).get()
      .then((fbData) => {
        const data = fbData.data()
        console.log(data)
        currentDayData = data
      })
    await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth()}`).doc(`30`).get()
      .then((fbData) => {
        const data = fbData.data()
        tommorowData = data
      })
    await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth()}`).doc(`29`).get()
      .then((fbData) => {
        const data = fbData.data()
        dayTwoData = data
      })
  } else {
    await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${date.getDate()}`).get()
      .then((fbData) => {
        const data = fbData.data()
        currentDayData = data
      })
    await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth()}`).doc(`${date.getDate()}` + 1).get()
      .then((fbData) => {
        const data = fbData.data()
        tommorowData = data
      })
    await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth()}`).doc(`${date.getDate()}` + 2).get()
      .then((fbData) => {
        const data = fbData.data()
        dayTwoData = data
      })
  }
  organizeData(currentDayData.survey, tommorowData.survey, dayTwoData.survey)
}

const getSurveyDataBegin = () => ({
  type: types.GET_TRACKER_SURVEY_DATA_BEGIN
})

const getSurveyDataFail = () => ({
  type: types.GET_TRACKER_SURVEY_DATA_FAIL
})

const getSurveyDataSuccess = (data) => ({
  type: types.GET_TRACKER_SURVEY_DATA_SUCCESS,
  data
})