// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
const vapidKey = process.env.REACT_VAPID_KEY
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
    apiKey: 'AIzaSyDYsjufZklXVJSKPJ32TKxZuhJPTSEKeak',
    authDomain: 'loan-student.firebaseapp.com',
    projectId: 'loan-student',
    storageBucket: 'loan-student.appspot.com',
    messagingSenderId: '761167549872',
    appId: '1:761167549872:web:deb06f4c84d51c76507275',
    measurementId: 'G-3WTQ4TP3BP',
}

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
                console.log('current token for client :', currentToken)
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
