import { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';

// import React from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [confirmaContrasena, setConfirmaContrasena] = useState('')
    

    const [error, setError] = useState(false)
    const [errorContrasena, setErrorContrasena] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault()

        if (nombre === '' || email === '' || contrasena === '' || confirmaContrasena === '') {
            setError(true)
            return
        }
        if (confirmaContrasena != contrasena){
            setErrorContrasena(true)
            return
        }
        setError(false)
        setNombre('');
        setEmail('');
        setContrasena('');
        setConfirmaContrasena('');

    }
    

    return (
        <>
        <h1>Crea una cuenta</h1>
        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://cl.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <label></label>
                    <input placeholder="Nombre"
                        type="text"
                        name="nombre"
                        className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}
                    />
                </div>
                <div className="form-group">
                    <label></label>
                    <input placeholder="tuemail@ejemplo.com"
                        type="text"
                        name="email"
                        className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                </div>
                <div className="form-group">
                    <label></label>
                    <input placeholder="Contrasena"
                        type="text"
                        name="contrasena"
                        className="form-control" onChange={(e) => setContrasena(e.target.value)} value={contrasena}
                    />
                </div>
                <div className="form-group">
                    <label></label>
                    <input placeholder="Confirma Contrasena"
                        type="text"
                        name="email"
                        className="form-control" onChange={(e) => setConfirmaContrasena(e.target.value)} value={confirmaContrasena}
                    />
                </div>
                <button onClick={() => alert('Nombre: ' + nombre + ' Email: ' + email)} type="submit" className="btn
    ">Registrarse</button>
            </form>
            {error ? <p>Completa todos los campos !</p> : null}
            {errorContrasena ? <p>Las contrasenas deben ser iguales</p> : null}
            {/* <h1>Datos ingresados</h1> */}
            {/* {alert(nombre, email)} */}
            {/* {nombre} - {email} - {contrasena} - {confirmaContrasena} */}
            
        </>
    )
}
export default Formulario