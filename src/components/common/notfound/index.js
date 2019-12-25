import { Button, Row } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {

    render() {
        return (
            <div>
                <Row style={{ textAlign: 'center', position: 'relative', top: '20vh' }}>
                    <p>抱歉，你访问的页面不存在</p>
                    <div>
                        <Link to={'/'}>
                            <Button style={{ width: 180, height: 40, marginRight: 10 }} type="primary">
                                <span>返回首页</span>
                            </Button>
                        </Link>
                    </div>
                </Row>
            </div>
        );
    }
}
