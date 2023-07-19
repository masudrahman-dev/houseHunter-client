import axios from "axios";
import Form from "../../components/form/Form";
import useAuth from "../../context/authContext/useAuth";
import useRedirect from "../../hooks/redirect/useRedirect";
import useJWT from "../../hooks/useJWT/useJWT";

const Register = () => {
  const { register, setIsLoggedIn } = useAuth();
  const { navigate, from } = useRedirect("/dashboard");
  const { handleJWT } = useJWT();

  const handleIsLoggedIn = (email) => {
    console.log(email);

    axios
      .post("http://localhost:3000/api/users/isLoggedIn", email)
      .then((res) => {
        // console.log(res.status);
        console.log(res.data.message);
        console.log(res.data);

        localStorage.setItem("userEmail", JSON.stringify(email?.email));
        // setIsLoggedIn(true);

        // navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error);
        // setIsLoggedIn(false);
      });
  };

  const handleRegister = (data) => {
    register(data)
      .then((res) => {
        // console.log(res.status);
        // console.log(res.data.message);
        handleJWT(data);
        setIsLoggedIn(false);
        handleIsLoggedIn({ email: data?.email });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error.response.data.message);
        console.log(error.response.status);
        // setIsLoggedIn(true);
        // navigate(from, { replace: true });
      });
  };

  return (
    <div>
      <Form
        id={"Registration"}
        userFullName={"fullName"}
        userRole={"role"}
        serPassword={"userPassword"}
        userPhoneNumber={"userPhoneNumber"}
        userPassword={"userPassword"}
        email={"email"}
        handler={handleRegister}
        text={"Registration"}
      ></Form>
    </div>
  );
};

export default Register;
