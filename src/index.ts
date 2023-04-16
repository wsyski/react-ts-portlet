import {I18nUtil, LiferayParams, LiferayUtil} from "@arena/lib-portlet-common";
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import AppContainer from './AppContainer';
import { PORTLET_INSTANCE_DEFAULT } from './constants/LiferayParamsConstants';

const index = (liferayParams: LiferayParams) => {
    const liferayParamsWithDefaults = LiferayUtil.setLiferayParamsDefaults(liferayParams, PORTLET_INSTANCE_DEFAULT);
    const i18nInstance = I18nUtil.init(liferayParamsWithDefaults.contextPath);
    const markup = React.createElement(I18nextProvider, { i18n: i18nInstance }, React.createElement(AppContainer, {
        liferayParams: liferayParamsWithDefaults,
    }));
    ReactDOM.render(React.createElement(React.Fragment, null, markup), document.getElementById(liferayParamsWithDefaults.portletElementId));
};

export default index;
