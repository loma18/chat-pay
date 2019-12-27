import React, { Component } from 'react';
import './style.less';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: { message: 'hah' }
        }
    }

    render() {
        const { data } = this.state;
        return <div id='chat-home'>
            {data.message}
        </div>
    }
}