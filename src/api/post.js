import axios from "axios";

const url = "https://Codeinit.avinashkumar35.repl.co";

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

  try {
    let resp = await axios.post(`${url}/${endpoint}`, data);
    console.log(resp);
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export { postAd, deleteAd, newUser };
