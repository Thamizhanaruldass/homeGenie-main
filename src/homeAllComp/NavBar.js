import React from 'react'
import { Col, Row } from 'reactstrap';
import './NavBar.css';
import Logo from './HomeGenieWithslogan.png'
import { Breadcrumb } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';




const { Search } = Input;



function NavBar(props) {

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
            </Menu.Item>
        </Menu>
    );

    return (
        <div >
            <Row style={{ padding: "1%" }}>
                <Col lg={7}>
                    <img className='imageClass' src={Logo} />
                </Col>
                <Col lg={5}>
                    <Row style={{ color: "white" }}>
                        <Col>
                            <p>blog</p>
                        </Col>
                        <Col>
                            <p>Register as a professional</p>
                        </Col>
                        <Col>
                            <p>login/sign Up</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop: "5rem" }}>
                <Col>
                    <Breadcrumb style={{ color: "white" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>

                        <Breadcrumb.Item style={{ color: "white" }}>Chennai</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 style={{ color: "white" }}>Search for all your needs ...</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4} style={{display:"flex",justifyContent:"end"}}>

                    <Dropdown overlay={menu}>
                        <Button >
                        <EnvironmentOutlined style={{alignItems:"center"}}/> Location <DownOutlined />
                        </Button>
                    </Dropdown>

                </Col>
                <Col lg={5}>
                    <Search placeholder="input search text" enterButton />
                </Col>
            </Row>
        </div>
    );
}

export default NavBar;
