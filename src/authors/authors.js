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
                    Aname: "Eric Evans"
                },
                {
                    id: 2,
                    Aname: "Nicole Forsgren"
                },
                {
                    id: 3,
                    Aname: "George RR Martin"
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