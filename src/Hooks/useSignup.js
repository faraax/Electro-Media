import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react'
import { auth } from '../Firebase/config';

export default function useSignup() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null)

    const signup = async (displayName, username, password) => {
        setIsPending(true)
        setError(null)
        setMessage(null)
        createUserWithEmailAndPassword(auth, username, password)
            .then(async (resp) => {
                await updateProfile(auth.currentUser, { displayName })
                await sendEmailVerification(auth.currentUser)
                await signOut(auth)
                setIsPending(false)
                setMessage("Email has been sent to your address kindly verify and login")
                console.log(resp);
            })
            .catch((error) => {
                setIsPending(false)
                setError(error)
                setMessage(null)
            })
    }

    return [signup, isPending, error, message]
}
