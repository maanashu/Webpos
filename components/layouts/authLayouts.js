
import Navbar from '../navbar'
import { useRouter } from 'next/router';

export default function AuthLayout({ children, isLoggedIn }) {
  const router = useRouter();
//   const loginPaths = [
//     '/auth/login',
//     '/auth/signup',
//     '/auth/forgotpassword',
//     '/auth/enterotp',
//     '/auth/resetpassword',
//   ]
  return (
    <>
      <Navbar />
      <div className='main_box loginBox_'>
        <main>{children}</main>
      </div>
    </>
  )
}