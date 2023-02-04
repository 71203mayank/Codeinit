import axios from "axios";

const url = "https://Codeinit.avinashkumar35.repl.co/";

const getAllItems = async () => {
  const endpoint = "all";

  data = await axios.get(`${url}/${endpoint}`);
  console.log(data);
  return;
};

const getUserAds = async (userEmail) => {
  const endpoint = "user";
  data = await axios.post(`${url}/${endpoint}`, { email: userEmail });
  console.log(data);
  return;
};

const getRecent = async () => {
  const endpoint = "recent";
  data = await axios.get(`${url}/${endpoint}`);
};

export { getAllItems, getRecent, getUserAds };
