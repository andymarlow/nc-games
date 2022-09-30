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

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data;
  });
};

export const patchReviewVote = (review_id, singleVote) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: singleVote })
    .then((res) => {
      return res.review;
    });
};
