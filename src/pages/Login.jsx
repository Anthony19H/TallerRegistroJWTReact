import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    // Estado para guardar los datos del formulario
    const [formulario, setFormulario] = useState({
        username: "",
        password: ""
    });

    // Estado para controlar mensajes
    const [mensaje, setMensaje] = useState("");

    // Capturar los cambios de los campos
    function manejarCambio(evento) {

        const { name, value } = evento.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));

    }

    // Procesar el formulario
    function manejarSubmit(evento) {
        evento.preventDefault();
        setMensaje("Formulario preparado correctamente");
        console.log("Datos ingresados:", formulario);
    }

    return (

        <main className="login-container">

            <section className="login-card">

                {/* Encabezado */}
                <div className="login-header">

                    <div className="login-icon">
                        <span>🔐</span>
                    </div>

                    <h1>Bienvenido</h1>

                    <p>
                        Ingresa tus credenciales para acceder
                        a tu cuenta.
                    </p>

                </div>

                {/* Formulario */}
                <form onSubmit={manejarSubmit}>

                    {/* Usuario */}
                    <div className="form-group">

                        <label htmlFor="username">
                            Nombre de usuario
                        </label>

                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Ingresa tu usuario"
                            value={formulario.username}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    {/* Contraseña */}
                    <div className="form-group">

                        <label htmlFor="password">
                            Contraseña
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={formulario.password}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    {/* Mensaje */}
                    {mensaje && (
                        <div className="login-message">
                            {mensaje}
                        </div>
                    )}

                    {/* Botón */}
                    <button
                        type="submit"
                        className="login-button"
                    >
                        Iniciar sesión
                    </button>

                </form>

                {/* Enlace de registro */}
                <div className="register-link">

                    ¿No tienes una cuenta?

                    <Link to="/registrar">
                        Regístrate aquí
                    </Link>

                </div>

            </section>

        </main>

    );

}

export default Login;