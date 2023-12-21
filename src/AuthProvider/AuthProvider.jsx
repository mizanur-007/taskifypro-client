import React, { Children, createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import axios from "axios";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    //create a user with email password
  const signUp = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //signIn a user
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //googlelogin
  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  //githublogin
  const githubLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }


    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        // const loggedUser = {email: user?.email}

        // if(user){
        //   axios.post("https://task-management-server-peach.vercel.app/api/v1/jwt",loggedUser, {withCredentials:true})
        //   .then((res)=>{
        //     console.log(res.data)
        //   })
        //   .catch((error)=>{
        //     console.log(error.message)
        //   })
        // }
        // else{
        //   axios.post("https://task-management-server-peach.vercel.app/api/v1/logout",loggedUser, {withCredentials:true})
        //   .then((res)=>{
        //     console.log(res.data)
        //   })
        //   .catch((error)=>{
        //     console.log(error.message)
        //   })
        // }

        });

        return () => {
          unSubscribe();
        };
      }, []);

        //set users name and image 

  const updateUser = (name,image)=>{
   return updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      })
  }

      //logout
      const logOut =()=>{
        return signOut(auth)
      }

  const authInfo ={
    signUp,
    updateUser,
    user,
    logOut,
    signIn,
    googleLogin,
    githubLogin,
    loading
  };

  return (
  <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
