import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';
import { Home, Login, Registration, NoPageFound, Profile } from './Pages/index';

const PrivateRoute = () => {
    const { user, authIsReady } = useAuthContext()
    return (
        <>
            {
                authIsReady && (
                    <Routes>
                        <Route path="/" element={user ? <Home /> : <Navigate to={'/login'} />} />
                        <Route path="/login" element={!user ? <Login /> : <Navigate to={'/'} />} />
                        <Route path="/registration" element={!user ? <Registration /> : <Navigate to={'/'} />} />
                        <Route path="/profile" element={user ? <Profile /> : <Navigate to={'/'} />} />
                        <Route path="*" element={<NoPageFound />} />
                    </Routes>
                )
            }
        </>

    )
}

export default PrivateRoute
