import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config.init";
import { useLocation, useNavigate } from "react-router-dom";

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
const gitProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //----------------   SIGNUP  ----------------
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //----------------   LOGIN  ----------------
  const userLogIn = (email, password) => {
    setLoading(true);
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
  //----------------   LOGIN WITH GITHUB  ----------------
  const userLogInWithGithub = () => {
    return signInWithPopup(auth, gitProvider);
  };
  //----------------   UPDATE PROFILE  ----------------
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //----------------   ON AUTH CHANGE  ----------------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    user,
    userLogIn,
    userSignUp,
    userSignOut,
    userLogInWithGoogle,
    updateUserProfile,
    loading,
    userLogInWithGithub,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
