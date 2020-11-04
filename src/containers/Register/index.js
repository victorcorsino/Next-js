import React, { useEffect, useReducer, useState } from 'react';

import  { Button, Input, notification } from 'antd';

const Register = () => {

    const initialPersona = 
      { 
        name: "", 
        lastname: "", 
        age: "", 
        email: "" 
      }
    

    const [persona, setPersona] = useState(initialPersona)

    //destructuramos el useState persona
    const { name, lastname, age, email } = persona;

    const manageForm = (e) => {

        setPersona({
          ...persona,
          [e.target.name]: e.target.value
        }) 
    }


     useEffect(() => {

        console.log(persona)

    }, [persona]) 

    // Notificacion ANT DESIGN
    const openNotification = () => {
        notification.open({
          message: 'REGISTRO SATISFACTORIO!',
          description:
            `Nombre: ${name}, Apellido: ${lastname}, Edad: ${age}, Correo: ${email} `,
          className: 'custom-class',
          style: {
            width: 600,
          },
        });
      };


    return (
        
        <form >

            <div className="container">
                    
                <label>Nombre</label>
                <Input type="text" value={name} name="name" onChange={ manageForm } required/>
                
                <label>Apellido</label>
                <Input type="text" value={lastname} name="lastname" onChange={ manageForm } required  />

                <label>Edad</label>
                <Input type="number" value={age} name="age" onChange={ manageForm } required  />

                <label>Correo Electrónico</label>
                <Input type="text" value={email} name="email" onChange={ manageForm } required  />

                <Button type="primary" onClick= { openNotification }>REGISTRARSE</Button>

            </div>

        </form>

    )
}

export default Register;

