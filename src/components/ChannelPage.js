import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const ChannelPage = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  console.log(channelDetails);

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      {channelDetails?.brandingSettings?.image?.bannerExternalUrl ? (
        <div className="Banner w-full h-72 flex items-center overflow-hidden ">
          <img
            className="w-full "
            src={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
          />
        </div>
      ) : (
        <div className="Banner w-full h-72 bg-gradient-to-r from-[rgba(0,122,255,1)] via-[rgba(9,9,121,1)]  to-[rgba(2,0,36,1) 100%)]"></div>
      )}

      <div className="z-20 w-52 h-fit relative top-[-8vh] ">
        <div className="Channel_header flex flex-col justify-center items-center">
          <div>
            <img
              className="w-44 m-2 rounded-[50%]"
              src={channelDetails?.snippet?.thumbnails?.high?.url}
            />
          </div>
          <div className="details">
            <h1 className="text-center font-black text-2xl m-4">
              {channelDetails?.snippet?.title}
            </h1>
            <h1 className="text-center text-sm font-extralight text-gray-600">
              Subscribers {channelDetails?.statistics?.subscriberCount}
            </h1>
            <h1 className="text-center text-sm font-extralight text-gray-600">
              Total Videos {channelDetails?.statistics?.videoCount}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-16">
        <Videos
          videos={videos}
          DP=<img
            className=" m-2 rounded-[50%]"
            src={channelDetails?.snippet?.thumbnails?.high?.url}
          />
        />
      </div>
    </div>
  );
};

export default ChannelPage;
