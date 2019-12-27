import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import './style.less';

@inject('appStore')
@observer
class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         type: 'normal'
    //     }
    // }

    handleClick = () => {
        const { headerType, setHeaderType } = this.props.appStore;
        if (headerType === 'normal') {
            setHeaderType('add')
        } else {
            console.log('loma');
        }
    }
    render() {
        const {headerType} = this.props.appStore;//.getHeaderType();
        return <div id='chat-header'>
            {headerType === 'normal' ? 'chat' : <Input />}
            <span onClick={this.handleClick} className="operate"><Icon type={headerType === 'normal' ? "plus" : "search"} /></span>
        </div>
    }
}

export default Header;