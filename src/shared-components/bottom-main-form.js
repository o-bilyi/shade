import Form from "./Form";
import React, {Component} from "react";

export default class bottomMainForm extends Component {
    render(){
        return (
            <div className="bottom-main">
                <div className="form-container">
					<h2 className="title-form" children="Якщо вам сподобались наші роботи. Будемо на зв'язку"/>
                    <Form/>
                </div>
            </div>
        );
    }
}
