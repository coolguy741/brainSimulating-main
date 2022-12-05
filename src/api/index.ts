// export const url = "http://localhost:5000/api";
export const url = "https://brain-simulating-main-backend.vercel.app/api";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return header;
};
