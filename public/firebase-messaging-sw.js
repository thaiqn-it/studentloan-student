importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js')
importScripts(
    'https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js'
)

const firebaseConfig = {
    apiKey: 'AIzaSyBiVUluY5g2gWeEdYjwEPWsUtwJuEBVCP4',
    authDomain: 'notification-test-c4db1.firebaseapp.com',
    projectId: 'notification-test-c4db1',
    storageBucket: 'notification-test-c4db1.appspot.com',
    messagingSenderId: '670854435128',
    appId: '1:670854435128:web:7ee5093c12f87cb3d571cd',
    measurementId: 'G-NW0PYFJ922',
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    )
    // Customize notification here
    const notificationTitle = 'Background Message Title'
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png',
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
