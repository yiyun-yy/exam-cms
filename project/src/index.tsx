import * as React from 'react';
import * as ReactDOM from 'react-dom';

//引入路由配置
import RouterView from './router/RouterView';
import routes from './router/routes';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
	<BrowserRouter>
		<RouterView routes={routes} />
	</BrowserRouter>,
	document.getElementById('root') as HTMLElement
);
