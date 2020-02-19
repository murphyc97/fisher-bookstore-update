import React, { Component } from "react";
import "./books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "A Game of Thrones",
                    author: "George RR Martin",
                    isbn: "978-0553386790"
                },
                {
                    id: 4,
                    title: "A Clash of Kings",
                    author: "George RR Martin",
                    isbn: "978-9173488297"
                },
                {
                    id: 5,
                    title: "A Storm of Swords",
                    author: "George RR Martin",
                    isbn: "978-8293059998"
                },
                {
                    id: 6,
                    title: "A Feast for Crows",
                    author: "George RR Martin",
                    isbn: "978-9024567157"
                },
                {
                    id: 7,
                    title: "A Dance with Dragons",
                    author: "George RR Martin",
                    isbn: "978-0553390568"
                },
                {
                    id: 8,
                    title: "The Winds of Winter",
                    author: "George RR Martin",
                    isbn: "978-0008165130"
                }
            ]
        };
    }

    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}