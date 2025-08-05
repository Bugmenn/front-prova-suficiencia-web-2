import axios from "@/axios";  // seu axios configurado com baseURL

const PREFIX = ''; // login está em /login, sem prefixo extra

export default {
  login(credentials) {
    return axios.post(`${PREFIX}/login`, credentials);
  },

  logout() {
    localStorage.removeItem('token');
  },

  getToken() {
    return localStorage.getItem('token');
  }
};