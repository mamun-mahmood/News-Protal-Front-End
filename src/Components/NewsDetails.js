import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { format } from 'timeago.js';
import axios from "axios";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
export default function NewsDetails() {
  const { newsId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5001/newsDetails/${newsId}`).then((res) => {
      const selectedClassD = res.data;
      setData(selectedClassD[0]);
    })
    .catch(err => console.log(err))
  }, []);
  const { newsHeadline, authorName, catagory, description, imgURL, timeStamp } = data;
  const newTime = format(timeStamp);
  return (
    <div className="container">
      <h1 style={{marginLeft: '5px'}}>{newsHeadline}</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img style={{ width: "80%" }} src={imgURL} alt="photo" />
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <p>Catagory: {catagory}</p>
          <div style={{display: 'flex'}}>
          <AccessAlarmIcon/>
          <p style={{marginLeft: '5px'}}>{newTime}</p>
          </div>
      </div>
      <p style={{textAlign: 'center'}}>Author: {authorName}</p>
      <p style={{fontSize: '20px', padding: '10px', whiteSpace: 'pre-wrap'}}>{description}</p>
    </div>
  );
}
