import firebase from 'firebase';
import * as types from './discussionTypes' 
export const submitDiscussionPost = (postTitle, postText) => (dispatch, getState) => {{


        const { user } = getState().authorization;
        const { userID } = user;

        const db = firebase.firestore()
        //var timestamp = new Timestamp();

        //console.log(timestamp);

        // if (userID = null) {

        const timestamp = firebase.firestore.Timestamp.now();

                db.collection('Posts').doc().set({
                        postDateTime: timestamp,
                        postText: postText,
                        postTitle: postTitle,
                        user: 0, //Placeholder
                        postID: 0 //Placeholder
                });
                
        // } 

        // else { 
        //         console.log('User authentication failed')
        // }
}}

export const getALLDiscussionList = () => async (dispatch, getstate) => {{

        // const { user } = getState().authorization;
        // const { userID } = user;

        const db = firebase.firestore()
        var postsArray = [];

        db.collection('Posts').get().then(
                (snapshot) => {

                        

                        snapshot.docs.forEach(doc => {
                        
                        var postObj = doc.data();
                        postsArray.push(postObj);
                        
                })                

        })

        return postsArray; 

}}

const asyncDispatchMiddleware  = store => next => action => {
        let syncActivityFinished = false;
        let actionQueue = [];

        function flushQueue() {
                actionQueue.forEach(a => store.dispatch(a)      ); // flush queue
                actionQueue = [];
                }
            
        function asyncDispatch(asyncAction) {
                actionQueue = actionQueue.concat(       [asyncAction]);
            
                if (syncActivityFinished) {
                        flushQueue();
                }
                }
            
                const actionWithAsyncDispatch =
                        Object.assign({}, action, {     asyncDispatch });
            
                next(actionWithAsyncDispatch);
                syncActivityFinished = true;
                flushQueue();
};         

const getALLDiscussionListDataBegin = () => ({
        type: types.GET_DISCUSSION_DATA_BEGIN
      })
      
const getALLDiscussionListDataFail = () => ({
        type: types.GET_DISCUSSION_DATA_FAIL
      })
      
const getALLDiscussionListDataSuccess = () => ({
        type: types.GET_DISCUSSION_DATA_SUCCESS
      })

// export const getSEARCHDiscussionList = () => (dispatch, getstate) => {{

//         const { user } = getState().authorization;
//         const { userID } = user;

//         const db = firebase.firestore()

//         db.collection('Posts').get().then((snapshot) => {
//                 var postsArray = [];
//                 snapshot.docs.forEach(doc => {
//                         var postObj = doc.data();
//                         postsArray.push(postObj);
//                 })
                
//         })
       

// }}
    