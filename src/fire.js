
import { initializeApp } from "firebase/app"

const config = {
    apiKey: "AIzaSyCjVahRcWjXqfmTHjtf048e-RmxFWoGsfE",
    authDomain: "the-dome-project.firebaseapp.com",
    projectId: "the-dome-project",
    storageBucket: "the-dome-project.appspot.com",
    messagingSenderId: "51474710147",
    appId: "1:51474710147:web:6ca4fb2dbe353f368de5b6",
    measurementId: "G-1ET6SY4YN9"
};

// Initialize Firebase
const firebaseApp = initializeApp( config )

export default firebaseApp