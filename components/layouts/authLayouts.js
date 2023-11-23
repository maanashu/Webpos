
import Navbar from '../navbar'
import { useRouter } from 'next/router';

export default function AuthLayout({ children, isLoggedIn }) {
  const router = useRouter();
  const loginPaths = [
    '/',
    '/auth/verifyOtp',
    '/auth/successVerify',
  ]
  return (
    <>
    {loginPaths.includes(router.pathname) ? "" : <Navbar />}
      <div className='main_box loginBox_'>
        <main>{children}</main>
      </div>
    </>
  )
}