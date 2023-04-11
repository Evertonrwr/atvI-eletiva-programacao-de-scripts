import "../styles/Ganhadores.css"
function Ganhadores({ acumulado, quantidadeGanhadores }: any) {
    return (
        <h1 className="ganhadores">
            {acumulado ? "ACUMULADO" : quantidadeGanhadores + " ganhadores"}
        </h1>
    )
}
export default Ganhadores;