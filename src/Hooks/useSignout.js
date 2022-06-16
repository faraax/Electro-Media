import { useState } from 'react'
import { auth } from '../Firebase/config'
import { signOut } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export default function useSignout() {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setIsPending(true)
        setError(null)
        await signOut(auth)
        try {
            dispatch({ type: "LOGOUT" })
            setIsPending(false)
        } catch (err) {
            setError(err.message)
            setIsPending(false)
        }
    }

    return [logout, isPending, error]
}
