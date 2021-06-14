import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEJTuhiBUt5CvIFlehAQJ238v3tVoE1Ps",
    authDomain: "crown-db-16772.firebaseapp.com",
    projectId: "crown-db-16772",
    storageBucket: "crown-db-16772.appspot.com",
    messagingSenderId: "354223407745",
    appId: "1:354223407745:web:3fca3d8acb744b101c8380",
    measurementId: "G-1MTYMF5NGW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;