import axios from "axios";
import { getAccessToken, logout } from "./jwtService";

const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 30000,
});

api.interceptors.request.use(
  (request) => {
    const token = getAccessToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const user = {
  async login(formData) {
    try {
      const { data } = await api.post("/users/login", formData);
      localStorage.setItem("user", data.token);
      return data;
    } catch (error) {
      throw error;
    }
  },
  async logout(){
    try {
        const {data} = await api.post("/users/logout");
        localStorage.removeItem("user");
        return data;
    } catch (error) {
        throw error;
    }
  },
  async profile(){
    try {
        const {data} = await api.get("/users/profile");
        return data;
    } catch (error) {
        throw error;
    }
  }
};

export const conversation = {
  async getConversationByUser(receiverId){
    try {
      const {data} = await api.get(`/conversations/${receiverId}`);
      return data;
    } catch (error) {
      throw error;
    }
  } 
}

export default api;
