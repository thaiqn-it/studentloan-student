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
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    data: { url:payload.data.click_action }, //the url which we gonna use later
    actions: [{action: "open_url", title: "Read Now"}]
  };
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', function(e) {

  e.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
    // If a Window tab matching the targeted URL already exists, focus that;
    const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === e.notification.data.url ? (windowClient.focus(), true) : false);
    // Otherwise, open a new tab to the applicable URL and focus it.
    if (!hadWindowToFocus) clients.openWindow(e.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null);
  }));
}
, false);