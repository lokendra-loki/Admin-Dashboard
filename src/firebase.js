import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAa3GOzgquXWR32NNH_kQXgvJuarxZqMYs",
    authDomain: "netflix-clone-f9403.firebaseapp.com",
    projectId: "netflix-clone-f9403",
    storageBucket: "netflix-clone-f9403.appspot.com",
    messagingSenderId: "616134300785",
    appId: "1:616134300785:web:a6dfc1dd57b611e9eaf7d0",
    measurementId: "G-YFW56WKGG9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export default storage
