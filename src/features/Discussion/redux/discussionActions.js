import firebase from 'firebase'
import { Timestamp } from '@google-cloud/firestore';

export const submitDiscussionPost = (postTitle, postText) => (dispatch, getState) => {{

        console.log("test")

        const { user } = getState().authorization;
        const { userID } = user;

        const db = firebase.firestore()
        var postID = firebase.firestore().collection('Posts').get();
        var timestamp = new Timestamp();
        console.log(postID);
        console.log(timestamp);
        // if (userID = null) {
                
                db.collection('Posts').doc().set({
                        // userID: 0, 
                        // postDateTime: 1/1/1900, 
                        // postTitle: postTitle, 
                        // postText: postText
                        postDateTime: timestamp,
                        postText: postText,
                        postTitle: postTitle,
                        user: 0
                });

                console.log('the function was called');
        // } 

        // else { 
        //         console.log('User authentication failed')
        // }
}}

export const getDiscussionList = () => (dispatch, getstate) => {{

        const { user } = getState().authorization;
        const { userID } = user;

        const db = firebase.firestore()

        if (userID != null) {
                //query needs to go here. else return authForm or error to prompt authForm.
        }
}}
    