import React from 'react';
import Typist from 'react-typist';
import $ from "jquery";
import { reactLocalStorage } from 'reactjs-localstorage';

import MainPage from './MainPage.jsx';

import './styles/Greeting.css';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: true,
            renderMsg: false,
            userName: false,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({
            value: event.target.value
        });
    }
    handleSubmit() {
        if (this.state.value.length > 0) {
            $('.greeting__section').fadeOut(600);
            setTimeout(() => {
                reactLocalStorage.setObject('1', this.state.value);
                this.setState({
                    greeting: false
                })
            }, 700);

        }
        else {
            alert("Будь добр и представся, ведь я хочу знакомится)")
        }
    }

    onHeaderDone = () => {
        this.setState({
            renderMsg: true
        })
    }
    onNewMessDone = () => {
        this.setState({
            userName: true
        })
    }

    render() {
        if (this.state.greeting) {
            return (
                <div className='greeting__section'>

                    <Typist className='Typist__header'
                        avgTypingSpeed={40}
                        startDelay={500}
                        cursor={{ hideWhenDone: true }}
                        onTypingDone={this.onHeaderDone}
                    >
                        Hi, my new visitor
                    </Typist>
                    <div className='Typist__main'>
                        {this.state.renderMsg ? (
                            <Typist
                                onTypingDone={this.onNewMessDone}
                                cursor={{ hideWhenDone: true }}
                            >
                               I`m glad to see you here
                            <Typist.Delay ms={550} />
                                <br />
                                But I don`t know nothing about you
                            <Typist.Delay ms={550} />
                                <br />
                                Tell me please, what is your name?
                            <Typist.Delay ms={550}  />
                                <br />
                                <span className="note">*Just write down your name and submit, to continue our acquaintance</span>
                                <Typist.Delay ms={550} />
                            </Typist>
                        ) : null}
                        {this.state.userName ? (
                            <div className="Tm__user--info">
                                <input type="text" className='Tm__user--input' onChange={this.handleChange} />
                                <input className='Tm__send--btn' type="submit" value="Submit" onClick={this.handleSubmit} />
                            </div>
                        ) : null}

                    </div>

                </div>
            );
        }
        else {
            return (
                <MainPage />
            )

        }

    }
}

