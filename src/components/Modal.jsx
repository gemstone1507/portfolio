import React from 'react';

import './styles/Modal.css';
import close_btn from "../img/close_btn.png";

export default class Modal extends React.Component {

    render() {
        return (
            
            <div className="ModalContainer" >
            
              
                <div className="close" onClick={this.props.onClose}>
                    <img src={close_btn} alt="" /></div>
                <h2>{this.props.workName}</h2>
                <div className="screenshot">
                    <img src={this.props.screenshot} alt="" />

                </div>
                <div className="description">
                    {this.props.workDescription}
                    
                    <div className="link">
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.linkName}</a>
                    </div>
                </div>
     
            </div>
         
        )
    }
}