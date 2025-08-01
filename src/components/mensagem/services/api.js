import axios from "@/axios";

const PREFIX = 'mensagem';

export default {
    getMensagem(nome) {
        return axios.post(`${PREFIX}/getMensagem`, nome)
    },

    getObjeto(nome) {
        return axios.post(`${PREFIX}/getObjeto`, nome)
    }
}