import React, { useContext, useEffect } from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, Provider } from "../../utils/firebase";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";

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

      await API.post('/api/user',userData).then((response)=>{
        setUserInfo(response.data.user)
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      }).catch(error=>{
        console.log(error)
      })

      // ✅ Update context
      setLogin(true);

      // ✅ Persist login
      localStorage.setItem("isLogin", "true");
      

      // ✅ Navigate after login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      if (error.code === "auth/unauthorized-domain") {
        alert(
          "Firebase Auth: This domain is not authorized. " +
          "Please go to your Firebase Console -> Authentication -> Settings -> Authorized domains and add 'localhost'."
        );
      } else {
        alert("Login failed: " + (error.message || "Something went wrong"));
      }
    }
  };

  const handleMockLogin = async (role) => {
    try {
      const userData = {
        name: role === "admin" ? "Mock Admin" : "Mock User",
        email: role === "admin" ? "admin@example.com" : "user@example.com",
        photoUrl: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      };

      const response = await API.post("/api/user", userData);
      const user = response.data.user;

      // Force mock role client-side if database registers it as default 'user'
      if (role === "admin" && user.role !== "admin") {
        user.role = "admin";
      } else if (role === "user" && user.role === "admin") {
        user.role = "user";
      }

      setUserInfo(user);
      localStorage.setItem("userInfo", JSON.stringify(user));
      setLogin(true);
      localStorage.setItem("isLogin", "true");
      navigate("/dashboard");
    } catch (error) {
      alert("Mock login failed");
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

        {window.location.hostname === "localhost" && (
          <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col gap-3">
            <p className="text-gray-400 text-center text-xs">
              Local Development Bypasses:
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => handleMockLogin("user")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-[20px] text-xs font-semibold cursor-pointer transition-colors duration-200"
              >
                Mock User
              </button>
              <button
                onClick={() => handleMockLogin("admin")}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-[20px] text-xs font-semibold cursor-pointer transition-colors duration-200"
              >
                Mock Admin
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
