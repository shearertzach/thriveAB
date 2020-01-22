import firebase from 'firebase'
const postID = 420;

export const submitDiscussionPost = (postData) => (dispatch, getState) => {
    const db = firebase.firestore()
    db.collection('Posts').doc(postID).set(postData)
  }