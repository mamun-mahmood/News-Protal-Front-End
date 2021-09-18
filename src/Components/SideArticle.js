import {React, useState, useEffect} from 'react'
import Sidebar from "./Sidebar";
import ArticleCard from "./Article";

export default function SideArticle() {
    const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`)
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const sliceStories = stories.slice(0, 100);
    return (
        <div className="sidebar">
          <div className="sidebar_content">
            {sliceStories.map((each) => (
            <ArticleCard key={each} id={each}></ArticleCard>
          ))}
        </div>
        </div>
    )
}
