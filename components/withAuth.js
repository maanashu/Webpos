import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLoginAuth } from "../redux/slices/auth";

export default function withAuth(Component) {
  return function WithAuth(props) {
    const router = useRouter();
    const authData = useSelector(selectLoginAuth)
    const token = authData?.posUserLoginDetails?.payload?.token ? authData?.posUserLoginDetails?.payload?.token:""
    // let token
    // if (typeof window !== 'undefined') {  
    //   token = localStorage.getItem("authToken") ? localStorage.getItem("authToken")  : "";
    // }

    useEffect(() => {
      async function checkAuth() {
        if (token ) {
          router.push("/home/overview");
        }
        else if(!token ){
          router.push("/");
        }
      }
      checkAuth();
    }, []);

    return <Component {...props} />;
  };
}