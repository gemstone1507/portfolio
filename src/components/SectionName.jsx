import React from 'react';

import './styles/SectionName.css';

export default class SectionName extends React.Component {

    render() {
        return (
            <div className="SectionName">
                <h2 className='section__name'>
                    {this.props.sectionName}
                    <span className='section__name--painted'>
                        {this.props.sectionNamePainted}
                    </span>
                </h2>
                <hr />
            </div>
        )
    }
}