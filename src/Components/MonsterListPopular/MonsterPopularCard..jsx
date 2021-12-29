import React from "react";
import { Card} from "react-bootstrap";
const MonsterPopularCard = ({name='',description='',img=''}) => {
    return(
        <div style={{marginTop:'3rem'}}>
            <Card style={{ width: '15rem' ,padding:'1rem'}}>
                <Card.Img variant="top" src={img}/>
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

export default MonsterPopularCard;