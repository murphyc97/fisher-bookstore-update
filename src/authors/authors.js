import React, { Component } from "react";
import "./authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    render() {
        return(
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}
