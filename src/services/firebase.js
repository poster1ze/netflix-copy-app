import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDY6WhzxRom8v_J4rNZFEXMTS4aPDe7s6w",
    authDomain: "netflix-copy-1ea00.firebaseapp.com",
    projectId: "netflix-copy-1ea00",
    storageBucket: "netflix-copy-1ea00.appspot.com",
    messagingSenderId: "422628632540",
    appId: "1:422628632540:web:71800886262c36ce331119"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {auth}
export { db }