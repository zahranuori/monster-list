// import React, {useEffect} from "react";
// import {Link} from "react-router-dom";
// import './MonsterListPopular.style.css';
import {Col, Container, Row} from "react-bootstrap";
import monster9 from "./../../img/monster (9).png";
import monster13 from "./../../img/monster (13).png";
import monster1 from "./../../img/monster (1).png";
import monster3 from "./../../img/monster (3).png";
import monster4 from "./../../img/monster (4).png";
import monster6 from "./../../img/monster (6).png";
import monster2 from "./../../img/monster (2).png";
import monster8 from "./../../img/monster (8).png";
import {MonsterPopularCard} from "../index";
const MonsterListPouplar =() => {
        return (
            <Container >

                <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای مهربون' description="من یه هیولا مهربون و گوگولی هستم *_*" img={monster9}/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای خطرناک' description="من یه هیولای گاز بگیرم حواست باشه O_o " img={monster13}/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای خابالو' description="من قرار بود کوالا باشم اما یه هیولا خابالوشدم -_- " img={monster1}/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای خشمگین' description="من یه هیولا عصبانی هستم >_< " img={monster2}/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای احساساتی' description="من یه هیولا احساساتی هستم :`)" img={monster3}/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای خنگ' description="من یه هیولایم که یاد میگیرم اما فراموش میکنم " img={monster4}/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای زبون دراز' description="من یه هیولای زبون دراز هستم :P  " img={monster6}/>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <MonsterPopularCard name='هیولای بازیگوش' description="من یه هیولا بازیگوش هستم :P" img={monster8}/>
                    </Col>


                </Row>
            </Container>
        )
}
export default MonsterListPouplar;