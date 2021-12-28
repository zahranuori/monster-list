// import React, {useEffect} from "react";
// import {Link} from "react-router-dom";
// import './MonsterPopular.style.css';
import {Col, Container, Row} from "react-bootstrap";
import {MonsterPopularCard} from "../index";
const MonsterListPouplar =() => {
        return (
            <Container>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای خشمگین' description="من یه هیولا عصبانی هستم >_< " img="https://robohash.org/119"/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای آنتن دار' description="قشنگترین هیولای آنتنی جهانم >_< " img="https://robohash.org/911"/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای خشمگین' description="من یه هیولا عصبانی هستم >_< " img="https://robohash.org/119"/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای خشمگین' description="من یه هیولا عصبانی هستم >_< " img="https://robohash.org/119"/>
                    </Col>

                </Row>
            </Container>
        )
}
export default MonsterListPouplar;