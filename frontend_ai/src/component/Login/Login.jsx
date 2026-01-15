import React, { useContext, useEffect } from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, Provider } from "../../utils/firebase";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setLogin, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔁 Redirect if already logged in
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, Provider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      };

      // ✅ Update context
      setLogin(true);
      setUserInfo(userData);

      // ✅ Persist login
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("userInfo", JSON.stringify(userData));

      // ✅ Navigate after login
      navigate("/dashboard");
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div
      className="
        fixed inset-0 w-screen h-screen 
        bg-white/20 backdrop-blur-[10px]
        rounded-[10px] 
        flex items-center justify-center
        px-4
      "
    >
      <div
        className="
          bg-black p-5 
          w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%]
          rounded-[20px] 
          text-white
        "
      >
        <div className="flex justify-between items-center">
          <h1 className="py-5 text-2xl sm:text-3xl">Login</h1>
          <VpnKeyIcon className="text-3xl" />
        </div>

        <div
          onClick={handleLogin}
          className="
            p-5 box-border w-full 
            bg-white text-black 
            rounded-[30px] 
            text-[18px] sm:text-[20px] md:text-[22px]
            flex justify-center items-center 
            gap-5 cursor-pointer
          "
        >
          <GoogleIcon className="text-red-500" />
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
