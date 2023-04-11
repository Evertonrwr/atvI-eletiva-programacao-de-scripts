import "../styles/DescricaoJogo.css"

function DescricaoJogo({numeroDoConcurso, dataPorExtenso}:any){
    return(
        <p className="descricaoJogo">
        Concurso {numeroDoConcurso} - {dataPorExtenso}
    </p>
    )
}
export default DescricaoJogo;