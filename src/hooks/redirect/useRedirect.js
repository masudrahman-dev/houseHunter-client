import { useLocation, useNavigate } from "react-router-dom";

const useRedirect = (path) => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || path;

  return { navigate, from };
};

export default useRedirect;
