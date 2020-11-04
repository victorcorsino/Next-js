import React from 'react'
import { useRouter } from 'next/router';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const Wrapper = ({ children }) => {

    const router = useRouter();

    return(
        
    <Layout className="layout">
        
        <Header style={{ marginBottom: '50px' }}>
            <div className="logo" />

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1" onClick={ ()=>  router.push('/register')  }>Register</Menu.Item>
                <Menu.Item key="2" onClick={ ()=>  router.push('/login')  }>Login</Menu.Item>
            </Menu>

        </Header>

        <Content style={{ padding: 24, minHeight: 380 }}>

            <div className="site-layout-content">{ children}</div>

        </Content>

        <Footer  style={{ 
                borderTop: '1px solid #e8e8e8',
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: '#001529',
                textAlign: 'center'}}
        >
                <b style={{ color:'white' }}>Footer</b>
        </Footer>

    </Layout>

    )

}

export default Wrapper;


