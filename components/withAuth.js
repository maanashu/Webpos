import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function WithAuth(props) {
    const router = useRouter();
    let token
    if (typeof window !== 'undefined') {  
      token = localStorage.getItem("authToken") ? localStorage.getItem("authToken")  : "";
    }
    console.log(token,"token");
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