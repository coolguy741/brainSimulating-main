import { toast } from "react-toastify";

const initialState = {
  valid: null,
  email: null,
};

const touristReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TOURIST":
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      console.log("Debug: data", action.tourist.data);

      return {
        ...initialState,
        email: action.tourist.data.email,
        valid: true,
      };
    default:
      return state;
  }
};

export default touristReducer;
