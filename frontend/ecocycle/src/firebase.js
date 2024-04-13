import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyApv1fAaOqVpvujgAR3bDTsW424tv9LhDg",
    authDomain: "authentication-a1c2f.firebaseapp.com",
    databaseURL: "https://authentication-a1c2f-default-rtdb.firebaseio.com",
    projectId: "authentication-a1c2f",
    storageBucket: "authentication-a1c2f.appspot.com",
    messagingSenderId: "888868523918",
    appId: "1:888868523918:web:e0dfe0f2bd91dc5ec45edf",
    measurementId: "G-THTRZE4QHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app);

// Export the initialized services
export { auth, database };