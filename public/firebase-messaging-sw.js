// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDxQ8DoH4p5R4moIB03-ErIUDcD9n2p7OQ",
  authDomain: "studentloan-c5392.firebaseapp.com",
  projectId: "studentloan-c5392",
  storageBucket: "studentloan-c5392.appspot.com",
  messagingSenderId: "843800565009",
  appId: "1:843800565009:web:862d7fc5d6cc790b6de8b0"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message lelele ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
