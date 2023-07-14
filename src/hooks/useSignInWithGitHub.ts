import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, db } from "../firebase-config"
import { useNavigate } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"




export const useGitHubPopUp = () => {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const githubPopUp = async () => {

       

        const provider = new GithubAuthProvider()

            try {
                dispatch({type: "IS_LOADING", payload: true})
                const result = await signInWithPopup(auth, provider) 
                const credential: {} | any = GithubAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                const user = result.user
                console.log(user)
                await setDoc(doc(db,"users", user.uid), {name: user.displayName, email: user.email, avatar: user.photoURL, uid: user.uid})
                console.log("github completed")
                dispatch({type: 'IS_AUTHENTICATED', payload: true})
                navigate("/")
                setTimeout(()=> dispatch({type: "IS_LOADING", payload: false}), 10000)
            } catch(error: string | any) {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorMessage)
                // const email = error.customData.email
                const credentials = GithubAuthProvider.credentialFromError(error)
            }

        
    }
    return { githubPopUp }
}

function dispatch(arg0: { type: string; payload: boolean }) {
    throw new Error("Function not implemented.")
}
