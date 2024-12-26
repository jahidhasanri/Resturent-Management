import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase.config';
import axios from 'axios';
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
            if (currentUser?.email) {
                setUser(currentUser);
                axios.post('https://assignment-11-solution-server.vercel.app/jwt',{
                    email: currentUser?.email 
                },
                {
                    withCredentials: true
                }
               )
                    .then(res =>{
                         console.log(res.data)
                         setLoader(false);
                        })
                    .catch(err => console.error('Error generating token:', err));
            }
            else{
                axios.post('https://assignment-11-solution-server.vercel.app/logout',{},{
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout',res.data)
                    setLoader(false);
                })
            }
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