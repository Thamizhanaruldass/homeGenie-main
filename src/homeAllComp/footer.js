import React from 'react';
import { Col, Row } from 'reactstrap';
import logo from "./HomeGenieWithslogan.png";
import { FacebookFilled,TwitterCircleFilled,InstagramFilled,YoutubeFilled,LinkedinFilled } from '@ant-design/icons';

function footer(props) {
    return (
        <div>
            <Row style={{ backgroundColor: "black" }}>
                <Col>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "space-between", color: "White", fontFamily: "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif", fontSize: "larger", fontWeight: "bold", margin: "2%" }} lg={12}>
                            <p>About Us</p>
                            <p>UC Impact</p>
                            <p>Terms  Condition</p>
                            <p>Privacy Policy</p>
                            <p>Anti Discrimination policy</p>
                            <p>Blog</p>
                            <p>Reviews</p>
                            <p>Near Me</p>
                            <p>Career</p>
                            <p>Contact Us</p>
                            <u></u>
                        </Col>
                        <hr style={{ color: "white", height: "3px", position: "relative", top: "-2.5rem" }}></hr>
                    </Row>
                </Col>
                <Row>
                    <Col style={{color:"#c3beea9e"}}>
                    <h5 style={{color:"white",display:"flex",justifyContent:"flex-start"}}>Servicing In</h5>
                    <h6 style={{color:"white",fontWeight:"bold",display:"flex",justifyContent:"flex-start"}}>AUS</h6>
                    <Col lg={12} style={{display:"flex",justifyContent:"flex-start"}}>
                    <p style={{fontSize:"18px"}}>Melbourn &emsp; Sydney</p>
                    </Col>
                    <h6 style={{color:"white",fontWeight:"bold",display:"flex",justifyContent:"flex-start"}}>India</h6>
                    <Col lg={12} style={{display:"flex",justifyContent:"flex-start"}}>
                    <p style={{fontSize:"18px"}}>Agra &emsp; Ahmadabad &emsp; Chennai &emsp; pondicherry &emsp; Cuddalore &emsp; Villupuram &emsp;
                        Mettupalayam &emsp; Ooty &emsp; Thirupur &emsp;<br/> Erode &emsp; Madurai &emsp; Mumbai &emsp; Delhi &emsp;
                        Indore &emsp; Pune &emsp; Kerala &emsp; Kochin &emsp; Allapuzha
                    </p>
                    </Col>
                    <h6 style={{color:"white",fontWeight:"bold",display:"flex",justifyContent:"flex-start"}}>KSA</h6>
                    <Col lg={12} style={{display:"flex",justifyContent:"flex-start"}}>
                    <p style={{fontSize:"18px"}}>Jeddah &emsp;  Riyadah</p>
                    </Col>
                    <h6 style={{color:"white",fontWeight:"bold",display:"flex",justifyContent:"flex-start"}}>SGP</h6>
                    <Col lg={12} style={{display:"flex",justifyContent:"flex-start"}}>
                    <p style={{fontSize:"18px"}}>Singapore</p>
                    </Col>
                    <h6 style={{color:"white",fontWeight:"bold",display:"flex",justifyContent:"flex-start"}}>UAE</h6>
                    <Col lg={12} style={{display:"flex",justifyContent:"flex-start"}}>
                    <p style={{fontSize:"18px"}}>Abu Dubai &emsp; Dubai &emsp; Sharjah</p>
                    </Col>
                    </Col>
                    <hr style={{ color: "white", height: "3px"}}></hr>
                 </Row>
                <Row>
                    <Col style={{display:"flex",justifyContent:"flex-start"}} >
                        <img style={{width:"150px",display:"flex",justifyContent:"flex-start"}}src={logo}/>
                        <p style={{color:"white",position:"relative",top:"1rem"}}>© 2014-20 UrbanClap Technologies India Pvt. Ltd.</p>
                    </Col>
                    <Col style={{color:"white",position:"relative",top:"1rem",height:"1em",display:"flex",justifyContent:"space-evenly"}}>
                    <FacebookFilled  />
                    <TwitterCircleFilled />
                    <InstagramFilled />
                    <YoutubeFilled />
                    <LinkedinFilled />
                    </Col>
                    <Col style={{color:"white",position:"relative",top:"1rem",height:"1em",display:"flex",justifyContent:"space-evenly"}}>
                    <img style={{height:"50px",position:"relative",top:"-1rem"}} src='https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png'/>
                    <img style={{height:"50px",position:"relative",top:"-1rem"}} src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"/>
                    </Col>
                </Row>
            </Row>
        </div>
    );
}

export default footer;