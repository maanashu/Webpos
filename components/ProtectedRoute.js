import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoginAuth } from '../redux/slices/auth';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const authData = useSelector(selectLoginAuth)
    // const isAuthenticated = authData?.posUserLoginDetails?.payload?.token
        let token
    if (typeof window !== 'undefined') {  
      token = localStorage.getItem("authToken") ? localStorage.getItem("authToken")  : "";
    }
    useEffect(() => {

        if (token) {
            router.replace('/home/overview'); // Redirect to dashboard
        }
    }, []);

    return children;
};

export default ProtectedRoute;