import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import './style.less';

export default @withRouter class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    nickName: 'loma',
                    summary: '这是概要',
                    user: '../../assets/user.jpg'
                },
                {
                    id: 2,
                    nickName: 'loma18',
                    summary: '这是概要18',
                    user: '../../assets/user.jpg'
                },
                {
                    id: 3,
                    nickName: 'horse',
                    summary: '这是概要horse',
                    user: '../../assets/user.jpg'
                },
            ]
        }
    }

    handleClick = (item) => {
        const { match } = this.props;
        let path = '';
        if (match.path === '/') {
            path = '/chat/detail';
        } else {
            path = match.path + '/detail';
        }
        this.props.history.push(path);
    }

    render() {
        const { data } = this.state;
        let userIcon = '';
        return <div id='chat-home'>
            <ul>
                {
                    data.map(item => {
                        // userIcon = require(item.user);
                        userIcon = require('./user.jpg');
                        return (
                            <li key={item.id} onClick={() => this.handleClick(item)} className='home-item'>
                                <Row>
                                    <Col className='left-icon'>
                                        <img src={userIcon} alt="头像" />
                                    </Col>
                                    <Col>
                                        <h3>{item.nickName}</h3>
                                        <p>{item.summary}</p>
                                    </Col>
                                </Row>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    }
}