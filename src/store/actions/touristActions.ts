import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const addTourist = (newTourist: any) => {
  return (dispatch: any) => {
    axios
      .post(`${url}/tourists`, newTourist)
      .then((tourist) => {
        dispatch({
          type: "ADD_TOURIST",
          tourist,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
