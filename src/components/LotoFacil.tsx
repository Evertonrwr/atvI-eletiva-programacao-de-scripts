import trevo from "../assets/trevo-lotofacil.png"
import "../styles/LotoFacil.css";
import { Contexto } from "../contexts";
import { useContext } from "react";
import Header from "./Header";
import descricao from "./Descricao";
import Descricao from "./Descricao";
import ValorProximoPremio from "./ValorProximoPremio";
import Table from "./Table";
import Ganhadores from "./Ganhadores";
import DescricaoJogo from "./DescricaoJogo";
function LotoFacil() {
    const { lotoFacil, loaded } = useContext(Contexto)

    return (
        <>

            <div className="container" style={{ display: loaded ? "" : "none" }}>
                <div className="col-1">
                    <Header trevo={trevo} jogo={"LOTOFÁCIL"} color={"#930989"} />
                    <Descricao data={lotoFacil.dataProximoConcurso} />
                    <ValorProximoPremio value={lotoFacil.valorEstimadoProximoConcurso} color={"#930989"} />

                </div>


                <div className="col-2">
                    <Table dezenas={lotoFacil.dezenas} type={"lotofacil"} />
                    <Ganhadores acumulado={lotoFacil.acumulado} quantidadeGanhadores={lotoFacil.quantidadeGanhadores} />
                    <DescricaoJogo numeroDoConcurso={lotoFacil.numeroDoConcurso} dataPorExtenso={lotoFacil.dataPorExtenso} />
                </div>

            </div>

        </>




    )
}
export default LotoFacil;