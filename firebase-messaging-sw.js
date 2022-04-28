// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyATALDOh3qTJJc_ebhrCxHQr5pR9fssDhM",
  authDomain: "plants-keeper-example-app.firebaseapp.com",
  projectId: "plants-keeper-example-app",
  storageBucket: "plants-keeper-example-app.appspot.com",
  messagingSenderId: "1011001796760",
  appId: "1:1011001796760:web:469d05053d546f469fc8ed"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();