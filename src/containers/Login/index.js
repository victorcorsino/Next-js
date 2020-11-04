import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import  { Button, Input } from 'antd';

const Login = () => {


    const [login, setLogin] = useState({email: "", password: "", response: ""});

    const { email, password, response } = login;

    let flag;

    const handleInputChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const body = {
        email: email,
        password: password,
        societyId: "fafc7359-0139-43d7-9d00-1828d90cc407" 
    }

    useEffect(() => {

        // Si existe respuesta del api con su token redireccionamos a register
        response.token ? flag = true : flag = false
        flag ? goRegister() : null
        
        console.log(response)
        console.log(flag)

    }, [login])

    const router = useRouter();

    const goRegister = () => {
        router.push('/register')
    }

    const goLogin = () => {

        const requestOptions = {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        const initialRequest = async() => {

            await fetch('https://dbcolegios.blockchainconsultora.com/users/login/', requestOptions)
            .then((response) => response.json())
            .then(data => setLogin({ response: data }));
    
        }

        initialRequest()
    }

    return (
        <form >
            <div className="container">
                    
                <label>Correo Electrónico</label>
                <Input type="text" value={email} name="email" onChange={ handleInputChange } required/>
                
                <label>Contraseña</label>
                <Input type="text" value={password} name="password" onChange={ handleInputChange } required  />

                <Button type="primary" onClick= { goLogin } style={{ marginRight: '20px', marginTop: '20px' }}>LOGIN</Button>

                <Button type="primary" onClick={ goRegister }>IR A REGISTRO</Button>
            </div>
        </form>


    )
}

export default Login
