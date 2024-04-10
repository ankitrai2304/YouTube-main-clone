import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { SearchShimmer } from "../utils/Shimmer";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return videos.length === 0 ? (
    <SearchShimmer />
  ) : (
    <div>
      <h1 className="mt-4 ml-4 text-2xl font-black">
        Search Results for : <span className="text-red-500">{searchTerm}</span>{" "}
        Videos
      </h1>
      <div className="m-10">
        <Videos videos={videos} orientation="col" place="searchResult" />
      </div>
    </div>
  );
};

export default SearchFeed;
