import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-u7bdm0gzwigv74x3.us.auth0.com';
const clientId = '4VirhpQDSEbIUrIuyavNyoizNfV1O06w';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
