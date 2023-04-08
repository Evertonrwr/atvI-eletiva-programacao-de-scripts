import { createContext, useState} from "react";
import { Jogo, Props } from "../types";


const Contexto = createContext<Props>({} as Props);

function Provider({children}: any){
    const [megaSena, setMegaSena] = useState({} as Jogo);
    const [lotoFacil,setLotoFacil] = useState({} as Jogo);
    const [loaded, setLoaded] = useState(false)
 
    return (
        <Contexto.Provider value={{megaSena, lotoFacil,loaded, setMegaSena, setLotoFacil, setLoaded}}>
           
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

