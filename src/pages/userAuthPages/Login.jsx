
import Form from "../../components/form/Form";
import useAuth from "../../context/authContext/useAuth";
import useRedirect from "../../hooks/redirect/useRedirect";

const Login = () => {
  const { login, setIsLoggedIn, setUserEmail } = useAuth();

  const { navigate, from } = useRedirect("/dashboard");


  const handleLogin = (data) => {
    login(data)
      .then((res) => {
        // console.log(res.status);
        // console.log(res.data.message);
        console.log("Login successful");
        console.log(data.email);
        setUserEmail(data.email);
        localStorage.setItem("userEmail", JSON.stringify(data.email));
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
