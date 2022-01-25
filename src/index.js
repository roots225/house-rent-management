// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"
import User from './models/user'
import AuthService from './constants/auth_service'

console.log(getAuth)


const firebaseConfig = {
  apiKey: "AIzaSyAZb35_83c0wIABKfb-_8XtZdZ0pVrrjcA",
  authDomain: "house-rent-management-a6ed7.firebaseapp.com",
  databaseURL: "https://house-rent-management-a6ed7-default-rtdb.firebaseio.com",
  projectId: "house-rent-management-a6ed7",
  storageBucket: "house-rent-management-a6ed7.appspot.com",
  messagingSenderId: "908027993473",
  appId: "1:908027993473:web:ef74f80c81d56f7cc41c80",
  measurementId: "G-95VDJWYHP7"
};
const app = initializeApp(firebaseConfig);
// const db = getFirestore();

/// TODO : implement login logic
const provider = new GoogleAuthProvider();
// ADD Scope of our app on user google account
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth()
/// Ecouter quand l'utilisateur clic sur le bouton se connecter avec google
const googleSignInButton = document.querySelector('#google')
googleSignInButton.addEventListener('click', () => {
  // On verifie que aucun user n'est connecté
  if (!AuthService.isLoggedIn()) {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      AuthService.saveUser(user, token)
      /// TODO: go to next page
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  } else {
    alert('User is already connected')
  }
  

  // 
})