import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/"; // Django backend URL

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}login/`, { username, password });
  if (response.data.access) {
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
  }
  return response.data;
};

export const register = async (username, password, is_student, is_teacher) => {
  const response = await axios.post(`${API_URL}register/`, {
    username,
    password,
    is_student,
    is_teacher,
  });
  return response.data;
};
