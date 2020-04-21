import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBOjTRD29tBhsAge_r4_QV7yLPkO8neL78",
    authDomain: "expensify-a45ef.firebaseapp.com",
    databaseURL: "https://expensify-a45ef.firebaseio.com",
    projectId: "expensify-a45ef",
    storageBucket: "expensify-a45ef.appspot.com",
    messagingSenderId: "79692752513",
    appId: "1:79692752513:web:ff75d7362e773988efcf80",
    measurementId: "G-DW4VKP02S4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const database = firebase.database();

  database.ref().set({
      name: 'Shivash Dwivedi',
      age:20,
      isSingle: false,
      location: {
          city:'Faridabad',
          country: 'United States'
      }
  });
