import { useGoogleLogin } from "@react-oauth/google";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

import { getAuth ,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

function Signin() {
    const firebaseConfig = {
        apiKey: "AIzaSyCIPcA7rQl5c3LqD6LKlo-pD9jw85xmQic",
        authDomain: "login-3e500.firebaseapp.com",
        projectId: "login-3e500",
        storageBucket: "login-3e500.appspot.com",
        messagingSenderId: "495574766275",
        appId: "1:495574766275:web:07b0d49046c26007c4c876"
        };
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        auth.languageCode = 'en';
        const provider = new GoogleAuthProvider();
        const googleLogin = document.getElementById("google-login-btn");
        googleLogin.addEventListener("click", function(){
          signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "../index2.html"
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        })
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
        <button className='align-center mx-5 mb-9 mt-8 'onClick={() => login()} style={{background:"gray",color:"white",padding:"10px"}}>Sign in with Google {''}</button>
    );
}

export default Signin;




