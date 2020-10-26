import React from 'react';
import { useRouter } from 'next/router';

import  { Button, Input, Checkbox, Form } from 'antd';
//import '../styles/login.css';

export const login = () => {

    const router = useRouter();

    const goRegister = () => {

        router.push('/registro')

    }

    return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Correo Electrónico"
        name="email"
        rules={[{ required: true, message: 'Por favor escriba su coreo electrónico!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="Password"
        rules={[{ required: true, message: 'Por favor escriba su contraseña!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item  name="remember" valuePropName="checked">
        <Checkbox>Recuérdame</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Iniciar sesión
        </Button>
      </Form.Item>

      <Button type="default" onClick={ goRegister }>Ir a registro</Button>

    </Form>


    )
}

export default login
