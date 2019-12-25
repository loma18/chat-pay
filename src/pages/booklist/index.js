import React, { Component } from 'react';
// import { Menu, Icon } from 'antd';
import './style.less';

export default class Booklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    nickName: 'loma'
                },
                {
                    id: 2,
                    nickName: 'loma18'
                },
                {
                    id: 3,
                    nickName: 'horse'
                },
            ]
        }
    }

    render() {
        const { data } = this.state;
        return <div id='chat-booklist'>
            <ul>
                {
                    data.map(item => {
                        return (
                            <li key={item.id}>
                                <h3>{item.nickName}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    }
}