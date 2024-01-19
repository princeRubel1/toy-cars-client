import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  // for google
  const googleProvider = new GoogleAuthProvider();
  // for github
  const githubProvider = new GithubAuthProvider();
  // register for user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login for user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // login for using google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // login for using github
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // user for logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    githubSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
