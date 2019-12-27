import React, { Component } from 'react';
import { Spin } from 'antd';

const AsyncComponent = importComponent => {
	return class extends Component {
		constructor(props) {
			super(props);

			this.state = {
				component: null
			};
		}

		componentDidMount() {
			importComponent().then(cmp => {
				this.setState({ component: cmp.default });
			});
		}
		componentWillUnmount() {
			this.setState = () => { };
		}

		render() {
			const C = this.state.component;

			return C ? <C {...this.props} /> : <Spin />;
		}
	};
};
export default AsyncComponent;
