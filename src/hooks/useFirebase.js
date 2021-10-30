import initializeFirebase from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

        // .then(result => {
        //     setUser(result.user)
        // })
    }
    const handleLogOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({})
            setLoading(false);
        })
    }
    useEffect(() => {
        setLoading(true);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({});

            }
            setLoading(false);
        });
    }, [])

    return {
        user,
        handleGoogleSignIn,
        handleLogOut,
        loading,
        setLoading
    }
}
export default useFirebase;