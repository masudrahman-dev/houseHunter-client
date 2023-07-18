import Form from "../../components/form/Form";
import useAuth from "../../context/authContext/useAuth";

const Register = () => {
  const { register } = useAuth();
  const handleRegister = (data) => {
    console.log(data);
    register(data);
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
