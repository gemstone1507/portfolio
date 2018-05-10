import React from 'react';
import SectionName from './SectionName.jsx';

import './styles/AboutMe.css';

export default class AboutMe extends React.Component {


    render() {
        return (
            <div className="AboutMe">
                <SectionName
                    sectionName='About'
                    sectionNamePainted='Me' />

                <div className="AboutMe__info--block">
                    <p className="AboutMe__ib--text">
                        I'm Naumchuk Dmitrii, a <span className='painted__text'>20-year-old</span> web-developer and interaction designer, who lives in Vinnitsa. I study at VNTU, obtaining in a process a bachelor diploma in the faculty of computer system and automation.<br />

                        Work in web-development more than 6 months gives me a lot of experiance and attainments. My knowledge and interests consist of working with <span className='painted__text'>  Native JavaScript (ES5+), jQuery, ReactJS, JSON, HTML5, CSS3, SASS/SCSS, BEM,
                         Twitter Bootstrap 3, CMS OpenCart and WordPress, 
                         Git, npm, Adobe Photoshop</span><br />
                        Have a basic knowledges and understanding the principles of work of <span className='painted__text'> Node.js, MongoDB, REST API </span> <br />
                        Speaking about my job qualities, I'd like to say that creativity, ambitiousness and enterprise prevail in me. I'm a hard-working person, who is interested in new projects, which bring me more invaluable experience and pleasure.<br />

                        Creating is not just a job for me, it's a passion.
                </p>
                </div>
            </div>
        )
    }
}