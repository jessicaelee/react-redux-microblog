import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";

class MicroblogAPI {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;

    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getAllPosts() {
    let res = await this.request(`posts`);
    return res;
  }

  static async getOnePost(id) {
    let res = await this.request(`posts/${id}`);
    console.log({ res })
    return res;
  }

}

export default MicroblogAPI;