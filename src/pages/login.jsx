import React from "react";
import {Link} from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
            <div class="textoIS text-center mb-16">
                <span class="text-center margin-auto text-3xl text-orange-600 mt-16 font-extrabold"><b>Petts App</b></span>
            </div>
            <form action="" class="formulario flex flex-col justify-center items-center w-4/5">
            <div class="relative">
          <i class="fa fa-user absolute focus:border-green-800 text-xl"></i>
          <input
            name='Email'
            type="text"
            placeholder="Correo electrónico"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-green-800 transition-all duration-500 text-lg"
            required={true} 
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-lock absolute focus:border-green-800 text-xl"></i>
          <input
            name='Password'
            type="password"
            placeholder="Contraseña"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-green-800 transition-all duration-500 capitalize text-lg"
            required={true} 
          />
        </div>
                {/* <div className="olvideContraseña">
                    <button id="olvide">Olvidé mi contraseña</button>
                </div> */}
                <div >
                <button id="acceder"
                class="botonacceder py-3 px-20 rounded-full bg-green-700 text-white focus:border-green-800 font-bold uppercase text-lg mt-16 transform hover:translate-y-1 transition-all duration-500">
                    <Link to="dashboard">Iniciar sesión</Link>
                </button>
                    
                </div>
            </form>
        </div>
        
    );
}

export default LoginPage;