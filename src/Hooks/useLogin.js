import { useState } from 'react'
import { auth } from '../Firebase/config'
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';


export default function useLogin() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()

    const login = async (username, password) => {
        setIsPending(true)
        setError(null)
        if (username && password) {
            signInWithEmailAndPassword(auth, username, password)
                .then((resp) => {
                    const isVerified = resp.user.emailVerified
                    if (!isVerified) {
                        setIsPending(false)
                        signOut(auth)
                        return setError(`Kindly verify your email and then login`)
                    }
                    dispatch({ type: "LOGIN", payload: resp.user })
                    setIsPending(false)
                })
                .catch((err) => {
                    setError(err.message)
                    setIsPending(false)
                })
        } else {
            setError("Fill all the Feilds")
            setIsPending(false)
        }
    }
    return [login, isPending, error]
}
