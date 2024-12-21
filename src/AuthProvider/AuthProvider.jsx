import React, { createContext } from 'react';
const AuthContext=createContext(null)
export const AuthProvider = ({children}) => {

    // const [user,setuser]=useState(null)
    // const [loader,setLoader]=useState(true)
    

    // const createUserWithEmail = (email,password)=>{
    //     setLoader(true)
    //    return createUserWithEmailAndPassword(auth, email, password)
    // }

    // const singInuser = (email,password)=>{
    //     setLoader(true)
    //     return signInWithEmailAndPassword(auth,email,password)
    // }

    // const singOut = ()=>{
    //     setLoader(true)
    //    return signOut(auth)
    // }





    // useEffect(()=>{
    //     const unsubcribe = onAuthStateChanged(auth,(currentuser)=>{
    //         console.log('state capcter',currentuser);
    //         setuser(currentuser);
    //         setLoader(false)
    //     })
    //     return ()=>{
    //         unsubcribe();
    //     }
    // },[])



    const authInfo ={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;