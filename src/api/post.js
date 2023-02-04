import axios from "axios";

const postAd = async (data) => {
  let endpoint = "newpost";

  let resp = await axios.post(`${url}/${endpoint}`, data);

  console.log(resp);
};

const deleteAd = async (data) => {
  let endpoint = "delete";

  let resp = await axios.post(`${url}/${endpoint}`, data);

  console.log(resp);
};

const newUser = async (data) => {
  let endpoint = "newuser";
  let resp = await axios.post(`${url}/${endpoint}`, data);
  console.log(resp);
};

export { postAd, deleteAd, newUser };
