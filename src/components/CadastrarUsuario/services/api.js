import axios from "@/axios";

const PREFIX = 'usuarios';

export default {
  cadastrar(dados) {
    return axios.post(`/${PREFIX}`, dados);
  }
};