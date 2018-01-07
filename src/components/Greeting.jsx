import React from 'react';
import Typist from 'react-typist';
import MainPage from './MainPage.jsx';
import { reactLocalStorage } from 'reactjs-localstorage';

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
            reactLocalStorage.setObject('1', this.state.value);
            this.setState({
                greeting: false
            })
        }
        else {
            alert("Будь добр и представся, ведь я хочу знакомиться)")
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
                        Привет, мой новый посетитель
                    </Typist>
                    <div className='Typist__main'>
                        {this.state.renderMsg ? (
                            <Typist
                                onTypingDone={this.onNewMessDone}
                            >
                                Я хочу познакомиться с тобой
                            <Typist.Delay ms={550} />
                                <br />
                                Рассказать о себе, но для начала
                            <Typist.Delay ms={550} />
                                <br />
                                Я хочу знать как тебя зовут
                            <Typist.Delay ms={550} />
                                <br />
                                <p className="note">*Просто введи свое имья и продолжим</p>
                                <Typist.Delay ms={550} />
                            </Typist>
                        ) : null}
                        {this.state.userName ? (
                            <div className="Tm__user--info">
                                <input type="text" className='Tm__user--input' onChange={this.handleChange} />
                                <input className='Tm__send--btn' type="button" value="SEND" onClick={this.handleSubmit} />
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

