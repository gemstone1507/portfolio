import React from 'react';
import $ from "jquery";

import SectionName from './SectionName.jsx';
import MyWorkItem from './MyWorkItem.jsx';
import Modal from './Modal.jsx';

import './styles/MyWorks.css';

import Data from '../database/data.js'

export default class MyWorks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.style = {};
        this.arr = [];
        this.data = Data;

    }


    openModal(i) {
        $('#modal_block').slideUp(500);
        setTimeout(() => {
            this.setState(
                {
                    modal: true
                }
            )
        }, 900);

        this.arr = this.data[i];

    }
    closeModal() {
        $('.ModalContainer').fadeOut(600);

        setTimeout(() => {
            this.setState(
                { modal: false }
            )
        }, 700);

    }

    render() {
        if (this.state.modal) {
            return (

                <div style={this.style} className="MyWorks">

                    <SectionName
                        sectionName="My"
                        sectionNamePainted="Works"
                    />


                    <Modal
                        key={this.arr.id}
                        workName={this.arr.workName}
                        screenshot={this.arr.screenshot}
                        workDescription={this.arr.workDescription}
                        link={this.arr.link}
                        linkName={this.arr.linkName}
                        onClose={this.closeModal.bind(this)} />

                </div>

            )
        }
        else {
            return (

                <div className="MyWorks">
                    <SectionName
                        sectionName="My"
                        sectionNamePainted="Works"
                    />
                    <div id="modal_block">
                        {

                            this.data.map((work, i) => {
                                return (
                                    <MyWorkItem
                                        key={i}
                                        imageUrl={work.imageUrl}
                                        onClick={this.openModal.bind(this, i)}
                                    />
                                )
                            })
                        }
                    </div>



                </div>

            )
        }


    }
}