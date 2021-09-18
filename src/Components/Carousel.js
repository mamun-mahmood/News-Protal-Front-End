import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import axios from "axios";

export default function Example() {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/carousel").then((res) => {
      setAllNews(res.data);
    });
  }, []);

  return (
    <Carousel>
      {allNews.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div style={{height: '400px'}}>
      <Paper>
      <h2 style={{padding: '5px'}}>{props.item.newsHeadline}</h2>
      <div ><img style={{ width: "100%", height: '300px'}}  src={props.item.imgURL} alt="" /></div>
    </Paper>
    </div>
  );
}
