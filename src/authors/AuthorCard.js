import React from "react";
import { Card, Button } from "react-bootstrap";

export function AuthorCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.author.aName}</Card.Title>
                <Card.Text>Birthdate: {props.author.birthDate}</Card.Text>
                <Button variant="warning">View</Button>
            </Card.Body>
        </Card>
    );
}