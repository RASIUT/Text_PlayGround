const Navbar = (props) => {
    return(
        <nav className={`navbar navbar-expand-lg  px-5 mb-3`} style={props.navbarColor}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${props.mode === "Dark Mode" ? "light" : "dark"}`} href="/">Text PlayGround</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={`nav-link active text-${props.mode === "Dark Mode" ? "light" : "dark"}`} aria-current="page" href="/">Home</a>
                        <a className={`nav-link text-${props.mode === "Dark Mode" ? "light" : "dark"}`} href="/">About</a>
                        <a className={`nav-link text-${props.mode === "Dark Mode" ? "light" : "dark"}`} href="https://www.github.com/RASIUT" target="blank">GitHub</a>
                    </div>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==="Light Mode" ? "Dark Mode" : "Light Mode"}</label>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;