import { React } from "react";
import NewsFeed from "./NewsFeed";
import Carousel from "./Carousel";
import SideArticle from "./SideArticle";
export default function Home() {
  return (
    <>
      <div className="d-flex">
        {/* <SideArticle /> */}
        <div className="container" style={{display: 'flex',flex: '1', flexDirection: 'column'}}>
          <Carousel />
          <NewsFeed />
        </div>
      </div>
    </>
  );
}
