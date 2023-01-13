import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ArticleList from "./components/ArticleList/ArticleList";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/articles"></Navigate>}></Route>
        <Route path="/articles" element={<ArticleList></ArticleList>}></Route>
        <Route path={`/articles/:article_id`} element={<SingleArticle />}></Route>
        <Route path={`/articles`} element={<ArticleList/>}></Route>
        <Route path={`/articles/coding`} element={<ArticleList topic="coding"/>}></Route>
        <Route path={`/articles/football`} element={<ArticleList topic="football"/>}></Route>
        <Route path={`/articles/cooking`} element={<ArticleList topic="cooking"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
