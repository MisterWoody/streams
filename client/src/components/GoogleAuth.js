import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '167103438212-bobl72astgh0il3mpokqrtp81ui523i0.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    
    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;