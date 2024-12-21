import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

   

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setLoader(false)
          setUser(currentUser);
        //   console.log(" Current user:", currentUser); 
        });
        return () => {
            unsubscribe();
          };
        }, []);

    
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