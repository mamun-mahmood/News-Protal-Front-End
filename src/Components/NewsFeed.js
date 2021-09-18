import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import { UserContext } from "../App";
export default function NewsFeed() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/getAllNews/${loggedInUser}`)
      .then((res) => {
        setAllNews(res.data);
      });
  }, [loggedInUser]);
  return (
    <div className="">
      <div className="row">
        {allNews.map((data) => (
          <NewsCard data={data} key={data._id} summited={true}></NewsCard>
        ))}
      </div>
    </div>
  );
}
