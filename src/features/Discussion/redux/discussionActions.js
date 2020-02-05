import firebase from 'firebase';
import React from 'react';

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

export const getALLDiscussionList = () => (dispatch, getstate) => {{

        // const { user } = getState().authorization;
        // const { userID } = user;

        const db = firebase.firestore()

        db.collection('Posts').get().then((snapshot) => {
                
                var postsArray = [];
                snapshot.docs.forEach(doc => {
                        var postObj = doc.data();
                        postsArray.push(postObj);
                })

        })
       

}}

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
    