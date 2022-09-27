import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://a-nc-games.herokuapp.com/api",
});

export const getReviews = (category) => {
  return gamesApi.get(`/reviews`, { params: { category } }).then((res) => {
    return res.data;
  });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data;
  });
};
