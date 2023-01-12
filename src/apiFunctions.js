import axios from "axios";

const api = axios.create({
  baseURL: "https://news-api-bgd0.onrender.com/api",
});

export const getAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

export const getSingleArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getArticleComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchArticle = (article_id, incOrDec) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: incOrDec })
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, newComment) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username: "jessjelly",
      body: newComment,
    })
    .then(({ data }) => {
      return data;
    });
};
