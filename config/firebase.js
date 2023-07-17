import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB3uBO4HD3yYfz5rqVQdt4RczmKfSzS9bY",
  authDomain: "auth-app-ab325.firebaseapp.com",
  projectId: "auth-app-ab325",
  storageBucket: "auth-app-ab325.appspot.com",
  messagingSenderId: "259335754255",
  appId: "1:259335754255:web:8f06cdf6b99ad5eb6d897a"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
