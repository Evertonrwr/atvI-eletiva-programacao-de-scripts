import "../styles/Header.css";
function Header({trevo, jogo, color}:any) {
    return (
        <div className="header-container">
            <div className="image-header">
                <img src={trevo} />
            </div>
            <div className="logo-header" style={{color:color}}>
                <h3 >{jogo}</h3>
            </div>

        </div>
    )
}
export default Header;