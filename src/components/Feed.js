import { useContext, useEffect, useState } from "react";
import { PageContext } from "../utils/activePage";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { HomeShimmer } from "../utils/Shimmer";

const Feed = () => {
  const { activePage } = useContext(PageContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${activePage}`).then((data) =>
      setVideos(data.items)
    );
  }, [activePage]);

  return videos.length === 0 ? (
    <HomeShimmer />
  ) : (
    <>
      <div className="overflow-scroll no-scrollbar m-2" key={111 + "feed"}>
        <div className="Title m-5 p-2" key={112 + "feed"}>
          <span
            className="m-2 text-2xl font-black text-red-600"
            key={113 + "span"}
          >
            {activePage}
          </span>
          <span className="m-2 text-2xl font-black " key={114 + "videos"}>
            Videos
          </span>
        </div>
        <Videos videos={videos} />
      </div>
    </>
  );
};

export default Feed;
