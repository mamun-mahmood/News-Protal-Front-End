import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { format } from "timeago.js";
const useStyles = makeStyles({
  media: {
    height: 190,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {
    _id,
    newsHeadline,
    authorName,
    catagory,
    imgURL,
    timeStamp,
  } = props.data;
  const newTime = format(timeStamp);

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
      <Card >
        <CardActionArea style={{ border: "1px green solid" }}>
          <CardMedia
            className={classes.media}
            image={imgURL}
            alt="Image Here"
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="h3">
              {newsHeadline}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Catagory: {catagory}</p>
              <div style={{ display: "flex" }}>
                <AccessAlarmIcon />
                <p style={{ marginLeft: "5px" }}>{newTime}</p>
              </div>
            </div>
            <p style={{ textAlign: "center" }}>Author: {authorName}</p>
          </CardContent>
        </CardActionArea>
        {props.summited && (
          <CardActions className="d-flex justify-content-center">
            <Link to={"newsDetails/" + _id}>
              <Button color="primary">Read More</Button>
            </Link>
          </CardActions>
        )}
      </Card>
    </div>
  );
}
