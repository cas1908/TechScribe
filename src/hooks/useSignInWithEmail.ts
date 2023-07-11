import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useSignInWithEmail = ()=> {

    const { state, dispatch } = useContext(AuthContext)
    const navigate = useNavigate();
    const signInWithEmail = async(email: string, password: string)=>{
        
        try {
            dispatch({type: "IS_LOADING", payload: true})
            await setPersistence(auth, browserLocalPersistence)
            const userCredential = await signInWithEmailAndPassword(auth, state.user.email, state.user.password);
            const user = userCredential.user;
            dispatch({type: 'IS_AUTHENTICATED', payload: true})
            // dispatch({type: "SIGN_IN", payload: user})
            navigate("/")
            setTimeout(()=> dispatch({type: "IS_LOADING", payload: false}), 10000)
        } catch(error: string | any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }
    return {signInWithEmail}
}