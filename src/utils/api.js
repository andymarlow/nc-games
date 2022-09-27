import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://a-nc-games.herokuapp.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then((res) => {
    return res.data;
  });
};
