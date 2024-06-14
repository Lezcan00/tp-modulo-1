import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
return (
    <div className="registration-form-container">
    <h2><u>Registro</u></h2>
    <form>
        <div className="form-group">
            <label htmlFor="firstName"><u>Nombre</u></label>
            <input type="text" id="firstName" name="firstName" placeholder='Ingrese su Nombre' required />
        </div>
        <div className="form-group">
            <label htmlFor="lastName"><u>Apellido</u></label>
            <input type="text" id="lastName" name="lastName" placeholder='Ingrese su Apellido' required />
        </div>
        <div className="form-group">
            <label htmlFor="email"><u>Email</u></label>
            <input type="email" id="email" name="email" placeholder='Ingrese su Email' required />
        </div>
        <div className="form-group">
            <label htmlFor="phone"><u>Teléfono</u></label>
            <input type="tel" id="phone" name="phone" placeholder='Ingrese su Teléfono' required />
        </div>
        <div className="form-group">
            <label htmlFor="password"><u>Contraseña</u></label>
            <input type="password" id="password" name="password" placeholder='Ingrese su Contraseña' required />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword"><u>Confirmar Contraseña</u></label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Ingrese su Contraseña' required />
        </div>
        <button type="submit">Registrar</button>
        </form>
    </div>
);
};

export default RegistrationForm;