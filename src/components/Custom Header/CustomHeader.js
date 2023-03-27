import React from 'react';
import {Col, Row} from "react-bootstrap";

const CustomHeader = ({user, userInfo}) => {
    return (
        <Row style={{marginBottom: 30}}>
            <Col style={{display: "flex", alignItems: "center"}}>
                <h1 style={{marginRight: 20}}>{user} repositories</h1>
                <div>
                    <img src={userInfo.avatar_url} style={{width: "10%", borderRadius: "50%"}} alt="avatar"/>
                </div>
            </Col>
        </Row>
    );
};

export default CustomHeader;
