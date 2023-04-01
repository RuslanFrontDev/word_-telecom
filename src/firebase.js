import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  updatePassword
} from "firebase/auth";
import  toast  from "react-hot-toast";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const register = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    toast.success("qeydiyyatdan keçildi")
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    toast.success("giriş edildi")

    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("çıxış etdiniz")
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("profiliniz güncəlləndi")
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
export const emailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success(`doğrulama email-i ${auth.currentUser.email} adresinə göndərildi, zəhmət olmasa diqqət yetirin`)
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
export const resetPassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    toast.success(`parolunuz güncəlləndi`)
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
export default app;
