
const Login = () => {
    return (
        <form>
        <label>
            Correo:
            <input type="text" name="correo" />
        </label><br></br>
        <label>
            Contraseña:
            <input type="text" name="contra" />
        </label><br></br>
        <input type="submit" value="Iniciar sesion" />
        </form>
    )
}

export default Login;