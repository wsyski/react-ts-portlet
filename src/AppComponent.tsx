import React from 'react';

export interface Configuration {
	[key: string]: string | string[];
}
export interface LiferayParamsConfiguration {
	portletInstance: Configuration;
	system: Configuration;
}
export interface LiferayParams {
	contextPath: string;
	portletElementId: string;
	portletNamespace: string;
	configuration: LiferayParamsConfiguration;
}

interface Props {
	liferayParams: LiferayParams;
}

const AppComponent: React.FC<Props> = ({liferayParams}: Props) => {

	return (
		<div>
			<div>
				<span className="tag">
					{// @ts-ignore
						Liferay.Language.get('portlet-namespace')}:
				</span>
				<span className="value">{liferayParams.portletNamespace}</span>
			</div>
			<div>
				<span className="tag">
					{// @ts-ignore
						Liferay.Language.get('context-path')}:
				</span>
				<span className="value">{liferayParams.contextPath}</span>
			</div>
			<div>
				<span className="tag">
					{// @ts-ignore
						Liferay.Language.get('portlet-element-id')}:
				</span>
				<span className="value">{liferayParams.portletElementId}</span>
			</div>
			<div>
				<span className="tag">
					{// @ts-ignore
						Liferay.Language.get('configuration')}:
				</span>
				<span className="value pre">{JSON.stringify(liferayParams.configuration, null, 2)}</span>
			</div>
		</div>
	);
}

export default AppComponent;
