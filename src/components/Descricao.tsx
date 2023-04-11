import "../styles/Descricao.css"
function Descricao({data}:any){
    return (
        <div className="descricao">
        Estimativa de premio do proximo concuncurso. Sorteio {data}
    </div>
    )
}
export default Descricao