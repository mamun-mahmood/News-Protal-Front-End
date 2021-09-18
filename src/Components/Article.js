import React, { useEffect, useState } from "react";
import "./ArticleCard.css";
import { format } from "timeago.js";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
const ArticleCard = ({ id }) => {
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const { title, time, url, descendants} = article;
  const milliseconds = time * 1000;
  const newTime = format(milliseconds);
  return (
    <div className="" >
      <div className="card">
        <a href={url} target="blank" style={{ textDecoration: "none" }}>
          <div className="cardBody">
            <h4
              style={{ color: "rgba(0, 0, 0, 0.82)", fontFamily: "Open Sans" }}
            >
              {title}
            </h4>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: 'center'}}>
              <div>
              <AccessAlarmIcon style={{ width: "18px" }}></AccessAlarmIcon>
                <small>
                  {newTime}
                </small>
              </div>
                <small>{descendants} comments</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
