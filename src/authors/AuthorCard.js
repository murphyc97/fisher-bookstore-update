import React from "react";
import { Card, Button } from "react-bootstrap";

export function AuthorCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.book.author}</Card.Title>
                <Button variant="warning">View</Button>
            </Card.Body>
        </Card>
    );
}