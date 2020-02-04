import firebase from 'firebase'
import { Timestamp } from '@google-cloud/firestore';

export const submitDiscussionPost = (postTitle, postText) => (dispatch, getState) => {{

        console.log("test")

        const { user } = getState().authorization;
        const { userID } = user;

        const db = firebase.firestore()
        //var timestamp = new Timestamp();

        //console.log(timestamp);

        // if (userID = null) {

        const timestamp = firebase.firestore.Timestamp.now();

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

        // const { user } = getState().authorization;
        // const { userID } = user;

        const db = firebase.firestore()

        db.collection('Posts').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                        console.log(doc.data());
                })
        })

}}
    