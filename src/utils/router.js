import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from '@/components/common/notfound';

/**
 * 返回404路由组件
 * */
export const createNotFoundRoute = _ => <Route exact component={NotFound} />;

export const createSwitchRoutes = (routes = [], useRender = false) => {
	return (
		<Switch>
			{routes.map((item, i) => {
				const { redirect } = item;

				const forceRedirect = redirect && redirect.path;
				if (forceRedirect) {
					return (
						<Route key={item.path} exact path={item.path}>
							<Redirect from={item.path} to={redirect.path} />
						</Route>
					);
				}
				const comProps = { ...item.comProps };
				const routeProps = { ...item.routeProps };
				const Comps = item.component;
				const finalProps = {
					key: item.path,
					exact: true,
					path: item.path,
					...routeProps
				};
				if (useRender) {
					finalProps.render = props => <Comps {...props} {...comProps} />;
				} else {
					finalProps.component = () => <Comps {...comProps} />;
				}
				return <Route key={item.path} {...finalProps} />;
			})}

			{createNotFoundRoute()}
		</Switch>
	);
};