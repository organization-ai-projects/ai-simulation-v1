import axios from "axios";

const API_URL = "http://localhost:8000/api/events";

export const getEvents = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const triggerEvent = async (eventName: string) => {
  const response = await axios.post(`${API_URL}/trigger`, { eventName });
  return response.data;
};
