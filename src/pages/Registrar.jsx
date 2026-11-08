import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config/apiConfig";

function Registrar() {

    const navegar = useNavigate();

    const [formulario, setFormulario] = useState({
        username: "",
        password: "",
        rol: "USER"
    });

    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    function manejarCambio(evento) {
        const { name, value } = evento.target;
        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));
    }

    async function manejarSubmit(evento) {
        evento.preventDefault();
        setMensaje("");
        setError("");

        try {
            const respuesta = await fetch(`${API_URL}/registrar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formulario)
            });

            if (respuesta.status === 201) {
                setMensaje("Usuario registrado exitosamente. Redirigiendo al login...");
                setTimeout(() => {
                    navegar("/login");
                }, 2000);
            } else {
                const datos = await respuesta.text();
                setError(datos || "Error al registrar el usuario.");
            }

        } catch (e) {
            setError("Error de conexión. Verifica que el servidor esté activo.");
        }
    }

    return (

        <main className="login-container">

            <section className="login-card">

                {/* Encabezado */}
                <div className="login-header">

                    <div className="login-icon">
                        <span>📝</span>
                    </div>

                    <h1>Crear Cuenta</h1>

                    <p>
                        Completa el formulario para registrarte
                        en el sistema.
                    </p>

                </div>

                {/* Formulario */}
                <form onSubmit={manejarSubmit}>

                    {/* Username */}
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

                    {/* Password */}
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

                    {/* Rol */}
                    <div className="form-group">
                        <label htmlFor="rol">
                            Rol en el sistema
                        </label>
                        <select
                            id="rol"
                            name="rol"
                            value={formulario.rol}
                            onChange={manejarCambio}
                            className="form-select"
                        >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>

                    {/* Mensaje de éxito */}
                    {mensaje && (
                        <div className="login-message">
                            {mensaje}
                        </div>
                    )}

                    {/* Mensaje de error */}
                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    {/* Botón */}
                    <button type="submit" className="login-button">
                        Registrarse
                    </button>

                </form>

                {/* Enlace al login */}
                <div className="register-link">
                    ¿Ya tienes una cuenta?
                    <Link to="/login">
                        Inicia sesión aquí
                    </Link>
                </div>

            </section>

        </main>

    );
}

export default Registrar;
