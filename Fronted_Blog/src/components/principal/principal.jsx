import './principal.css'; 

export const Principal = () => {
    return (
        <principal className="principal">
            <div className="principal-content">
                <div className="principal-section">
                    <h2>Enlaces</h2>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="https://github.com/jquezada2022505/Laboratorio-1.git">Acerca de Josué Quezada</a></li>
                    </ul>
                </div>
                <div className="principal-section">
                    <h2>Redes Sociales</h2>
                    <ul>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com/i/flow/login">X</a></li>
                        <li><a href="https://www.instagram.com/josuequezadaa_/">Instagram</a></li>
                    </ul>
                </div>
                <div className="principal-section">
                    <h2>Contacto</h2>
                    <ul>
                    <li><p>Dirección: Guatemala</p></li>
                    <li><p>Teléfono: 3617-3801</p></li>
                    <li><p>Correo: jquezada-2022505@kinal.edu.gt</p></li>
                    </ul>
                </div>
            </div>
            <div className="principal-bottom">
                <p>	Josué Quezada &#169; Kinal </p>
            </div>
        </principal>
    );
}