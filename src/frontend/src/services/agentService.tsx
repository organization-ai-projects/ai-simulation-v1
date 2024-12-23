import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const getAgents = async () => {
  const response = await axios.get(`${API_URL}/agents`);
  return response.data;
};
