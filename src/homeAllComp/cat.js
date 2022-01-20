import React from 'react';
import { Col, Row } from 'reactstrap';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function cat(props) {
    return (
        <div>
            <Row style={{ display: "flex", justifyContent: "center" }} lg={8}>
            <Col lg={8} style={{backgroundColor: "rgb(242, 253, 249)", position: "relative", top: "-5rem"}}>
                <Row style={{margin: "2%"}}>
                <Col  style={{ height: "fit-content" }} lg={3}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" />
                <p>Saloon for Women</p>
                </Col>
                <Col  style={{ height: "fit-content" }} lg={3}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" />
                <p>Hair services for woman</p>
                </Col>
                <Col  style={{ height: "fit-content" }} lg={3}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" />
                <p>Women's tharapies</p>
                </Col>
                <Col style={{ height: "fit-content" }} lg={3}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" />
                <p>Saloon for women</p>
                </Col>
                <Col style={{ height: "fit-content" }} lg={3}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" />
                <p>Men's Tharapies</p>
                </Col>
                <Col  style={{ height: "fit-content" }} lg={3}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" />
                <p>A/C repair</p>
                </Col>
                <Col lg={3} style={{ height: "fit-content" }}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" />
                <p>Home Paint</p>
                </Col>
                <Col lg={3} style={{ height: "fit-content" }}>
                <Avatar size={45} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg" />
                <p>Electricians</p>
                </Col>
                </Row>
            </Col>      
                
            </Row>
            <Row >
                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/luminosity/1640692667539-86c95c.jpeg"/>
            </Row>
        </div>
    );
}

export default cat;