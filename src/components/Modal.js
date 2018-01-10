import React, {Component} from "react";
import Form from "../components/Form";
import SVGInline from "react-svg-inline";

// export const showModal = () => $("#feedback").modal("show");

export default class Modal extends Component {
    // componentDidMount(){
    //     this.intModal();
    // }
    render() {
        return (
            <div id="feedback" className="modal fade feedback-modal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="head-modal">
                            <div className="icon-air">
                                <SVGInline svg={"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
                                "\t viewBox=\"0 0 334.5 334.5\" style=\"enable-background:new 0 0 334.5 334.5;\" xml:space=\"preserve\">\n" +
                                "\t<path d=\"M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481\n" +
                                "\ts1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1\n" +
                                "\tc-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25\n" +
                                "\tc1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073\n" +
                                "\tc1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z\"/>\n" +
                                "</svg>\n"} />
                            </div>
                            <h4 className="title-modal">for ShadeDesigGroup</h4>
                            <a role="button" rel="noopener noreferrer" data-dismiss="modal" className="close-modal">
                                <SVGInline svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 371.23 371.23\"  xml:space=\"preserve\">\n" +
                                "<polygon points=\"371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23   185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615\"/>\n" +
                                "</svg>\n"}/>
                            </a>
                        </div>
                        <div className="modal-body">
                           <Form/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}