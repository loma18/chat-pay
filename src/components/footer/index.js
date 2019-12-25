import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './style.less';

const { Item } = Menu;

export default @withRouter class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'chat'
        }
    }

    handleClick = e => {
        debugger
        this.setState({
            current: e.key,
        }, () => {
            this.props.history.push(this.props.match.path + this.state.current)
        });
    }

    render() {
        const { current } = this.state;
        return <div id='chat-footer'>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Item key='chat'>
                    <Icon type="message" />chat
                </Item>
                <Item key='booklist'>
                    <Icon type="user" />通讯录
                </Item>
            </Menu>
        </div>
    }
}