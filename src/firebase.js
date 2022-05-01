// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
const vapidKey =
    'BMnGl1NvSCxlMuc5dSka71oktF8oNBqut8OOk9HaqKR8qA9FHr_GTOnJ_JlbxqWamatW9xYAFjs6RTW1KnyvJx8'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: 'AIzaSyBiVUluY5g2gWeEdYjwEPWsUtwJuEBVCP4',
//     authDomain: 'notification-test-c4db1.firebaseapp.com',
//     projectId: 'notification-test-c4db1',
//     storageBucket: 'notification-test-c4db1.appspot.com',
//     messagingSenderId: '670854435128',
//     appId: '1:670854435128:web:7ee5093c12f87cb3d571cd',
//     measurementId: 'G-NW0PYFJ922',
// }

const firebaseConfig = {
    apiKey: "AIzaSyAs_8XhaLgbh1K6HhrCZ2T0NHRNKjL77D4",
    authDomain: "studentloan-888d0.firebaseapp.com",
    projectId: "studentloan-888d0",
    storageBucket: "studentloan-888d0.appspot.com",
    messagingSenderId: "909307399560",
    appId: "1:909307399560:web:c0b488290f3812d897be3d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app)
// onMessage(messaging, (payload) => {
//     console.log('Message received', payload)
// })
export const getFirebaseToken = (setToken) => {
    return getToken(messaging, { vapidKey: vapidKey })
        .then((currentToken) => {
            if (currentToken) {
                // Send the token to your server and update the UI if necessary
                // ...
                console.log(currentToken)
                setToken(currentToken)
            } else {
                // Show permission request UI
                console.log(
                    'No registration token available. Request permission to generate one.'
                )
                // ...
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err)
            // ...
        })
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload)
        })
    })

onMessage(messaging, (payload) => {
    console.log(payload)
})
