import React, { createContext, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase.config';
export  const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const handelRegistWemail=(email,password)=>{
        setLoader(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const handelLoginWemail = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSingOut = ()=>{
        setLoader(true)
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();

    const handelLoginWithGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
      };

   

    

    
    const authInfo = {
        user,setUser,handelRegistWemail,handelLoginWemail,handleSingOut,loader,setLoader,handelLoginWithGoogle
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;