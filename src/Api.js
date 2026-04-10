import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

export const fetchRandomUser = () => {
  return axios.get(randomUserUrl);
};
