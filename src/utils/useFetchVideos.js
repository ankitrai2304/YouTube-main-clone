import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const useFetchVideos = (props) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [videos, setVideos] = useState([]);
  setSelectedCategory(props);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return videos;
};

export default useFetchVideos;
