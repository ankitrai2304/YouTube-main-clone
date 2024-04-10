import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { VideoPlayerShimmer } from "../utils/Shimmer";

const VideoPage = () => {
  const { id } = useParams();
  const [openDes, setOpenDes] = useState(false);
  const [videoDetails, setVideoDetails] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { snippet, statistics } = videoDetails;

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setSuggestions(data.items)
    );
  }, [id]);

  function Open(){
    setOpenDes(true);
  }
  function Hide(){
    setOpenDes(false);
  }

  return videoDetails.length === 0 ? (
    <VideoPlayerShimmer />
  ) : (
    <div className="flex w-full ">
      <section className="player min-w-[55%] max-w-[60%] h-fit ml-10 mr-2 mt-10 ">
        <div className="w-full min-h-[70vh] ">
          <ReactPlayer
            width="100%"
            height="70vh"
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
        </div>
        <h1 className="my-5 text-lg ">{snippet?.title}</h1>
        <Link
          to={`/channel/${snippet?.channelId}`}
          className="ChannelDetails w-32 grid grid-cols-2 grid-rows-1 items-center"
        >
          <div className="DP w-fit">
            <box-icon
              name="user-circle"
              type="solid"
              color="#ffffff"
            ></box-icon>
          </div>
          <div className="content flex flex-col flex-wrap w-60 ">
            <Link className="z-20 flex" to={`/channel/${snippet?.channelId}`}>
              <h1 className="mr-2 text-gray-400 text-sm">
                {snippet?.channelTitle}
              </h1>
              <box-icon
                type="solid"
                color="white"
                size="17px"
                name="check-circle"
              ></box-icon>
            </Link>
            <h1 className="text-gray-400 text-sm">Date</h1>
          </div>
        </Link>
        {openDes === true ? (
          <div className="Descriptions mt-5 bg-gray-900 p-5 rounded-2xl">
            <div className="flex justify-evenly mb-4">
              <h4>
                Likes - {parseInt(statistics?.likeCount).toLocaleString()}
              </h4>
              <h4>
                Views - {parseInt(statistics?.viewCount).toLocaleString()}
              </h4>
            </div>
            <h4 className="my-2">{snippet?.description}</h4>
            <button className="text-blue-500" onClick={()=>{
              Hide()
            }}>Hide...</button>
          </div>
        ) : (
          <div className="Descriptions h-52 mt-5 bg-gray-900 p-5 rounded-2xl">
            <div className="h-28 overflow-hidden relative top-0">
              <div className="flex justify-evenly mb-4">
                <h4>
                  Likes - {parseInt(statistics?.likeCount).toLocaleString()}
                </h4>
                <h4>
                  Views - {parseInt(statistics?.viewCount).toLocaleString()}
                </h4>
              </div>
              <h4 className="my-2">{snippet?.description}</h4>
            </div>
            <button className="text-blue-500" onClick={()=>{
              Open();
            }}>Show More...</button>
          </div>
        )}
      </section>
      <section className="suggestions mt-10">
        <div className="h-screen  bg-gray-800 rounded-2xl overflow-y-scroll  no-scrollbar">
          <Videos videos={suggestions} orientation="col" place="suggestions" />
        </div>
      </section>
    </div>
  );
};

export default VideoPage;
