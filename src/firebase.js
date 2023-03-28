import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAamC4AaJseb3fNfOGWjiHZoL4Uam8hG6g",
  authDomain: "clone-74094.firebaseapp.com",
  projectId: "clone-74094",
  storageBucket: "clone-74094.appspot.com",
  messagingSenderId: "588013535718",
  appId: "1:588013535718:web:093592acba9fc4ab281627",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
