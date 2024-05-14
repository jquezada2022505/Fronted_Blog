import './nav.css';

export const Nav = () => {
    return (
        <div className="container">
            <header>
                <nav className="navbar">
                    <div className="logo"></div>
                    <ul className="nav-links">
                        <li><a onClick={() => window.location.reload()}>Inicio</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}