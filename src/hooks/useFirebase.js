import initializeFirebase from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
    }, [])

    return {
        user,
        handleGoogleSignIn,
        handleLogOut
    }
}
export default useFirebase;