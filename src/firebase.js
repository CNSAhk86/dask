import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDlvH4Djp3_c5b6nSSGS7yoWC0HGwn5pcM",
    authDomain: "dask-dfef9.firebaseapp.com",
    projectId: "dask-dfef9",
    storageBucket: "dask-dfef9.appspot.com",
    messagingSenderId: "67039499844",
    appId: "1:67039499844:web:06af10bddb55d811f88e11",
    measurementId: "G-8GV3NB703D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };