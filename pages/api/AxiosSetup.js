import axios from "axios";
import { baseURL } from "../../axios"; 

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${baseURL}/api/your-endpoint`);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status || 500).json({ error: error.message });
  }
}
