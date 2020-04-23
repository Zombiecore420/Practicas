import React from 'react';

import '../assets/style/Register.scss';

import icon from '../assets/static/icono.jpg';

const Register= () =>{
    return (
        <div className="Register">
           <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="./styles.css"/>
            <title>Registro</title>
            </head> 
            <body>
            <header class="header">
                <img class="header__img" src={icon}/>
            </header>
            <section class="register">
                <section class="register__container">
                <h2>Regístrate</h2>
                <form class="register__container--form">
                    <input class="input" type="text" placeholder="Nombre"/>
                    <input class="input" type="text" placeholder="Correo"/>
                    <input class="input" type="password" placeholder="Contraseña"/>
                    <button class="button">Registrarme</button>
                </form>
                <a href="">Iniciar sesión</a>
                </section>
            </section>
            <footer class="footer">
                <a href="/">Terminos de uso</a>
                <a href="/">Declaración de privacidad</a>
                <a href="/">Centro de ayuda</a>
            </footer>
            </body>

        </div>
    )
}
export default Register;