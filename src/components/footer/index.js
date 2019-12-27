import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { inject } from 'mobx-react';
import './style.less';

const { Item } = Menu;

@withRouter
@inject('appStore')
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: props.location.pathname.replace('/', '')
        }
    }

    handleClick = e => {
        this.props.appStore.setHeaderType();
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

export default Footer;