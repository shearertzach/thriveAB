import * as types from './authorizationTypes'
import firebase from 'firebase/app'

export const userSignIn = (email, password) => async (dispatch) => {
  dispatch(userSignInBegin())
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password)
    const fbToken = await response.user.getIdToken()
    const userId = response.user.uid
    dispatch(userSignInSuccess({ fbToken, userId }))
  }
  catch (e) {
    console.log(e)
    if (e.code.includes('auth/user-not-found')) {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await firebase.auth().signInWithEmailAndPassword(email, password)
      return
    }
    dispatch(userSignInFailed(e.message))
  }
}

const userSignInBegin = () => ({
  type: types.USER_LOGGED_IN_BEGIN
})

const userSignInFailed = (message) => ({
  type: types.USER_LOGGED_IN_FAIL,
  payload: message
})

const userSignInSuccess = (data) => ({
  type: types.USER_LOGGED_IN_SUCCESS,
  payload: data
})