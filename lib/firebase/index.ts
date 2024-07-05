import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
	appId: process.env.NEXT_PUBLIC_APP_ID as string,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
