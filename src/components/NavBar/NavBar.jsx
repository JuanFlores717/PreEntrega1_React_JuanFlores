import CardWidget from "../CardWidget/CardWidget"
const NavBar = () => {

    return(
        <nav className="navBar">
            <div className="navBar__logo">
                <h1 className= "navBar__logo-text">Peluches Estelares</h1>
            </div>
            <div>
                <ul className="navBar__list">
                    <li className="navBar__list-li"><a href="" className="navBar__list-link">Inicio</a></li>
                    <li className="navBar__list-li"><a href="" className="navBar__list-link">Nosotros</a></li>
                    <li className="navBar__list-li"><a href="" className="navBar__list-link">Contacto</a></li>
                </ul>
            </div>
            <CardWidget/>
        </nav>
        )
    }
    
    export default NavBar