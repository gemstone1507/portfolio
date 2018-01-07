import React from 'react';
import Header from './Header.jsx';
import './styles/MainPage.css';


export default class MainPage extends React.Component{

    render(){
        return(
            <div className="container">
                <Header />
            </div>
        )
    }
}