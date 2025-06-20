const Header = () => {
    return (
        <header>
        <div className="layout-container">
            <nav className="nav-bar">

                <a href="#" className="logo">Adyllsxn</a>
    
                <ul className="nav-menu">
                    <li className="nav-item"> <a href="#" className="nav-link">Home</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">About me</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">Portifolio</a> </li>
                </ul>
    
                <div className="hamburguer">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
    
            </nav>
        </div>
    </header>
    )
}

export default Header