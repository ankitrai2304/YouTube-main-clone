import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, DP, orientation,place }) => {
  return (
    <div>
      {orientation === "col" ? (
        <div>
          <div className="Videos  h-fit" key={115 + "feed"}>
            {videos?.map((item) => {
              return (
                <div key={item.id.videoId}>
                  {item.id?.videoId && (
                    <VideoCard
                      orientation={orientation}
                      video={item}
                      thumbnail={DP}
                      place = {place}
                      key={item.id.videoId + "video"}
                    />
                  )}
                  {item.id?.channelId && (
                    <ChannelCard
                      orientation={orientation}
                      Channel={item}
                      key={item.id.videoId + "channel"}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="Videos flex flex-wrap gap-10 h-fit" key={115 + "feed"}>
          {videos?.map((item) => {
            return (
              <div key={item.id.videoId}>
                {item.id?.videoId && (
                  <VideoCard
                    video={item}
                    thumbnail={DP}
                    key={item.id.videoId + "video"}
                  />
                )}
                {item.id?.channelId && (
                  <ChannelCard
                    Channel={item}
                    key={item.id.videoId + "channel"}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Videos;
