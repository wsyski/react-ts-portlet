import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-provider';

import AppComponent, {LiferayParams} from './AppComponent';

export default function main(liferayParams: LiferayParams) {
	 const rootElement = React.createElement(AppComponent,{ liferayParams: liferayParams });
	 ReactDOM.render(
		rootElement,
		document.getElementById(liferayParams.portletElementId)
	);
}
