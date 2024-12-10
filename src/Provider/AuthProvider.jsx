import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    GoogleAuthProvider, 
    updateCurrentUser,
    updateProfile
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);

    // Sign Up
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    };

    // Sign In
    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true)
    };

    // Google Sign In
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        setLoading(true)
    };

    // Sign out
    const handleLogOut = () => {
        setLoading(true)
        return signOut(auth)
            .then(() => {
                setUser(null);
            })

            .catch(error => {
                alert(error.message);
            });
    };

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        };
    }, [auth]);


    // UpdateProfile
    const UpdateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // Context Value
    const authInfo = {
        user,
        setUser,
        auth,
        createNewUser,
        handleLogOut,
        SignInUser,
        loginWithGoogle,
        loading,
        UpdateUserProfile
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
