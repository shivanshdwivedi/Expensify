//jshint esversion:6

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


export{ firebase , database as default };




  //child_removed- used when child gets deleted to notify as a subscriber.
  // database.ref('expenses').on('child_removed' , (snapshot) => {
  //     console.log(snapshot.key , snapshot.val());
  // });

  //child_changed - used when chnages ocuur in child.
//   database.ref('expenses').on('child_changed' , (snapshot) => {
//     console.log(snapshot.key , snapshot.val());
// });

// child_added - fires on time for all the data stored in firebase as well as new one added.
// database.ref('expenses').on('child_added' , (snapshot) => {
//     console.log(snapshot.key , snapshot.val());
// });


  // database.ref('expenses').push({
  //     description: 'Rent',
  //     note: '' ,
  //     amount: 109500,
  //     createdAt: 976123498763
  // });
  
  // .once used to once show value but not show changes.
// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// .on handler shows array with the changes done with it. It does not support promises.
// database.ref('expenses').on('value' , (snapshot) => {
//         const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

//   database.ref().on('value' , (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job}`) ;
//   });

 //   database.ref().set({
//       name: 'Shivash Dwivedi',
//       age:20,
//       isSingle: false,
//       location: {
//           city:'Faridabad',
//           country: 'India'
//       }
//   }).then(() => {
//       console.log('data is saved!');
//   }).catch((e) => {
//     console.log('this failed' , e);
//   });

//   database.ref().update({
//       job: 'Manager',
//       'location/city': 'delhi'
//   });



//   database.ref()
//   .remove()
//   .then(() => {
//       console.log("Data was removed");
//   }).catch((e) => {
//     console.log('Data was not removed' , e);
//   });