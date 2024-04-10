import { Link } from "react-router-dom";

const ChannelCard = ({ Channel: { snippet }, orientation }) => {
  // console.log(snippet);

  return (
    <div>
      {orientation === "col" ? (
        <Link to={`/channel/${snippet.channelId}`}>
          <div className="flex m-10 items-center">
            <div className=" w-96 mx-20 flex justify-center">
              <img
                className="w-48 rounded-[50%]"
                src={snippet?.thumbnails?.high?.url}
              />
            </div>
            <div className="details">
              <h1 className="text-center text-2xl font-thin ">{snippet?.channelTitle}</h1>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`/channel/${snippet.channelId}`}>
          <div>
            <div>
              <img
                className="w-48 rounded-[50%]"
                src={snippet?.thumbnails?.high?.url}
              />
            </div>
            <div className="details">
              <h1 className="text-center">{snippet?.channelTitle}</h1>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ChannelCard;
