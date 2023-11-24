import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoginAuth } from '../redux/slices/auth';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const authData = useSelector(selectLoginAuth)
  useEffect(() => {
    const isAuthenticated = authData?.posUserLoginDetails?.payload?.token

    if (isAuthenticated) {
      router.replace('/home/overview'); // Redirect to dashboard
    }
  }, []);

  return children;
};

export default ProtectedRoute;