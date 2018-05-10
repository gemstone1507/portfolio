import React from 'react';

import './styles/MyWorkItem.css';

export default class MyWorkItem extends React.Component {

    render() {
        return (
            <div className="MyWorkItem" onClick={this.props.onClick}>
                <img src={this.props.imageUrl} alt="" />
            </div>
        )
    }
}