import axios from "axios";

const api = axios.create({
  baseURL: "https://news-api-bgd0.onrender.com/api",
});

export const getAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};
