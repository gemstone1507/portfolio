import React from 'react';

import './styles/Footer.css';


export default class Footer extends React.Component {
    now = new Date();

    render() {
        return (
            <div className="Footer">
                <div className="info">
                    <p>
                        © {this.now.getFullYear()} <a href="https://github.com/web-scavenger" target="_blank" rel="noopener noreferrer">
                            Dmitrii N.
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}