import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  thumbnail,
  orientation,
  place,
}) => {
  return place === "suggestions" ? (
    orientation === "col" && place === "suggestions" && (
      <div className=" h-36 overflow-hidden mx-5 ">
        <Link className="" to={`/video/${videoId}`}>
          <div className="Complete_suggestion_card h-full w-full flex  items-center">
            <div className="Thumbnail h-[255px] min-w-[40%] max-w-[40%] ml-2  mr-6 rounded-2xl overflow-hidden  flex items-center ">
              <img
                className="w-fit"
                src={snippet?.thumbnails?.high?.url}
                alt="Thumbnail"
              />
            </div>

            <div className="Details flex gap-3 items-center ">
              <div className="content flex flex-col flex-wrap  col-span-5 ">
                <h1 className="text-sm font-extralight">{snippet.title}</h1>
                <Link
                  className="Link_to_channel z-20 flex"
                  to={`/channel/${snippet?.channelId}`}
                >
                  <h1 className="mr-2 text-gray-500 text-xs">
                    {snippet.channelTitle}
                  </h1>
                  <box-icon
                    type="solid"
                    color="white"
                    size="15px"
                    name="check-circle"
                  ></box-icon>
                </Link>
                <h1 className="text-xs">Date</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  ) : (
    <div>
      {/* {orientation === "col" && place === "suggestions" && (
        <div className=" h-36 overflow-hidden m-5 ">
          <Link className="" to={`/video/${videoId}`}>
            <div className="Complete_suggestion_card h-full w-full flex  items-center">
              <div className="Thumbnail h-[255px] mr-6 rounded-2xl overflow-hidden  flex items-center ">
                <img
                  className="w-fit"
                  src={snippet?.thumbnails?.high?.url}
                  alt="Thumbnail"
                />
              </div>

              <div className="Details flex gap-3 items-center ">
                <div className="content flex flex-col flex-wrap  col-span-5 ">
                  <h1 className="text-sm font-extralight">{snippet.title}</h1>
                  <Link
                    className="Link_to_channel z-20 flex"
                    to={`/channel/${snippet?.channelId}`}
                  >
                    <h1 className="mr-2 text-gray-500 text-xs">
                      {snippet.channelTitle}
                    </h1>
                    <box-icon
                      type="solid"
                      color="white"
                      size="15px"
                      name="check-circle"
                    ></box-icon>
                  </Link>
                  <h1 className="text-xs">Date</h1>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )} */}

      {orientation === "col" && place === "searchResult" ? (
        <div className="w-5/6 h-72 ">
          <Link className="" to={`/video/${videoId}`}>
            <div className="h-full w-full flex  items-center">
              <div className="h-[255px] w-auto m-10 rounded-2xl overflow-hidden  flex items-center ">
                <img
                  className="w-fit"
                  src={snippet?.thumbnails?.high?.url}
                  alt="Thumbnail"
                />
              </div>

              <div className="flex gap-3 items-center ">
                <div className="channel-DP w-fit ">
                  {thumbnail ? (
                    <div className="m-2 flex justify-center items-center">
                      {thumbnail}
                    </div>
                  ) : (
                    <box-icon
                      name="user-circle"
                      size="md"
                      type="solid"
                      color="#f6f6f6"
                    ></box-icon>
                  )}
                </div>
                <div className="content flex flex-col flex-wrap  col-span-5 ">
                  <h1 className="text-base">{snippet.title}</h1>
                  <Link
                    className="z-20 flex"
                    to={`/channel/${snippet?.channelId}`}
                  >
                    <h1 className="mr-2 text-gray-500 text-sm">
                      {snippet.channelTitle}
                    </h1>
                    <box-icon
                      type="solid"
                      color="white"
                      size="17px"
                      name="check-circle"
                    ></box-icon>
                  </Link>
                  <h1>Date</h1>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="w-80 ">
          <Link className="" to={`/video/${videoId}`}>
            <div className="rounded-2xl overflow-hidden h-44 flex items-center">
              <img
                className="w-fit"
                src={snippet?.thumbnails?.high?.url}
                alt="Thumbnail"
              />
            </div>
            <div className="grid grid-cols-6 grid-rows-1 items-center ">
              <div className="channel-DP w-fit ">
                {thumbnail ? (
                  <div className="m-2 flex justify-center items-center">
                    {thumbnail}
                  </div>
                ) : (
                  <box-icon
                    name="user-circle"
                    size="md"
                    type="solid"
                    color="#f6f6f6"
                  ></box-icon>
                )}
              </div>
              <div className="content flex flex-col flex-wrap w-60 col-span-5">
                <h1 className="text-base">{snippet.title}</h1>
                <Link
                  className="z-20 flex"
                  to={`/channel/${snippet?.channelId}`}
                >
                  <h1 className="mr-2 text-gray-500 text-sm">
                    {snippet.channelTitle}
                  </h1>
                  <box-icon
                    type="solid"
                    color="white"
                    size="17px"
                    name="check-circle"
                  ></box-icon>
                </Link>
                <h1>Date</h1>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
