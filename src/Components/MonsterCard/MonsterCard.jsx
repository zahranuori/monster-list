import React from "react";
import {Card} from "react-bootstrap";
const MonsterCard = ({name,description,img}) => {
    return(
        <div className="monster-card">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default MonsterCard;