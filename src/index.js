import React from 'react';
import ReactDOM from 'react-dom';
import 'react-provider';
import AppComponent from './AppComponent';
export default function main(liferayParams) {
    const rootElement = React.createElement(AppComponent, { liferayParams: liferayParams });
    ReactDOM.render(rootElement, document.getElementById(liferayParams.portletElementId));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ2pDLDJCQUEyQjtBQUUzQixPQUFPLFlBQTZCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsTUFBTSxDQUFDLE9BQU8sVUFBVSxJQUFJLENBQUMsYUFBNEI7SUFDdkQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN2RixRQUFRLENBQUMsTUFBTSxDQUNmLFdBQVcsRUFDWCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN2RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIGltcG9ydCAncmVhY3QtcHJvdmlkZXInO1xuXG5pbXBvcnQgQXBwQ29tcG9uZW50LCB7TGlmZXJheVBhcmFtc30gZnJvbSAnLi9BcHBDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGxpZmVyYXlQYXJhbXM6IExpZmVyYXlQYXJhbXMpIHtcblx0IGNvbnN0IHJvb3RFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChBcHBDb21wb25lbnQseyBsaWZlcmF5UGFyYW1zOiBsaWZlcmF5UGFyYW1zIH0pO1xuXHQgUmVhY3RET00ucmVuZGVyKFxuXHRcdHJvb3RFbGVtZW50LFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpZmVyYXlQYXJhbXMucG9ydGxldEVsZW1lbnRJZClcblx0KTtcbn1cbiJdfQ==
