import React from "react";
import {Link} from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <div className="textoIS">
                <span id="IS"><b>Iniciar sesión</b></span>
            </div>
            <form action="" className="formulario">
                <div className="entradaTextoCedula">
                    <input type="email" placeholder="Correo electrónico"/>
                </div>
                <div className="entradaTextoContraseña">
                    <input type="password" placeholder="Contraseña"  />
                </div>
                {/* <div className="olvideContraseña">
                    <button id="olvide">Olvidé mi contraseña</button>
                </div> */}
                <div className="botonacceder">
                <Link to="dashboard"><button id="acceder" >Inicia sesión</button></Link>
                    
                </div>
            </form>
        </>
        
    );
}

export default LoginPage;