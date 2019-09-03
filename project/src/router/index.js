import * as React from 'react';
import routes from './routes';
import RouterView from './RouterView';



function Router() {
	return (
		<RouterView routes={routes}/>
	);
}

export default Router;
