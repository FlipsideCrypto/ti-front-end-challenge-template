import Axios from "axios";


const client = Axios.create({
  baseURL: "https://api.flipsidecrypto.com/api/v2",
});

export default client;
