import Axios from "axios";

export const cancelSource = Axios;
const axios = Axios.create({ baseURL: "http://localhost:3001" });
export default axios;
