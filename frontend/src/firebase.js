import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, set, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAkEKeZ3WvKDQ3qHU6DOeK_oaVOfxb7mKU",
    authDomain: "ecocyle-9d63d.firebaseapp.com",
    databaseURL: "https://ecocyle-9d63d-default-rtdb.firebaseio.com",
    projectId: "ecocyle-9d63d",
    storageBucket: "ecocyle-9d63d.appspot.com",
    messagingSenderId: "596885525764",
    appId: "1:596885525764:web:e6459d57c82ecdad93ec51",
    measurementId: "G-2PQ4NFCVNR"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const database = getDatabase(app);
const dbref = ref(database);
export {dbref, auth, database };