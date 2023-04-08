import api from "./api" ;
import { Jogo } from "../types";

export async function GetJogo ():Promise<any>{
    var {data} = await api.get("")
    return {lotofacil: data.lotofacil, megaSena: data.megasena};
} 
