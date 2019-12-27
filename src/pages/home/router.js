/**
 * Created By xun  on 2018-08-01 16:01.
 * Description: index
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createSwitchRoutes } from '@/utils/router';
import Loader from '@/components/AsyncComponent';

const Home = Loader(() =>
	import('./index')
);
const Detail = Loader(() => import('./detail'));

export default @withRouter class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { match } = this.props;
		const routeConfig = [
			{
				path: match.path,
				component: Home,
				comProps: {
					
				}
			},
			{
				path: match.path + '/detail',
				component: Detail,
				comProps: {
				},
				routeProps: { exact: false }
			}
		];
		return <div>{createSwitchRoutes(routeConfig)}</div>;
	}
}
