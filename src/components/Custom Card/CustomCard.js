import React from 'react';
import {Card, Col} from "react-bootstrap";
import "./CustomCard.css"

const CustomCard = ({rep, user}) => {

    return (
        <Col className="col-xs-12 col-md-4 col-sm-4 col-lg-4 card-Wrapper"
             key={rep.id}
        >
            <Card>
                <Card.Body>
                    <Card.Title>{rep.name}</Card.Title>
                    {rep.public ?
                        <Card.Text
                            className={"card-visibility"}
                        >
                            Private
                        </Card.Text> :
                        <Card.Text className={"card-visibility-public"}>Public</Card.Text>}
                    <Card.Text>
                        Main Language: {rep.language !== null ? rep.language : "Undefined"}
                    </Card.Text>
                    <Card.Text>
                        Created at : {rep.created_at.slice(0, 10)}
                    </Card.Text>
                    <Card.Text>
                        Date of last push: {rep.pushed_at.slice(0, 10)}
                    </Card.Text>
                    <Card.Text>
                        Count of Stars: {rep.stargazers_count}
                    </Card.Text>
                    <Card.Text>
                        <a href={`https://github.com/${user.login}/${rep.name}`}
                           className={"card-link"}>
                            View Full
                            Repository</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CustomCard;
