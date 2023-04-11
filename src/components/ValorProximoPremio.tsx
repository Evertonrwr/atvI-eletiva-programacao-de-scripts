import "../styles/ValorProximoPremio.css";
function ValorProximoPremio({ value, color }: any) {
    return (
        <div className="value">
            <h2 style={{color:color}}>{value? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}</h2>
        </div>

    )
}
export default ValorProximoPremio;