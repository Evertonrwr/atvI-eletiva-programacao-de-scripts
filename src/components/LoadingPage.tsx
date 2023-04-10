import trevo from "../assets/trevo-lotofacil.png"
import "../styles/LotoFacil.css";
import { Contexto } from "../contexts";
import { useContext, useEffect } from "react";
import "../styles/LoadingPage.css"
import { GetJogo} from "../services/JogosService";
function LoadingPage() {
    const { lotoFacil, megaSena, loaded,setLotoFacil, setMegaSena, setLoaded} = useContext(Contexto)
    useEffect(()=>{
        setTimeout(()=>{
            GetJogo().then((r)=>{
                console.log(r)
                setLotoFacil(r.lotofacil)
                setMegaSena(r.megaSena)
                setLoaded(true)
            })

        }, 3000)

    },[])
    return (
        <>

            <div className="loadingPage" style={{ display: loaded ? "none" : "" }}>
                <div className="loading">
                    <h1>
                        Carregando..
                    </h1>
                </div>
                <div className="spinner">
                </div>

            </div>
          <hr style={{ display: loaded ? "" : "none" }}></hr>

        </>




    )
}
export default LoadingPage;