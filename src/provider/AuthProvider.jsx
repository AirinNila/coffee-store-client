import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../service/firebase.config";


const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, SetLoading] = useState(true)

    const createUser = (email, pass) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email, pass)
    }

    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;