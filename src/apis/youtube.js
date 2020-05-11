import axios from "axios";

const KEY = "AIzaSyCRLuO-dn9bNO5SoNPdde5zHZJ_UkT35FE";

export const baseParams = {
  part: "snippet",
  maxResults: 10,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
