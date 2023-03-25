import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-provider';

import AppComponent, {LiferayParams} from './AppComponent';

export default function main(liferayParams: LiferayParams) {
	 ReactDOM.render(
		<AppComponent liferayParams={liferayParams} />,
		document.getElementById(liferayParams.portletElementId)
	);
}
