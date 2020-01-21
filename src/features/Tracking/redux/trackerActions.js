import * as types from './trackerTypes'
import firebase from 'firebase'
import { organizeData } from '../helpers/dataHelper'

const date = new Date()
const months = ['January', 'February', 'March', 'April', 'May', "June", 'July', 'August', 'September', 'October', 'November', 'December']
let currentDay = `${months[date.getMonth()]}, ${date.getDate()}`


export const submitTrackerSurveyData = (surveyData) => (dispatch, getState) => {
  const { user } = getState().authorization
  const { userId } = user
  const db = firebase.firestore()
  db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${currentDay}`).set({ survey: surveyData })
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
  let dataToExport = [
    {
      "id":"Data",
      "data":[

      ]
    }
  ]

  for (let day = 0; day < 31; day++) {
    try {
      console.log(`Tacking Day: ${months[date.getMonth()]}, ${day}`)
      await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${months[date.getMonth()]}, ${day}`).get()
        .then((fbData) => {
          const data = fbData.data()
          if (data === undefined) {
            console.log("Data not found.")
          } else {
            dataToExport[0].data.push({ 'x': day, 'y': data.survey[7] })
            console.log(data)
            console.log(dataToExport)
          }
        })
    } catch {
      console.log("Data not found.")
    }
  }

  return organizeData(dataToExport)

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