import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBp0FEGeYuFiFgHLQm-x9iDaX0bSYRb6ao",
  authDomain: "strmly-assesment.firebaseapp.com",
  projectId: "strmly-assesment",
  storageBucket: "strmly-assesment.firebasestorage.app",
  messagingSenderId: "193327736602",
  appId: "1:193327736602:web:0d3717ed37844d08ba6ea3",
  measurementId: "G-73DJS7W4XG"
};

const app = initializeApp(firebaseConfig);

// ✅ Use React Native-specific auth initialization
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
export default app;
