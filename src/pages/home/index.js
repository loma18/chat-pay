import React, { Component } from 'react';
// import { Menu, Icon } from 'antd';
import './style.less';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    nickName: 'loma',
                    summary: '这是概要'
                }
            ]
        }
    }

    render() {
        const { data } = this.state;
        return <div id='chat-home'>
            <ul>
                {
                    data.map(item => {
                        return (
                            <li key={item.id}>
                                <h3>{item.nickName}</h3>
                                <p>{item.summary}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    }
}