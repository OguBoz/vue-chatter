import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDUB--6A-k44Yi6gtIn0u3rQePZffsNsQ8",
    authDomain: "vue-chatter-ec43b.firebaseapp.com",
    databaseURL: "https://vue-chatter-ec43b.firebaseio.com",
    projectId: "vue-chatter-ec43b",
    storageBucket: "vue-chatter-ec43b.appspot.com",
    messagingSenderId: "296369700722",
    appId: "1:296369700722:web:3c6b887b57ddddccc8e7eb"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()