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
  const surveryCollection = db.collection('users').doc(userId).collection('Surveys')
  surveryCollection.doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${currentDay}`).set({ survey: surveyData })
  db.collection('users').doc(userId).set({ submittedSurvey: true })
  dispatch(submitTrackerSurveyDataSuccess(true))
}

// const submitTrackerSurveyDataBegin = () => ({
//   type: types.SUBMIT_TRACKER_SURVEY_DATA_BEGIN
// })

// const submitTrackerSurveyDataFail = () => ({
//   type: types.SUBMIT_TRACKER_SURVEY_DATA_FAIL
// })

const submitTrackerSurveyDataSuccess = (data) => ({
  type: types.SUBMIT_TRACKER_SURVEY_DATA_SUCCESS,
  payload: data
})

export const getSurveyData = () => async (dispatch, getState) => {
  const { user } = getState().authorization
  const { userId } = user
  const db = firebase.firestore()
  const surveryCollection = db.collection('users').doc(userId).collection('Surveys')
  const date = new Date()
  let todaysData = undefined
  let dataToExport = []
  // {
  //   "id": "Data",
  //   "data": [
  //   ]
  // }

  await db.collection('users').doc(userId).collection('Surveys').doc(`${date.getFullYear()}`).collection(`${date.getMonth()}`).get()
    .then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data())
        dataToExport.push(doc.data())
      })
    })

  // dispatch(startTrackerLoader())

  // await surveryCollection.doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${months[date.getMonth()]}, ${date.getDate()}`).get()
  //   .then((fbData) => {
  //     const data = fbData.data()
  //     todaysData = data
  //   })

  // if (todaysData === undefined) {
  //   db.collection('users').doc(userId).set({ submittedSurvey: false })
  //   dispatch(getSurveyDataSuccess(false))
  // } else {
  //   db.collection('users').doc(userId).set({ submittedSurvey: true })
  //   dispatch(getSurveyDataSuccess(true))
  // }

  // for (let day = 1; day < 31; day++) {
  //   try {
  //     console.log(`Tacking Day: ${months[date.getMonth()]}, ${day}`)
  //     await surveryCollection.doc(`${date.getFullYear()}`).collection(`${date.getMonth() + 1}`).doc(`${months[date.getMonth()]}, ${day}`).get()
  //       .then((fbData) => {
  //         const data = fbData.data()
  //         if (data === undefined) {
  //           console.log("Data not found.")
  //         } else {
  //           dataToExport[0].data.push({ 'x': day, 'y': data.survey[7] })
  //           console.log(data)
  //           console.log(dataToExport)
  //         }
  //       })
  //   } catch {
  //     console.log("Data not found.")
  //   }
  // }

  // dispatch(endTrackerLoader())

  return dataToExport

}



const startTrackerLoader = () => ({
  type: types.TRACKER_LOADER_START
})

const endTrackerLoader = () => ({
  type: types.TRACKER_LOADER_END
})

const getSurveyDataSuccess = (data) => ({
  type: types.GET_TRACKER_SURVEY_DATA_SUCCESS,
  payload: data
})