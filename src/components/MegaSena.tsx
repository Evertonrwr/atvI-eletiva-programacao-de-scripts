import trevo from "../assets/trevo-megasena.png"
import "../styles/MegaSena.css";
import { useContext } from "react";
import useJogo from "../hooks/JogoHook";
import { Jogo } from "../types";
import Header from "./Header";
import Descricao from "./Descricao";
import ValorProximoPremio from "./ValorProximoPremio";
import Table from "./Table";
import Ganhadores from "./Ganhadores";
import DescricaoJogo from "./DescricaoJogo";

function MegaSena() {
    const { megaSena, loaded } = useJogo();
    return (

        <div className="container" style={{ display: loaded ? "" : "none" }}>
            <div className="col-1">
                <Header trevo={trevo} jogo={"MEGASENA"} color={"#209869"} />
                <Descricao data={megaSena.dataProximoConcurso} />
                <ValorProximoPremio value={megaSena.valorEstimadoProximoConcurso} color={"#209869"} />


            </div>


            <div className="megasena-col-2">
                <Table dezenas={megaSena.dezenas} type={"megasena"} />
                <Ganhadores acumulado={megaSena.acumulado} quantidadeGanhadores={megaSena.quantidadeGanhadores} />
                <DescricaoJogo numeroDoConcurso={megaSena.numeroDoConcurso} dataPorExtenso={megaSena.dataPorExtenso} />

            </div>


        </div>



    )
}

export default MegaSena;