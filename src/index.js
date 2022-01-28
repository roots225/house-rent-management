// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"
import User from './models/user'
import AuthService from './constants/auth_service'
import { firebaseConfig } from './constants/firebase'

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