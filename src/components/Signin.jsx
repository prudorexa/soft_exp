import { useGoogleLogin } from "@react-oauth/google";
function Signin() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
        <button onClick={() => login()} style={{background:"gray",color:"white",padding:"10px"}}>Sign in with Google {''}</button>
    );
}

export default Signin;



