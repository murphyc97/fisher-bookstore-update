import React, { Component } from "react";
import "./authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    aName: "Eric Evans",
                    birthDate: "12/12/65"
                },
                {
                    id: 2,
                    aName: "Nicole Forsgren",
                    birthDate: "1/2/70"
                },
                {
                    id: 3,
                    aName: "George RR Martin",
                    birthDate: "8/20/48"
                }
            ]
        };
    }

    render() {
        return(
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
};