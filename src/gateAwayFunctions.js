import axios from "axios";

const baseUrl =
  "https://5ebd4202ec34e900161920b0.mockapi.io/messages";

export const createMessage = (message) =>
  axios
    .post(baseUrl, message)
    .catch((error) => console.log(error));

export const getMessage = () =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const changeMessage = (id, message) => {
  let newStatus = {
    ...message,
    status: "deleted",
  };
  return axios
    .put(`${baseUrl}/${id}`, newStatus)
    .catch((error) => console.log(error));
};
