import { http } from "./config";

export default {
    listar:(id)=>{
        return http.get(`cidades?estadoId=${id}`)
    }
}