import logo from "../../assets/images/WikiLogo.png"

function Navigationbar(){
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Lab Wiki Countries
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                </div>
        
            </div>
        </nav>
    )

}

export default Navigationbar