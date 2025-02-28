import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../FireaBase/FireBase.Config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    // console.log(user)


    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }


    const authInfo =
    {
        user,
        setUser,
        createNewUser,
        signInUser,
        logOut,
        loader,
        updateUserProfile
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
