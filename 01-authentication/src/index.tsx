import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


// This is the entry point of the application. It renders the App component
// into the root element of the HTML document.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// The domain and clientId parameters are used to initialize the Auth0 SDK.
// This values are stored in the .env file 
const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

// The Auth0Provider component wraps the App component and provides the
// Auth0Context to all its children. The Auth0Context is used by the
// useAuth0 hook to retrieve the user's authentication state.
// The Auth0Provider component also takes care of initializing the Auth0 SDK
// with the correct parameters.
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode >
);
