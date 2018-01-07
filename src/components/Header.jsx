import React from 'react';
import Typist from 'react-typist';
import {reactLocalStorage} from 'reactjs-localstorage';

import './styles/Header.css';




export default class Header extends React.Component{
    constructor(props){
        super(props);
        let name = reactLocalStorage.getObject('1');
        this.state = {
            userName : name
        }
    }
    
    render(){
        return(
            <div className="Header">
                <Typist className='Typist__Header--greeting'
                        avgTypingSpeed={40}
                        startDelay={1000}
                        onTypingDone={this.onHeaderDone}
                    >
                        Hello My New Friend
                        <Typist.Backspace count={13} delay={500} />
                        <Typist.Delay ms={500} />
                        <span>{this.state.userName}</span>
                        
                    </Typist>
            </div>
        )
    }
}