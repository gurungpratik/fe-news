import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<ArticleList></ArticleList>}></Route>
        <Route path={`/articles/:article_id`} element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
