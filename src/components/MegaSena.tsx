import trevo from "../assets/trevo-megasena.png"
import "../styles/MegaSena.css";
import { useContext } from "react";
import useJogo from "../hooks/JogoHook";
import { Jogo } from "../types";

function MegaSena() {
    const { megaSena, loaded } = useJogo();
    return (

        <div className="container" style={{ display: loaded ? "" : "none" }}>
            <div className="col-1">
                <div className="header-container">
                    <div className="image-header">
                        <img src={trevo} />
                    </div>
                    <div className="megasena-logo-header">
                        <h3 >MEGA-SENA</h3>
                    </div>

                </div>
                <div className="description">
                    Estimativa de premio do proximo concuncurso. Sorteio {megaSena.dataProximoConcurso}
                </div>
                <div className="megasena-value">
                    <h2>{loaded? megaSena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):""}</h2>
                </div>

            </div>


            <div className="megasena-col-2">
                <div className="">
                    <ul>
                        {megaSena.dezenas ? megaSena.dezenas.map((el) =>
                            <li>
                                {el}
                            </li>
                        ) : ""}
                    </ul>
                </div>
                <h1 className="winners">
                    {megaSena.acumulado ? "ACUMULADO" : megaSena.quantidadeGanhadores + " ganhadores"}
                </h1>

                <p className="gameDescription">
                    Concurso {megaSena.numeroDoConcurso} - {megaSena.dataPorExtenso}
                </p>
            </div>


        </div>



    )
}

export default MegaSena;