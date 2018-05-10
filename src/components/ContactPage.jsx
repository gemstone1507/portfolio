import React from 'react';

import './styles/ContactPage.css';


export default class ContactPage extends React.Component {

    render() {
        return (
            <div className="ContactPage">
                <p>
                    Have a project or question? <br />
                    Contact me at <a href="mailto:dimana1507@gmail.com?subject=Вопрос по HTML">dimana1507@gmail.com</a> 
                </p>
            </div>
        )
    }
}