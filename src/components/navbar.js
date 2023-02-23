const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" id="navbarName" href="/Portfolio/#/">Justin Snyder</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Portfolio/#/about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Portfolio/#/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Portfolio/#/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Portfolio/#/resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar