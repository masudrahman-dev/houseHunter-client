import axios from "axios";
import Form from "../../components/form/Form";
import useAuth from "../../context/authContext/useAuth";
import useRedirect from "../../hooks/redirect/useRedirect";

const Login = () => {
  const { login, setIsLoggedIn, setUserEmail } = useAuth();

  const { navigate, from } = useRedirect("/dashboard");

  const handleIsLoggedIn = (email) => {
    axios
      .post("http://localhost:3000/api/users/isLoggedIn", email)
      .then((res) => {
        // console.log(res.data.message);
        // console.log(email);
        setUserEmail(email.email);
        localStorage.setItem("userEmail", JSON.stringify(email?.email));
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error);
        // setIsLoggedIn(false);
      });
  };

  const handleLogin = (data) => {
    login(data)
      .then((res) => {
        // console.log(res.status);
        // console.log(res.data.message);
        handleIsLoggedIn({ email: data?.email });
        setIsLoggedIn(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error);
        // setIsLoggedIn(false);
      });
  };

  return (
    <Form
      userPassword={"userPassword"}
      userEmail={"userEmail"}
      handler={handleLogin}
      variant={"login"}
      text={"login"}
    ></Form>
  );
};

export default Login;
