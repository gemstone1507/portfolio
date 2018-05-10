import React from 'react';

import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import MyWorks from './MyWorks.jsx';
import ContactPage from './ContactPage.jsx';
import Footer from './Footer.jsx';

import './styles/MainPage.css';


export default class MainPage extends React.Component{

    render(){
        return(
            <div className="container">
                <Header />
                <AboutMe />
                <MyWorks />
                <ContactPage />
                <Footer />
            </div>
        )
    }
}