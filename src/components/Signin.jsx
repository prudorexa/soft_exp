import { useGoogleLogin } from "@react-oauth/google";
function Signin() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
        <button className='align-center mx-5 mb-9 mt-8 'onClick={() => login()} style={{background:"gray",color:"white",padding:"10px"}}>Sign in with Google {''}</button>
    );
}

export default Signin;




