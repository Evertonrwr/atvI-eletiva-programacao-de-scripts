import { useContext } from "react";
import { Contexto } from "../contexts";

function useJogo() {
    const context = useContext(Contexto);
    return context;
}

export default useJogo;