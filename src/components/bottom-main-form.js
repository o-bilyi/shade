import React, {Component} from "react";
import Form from "./Form";


export default class bottomMainForm extends Component {
    render(){
        return (
            <div className="bottom-main">
                <div className="form-container">
                    <h2 className="title-form">U’VE LIKED OUR WORKS. get in touch</h2>
                    <Form/>
                </div>
            </div>
        );
    }
}
