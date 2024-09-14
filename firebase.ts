import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
