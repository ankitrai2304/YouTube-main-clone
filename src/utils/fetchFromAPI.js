import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "4077f66baemsh69d15268040e03bp16c4bbjsn152ee8df19ce",
    // process.env.REACT_YOUTUBE_API_KEY
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
};
