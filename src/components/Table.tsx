import "../styles/Table.css"
function Table({dezenas, type}:any) {
  
    return (
        <div className={type}>
            <ul>
                {dezenas ? dezenas.map( (el:any) =>
                    <li>
                        {el}
                    </li>
                ) : ""}
            </ul>
        </div>
    )
}
export default Table;