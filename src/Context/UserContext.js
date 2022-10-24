import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config.init";

// ...........................
// ...........................
// ...........................
//......Starts From Here......
// ...........................
// ...........................
// ...........................
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  //----------------   SIGNUP  ----------------
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //----------------   LOGIN  ----------------
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //----------------   LOGOUT  ----------------
  const userSignOut = () => {
    return signOut(auth);
  };
  //----------------   LOGIN WITH GOOGLE  ----------------
  const userLogInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  //----------------   UPDATE PROFILE  ----------------
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const authInfo = {
    userLogIn,
    userSignUp,
    userSignOut,
    userLogInWithGoogle,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
