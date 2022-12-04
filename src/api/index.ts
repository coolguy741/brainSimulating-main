export const url = "http://localhost:5000/api";
// export const url = "https://alexandre-node-todo-app.herokuapp.com/api";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return header;
};
