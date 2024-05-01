import { createContext, useEffect, useState } from "react"
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "./firebase/firebase.config"




export const NewContex = createContext('')

function Context({children}) {

    const [user,setuser] = useState('')
    // const [alldata,setalldata] = useState('')
    const [loading,setloading] = useState(true)
    
    const auth = getAuth(app);

    
    
    const googleprovider = new GoogleAuthProvider()
    const githubprovider = new GithubAuthProvider();

    const googlesign = () => {
        setloading(true)
        return signInWithPopup(auth,googleprovider)
    }

    const githubsign = () => {
        setloading(true)
        return signInWithPopup(auth,githubprovider)
    }

    const allreadysigni = (email,password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }
    
    
    const newcreator = (email,password) => {
        setloading(true)
        // setuser({})
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    console.log(user)
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentuser => {
                setuser(currentuser)
                // console.log(currentuser.displayName)
                setloading(false)
        
        });
        
        return () => {
            unSubscribe()
        }
        
    },[])
    
    
    
    const allvalu = {allreadysigni,githubsign,googlesign,user,loading,newcreator,logout}
    
    
    
    
    return (
        <NewContex.Provider value={allvalu}>
            {children}
        </NewContex.Provider>
    )
}

export default Context