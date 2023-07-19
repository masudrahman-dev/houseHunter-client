import axios from "axios";

const useJWT = () => {
  const handleJWT = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/users/jwt", data)
      .then((res) => {
        // console.log(res.data);

        localStorage.setItem("access-token", JSON.stringify(res.data.token));
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error.res.data.message);
        console.log(error.res.status);
      });
  };
  return { handleJWT };
};

export default useJWT;
