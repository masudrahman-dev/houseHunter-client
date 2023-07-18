import Form from "../../components/form/Form";
import useAuth from "../../context/authContext/useAuth";

const Login = () => {
  const { login } = useAuth();
  const handleLogin = (data) => {
    login(data);
  };

  return (
    <Form
      id={"login"}
      userPassword={"userPassword"}
      userEmail={"userEmail"}
      handler={handleLogin}
      text={"Login"}
    ></Form>
  );
};

export default Login;
