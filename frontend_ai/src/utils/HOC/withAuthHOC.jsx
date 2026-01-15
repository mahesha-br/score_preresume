import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const withAuthHOC = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    const navigate = useNavigate();
    const { setLogin } = useContext(AuthContext);

    useEffect(() => {
      const isLogin = localStorage.getItem("isLogin");

      if (isLogin !== "true") {
        setLogin(false);
        navigate("/", { replace: true });
      }
    }, [navigate, setLogin]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthHOC;
