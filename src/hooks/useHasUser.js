import { useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { PROFILE_DATA_KEY } from "../utils/constants";

const useRedirectOnNoUser = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(PROFILE_DATA_KEY));

  useEffect(() => {
    if (!user) {
      navigate('/register');
      return;
    }

    const userDetails = ['name', 'username', 'email', 'mobile', 'terms'];
    const validUser = userDetails.every(
      (detail) =>
        Object.prototype.hasOwnProperty.call(user, detail) &&
        user[detail] !== null
    );

    if (!validUser) {
      navigate('/register');
      return;
    }
  }, [navigate, user]);
}

export default useRedirectOnNoUser;