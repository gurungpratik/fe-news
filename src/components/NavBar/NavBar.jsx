import "./NavBar.css";
import { useState, useEffect } from "react";
import { getTopics } from "../../apiFunctions";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
    });
  }, []);

  return (
    <div>
      <ul className="Topics-List">
        <Link to={`/articles`}>
          <h1>All articles</h1>
        </Link>
        {topics.map((topic) => {
          return (
            <li className="Topic-Item" key={topic.slug}>
              <Link to={`/articles/${topic.slug}`}>
                <h1>{topic.slug}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
