import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCzn2ZDgEIuxV48cPN2l5ZgjHmPFauuMbM",
  authDomain: "wily-bb108.firebaseapp.com",
  projectId: "wily-bb108",
  storageBucket: "wily-bb108.appspot.com",
  messagingSenderId: "294518211243",
  appId: "1:294518211243:web:1d6e892de6f474f6b8edee"
};

 //Initializing Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase.firestore(); 