import { useAuth0 } from '@auth0/auth0-react';

// The LoginButton component renders a button that redirects the user to the Auth0 login page.
export default function LoginButton() {

    // The useAuth0 hook provides the isAuthenticated and loginWithRedirect functions
    // that are used to check the user's authentication state and to redirect the user
    // to the Auth0 login page, respectively.
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    // The login button is only rendered if the user is not authenticated.
    // When the user clicks the button, the loginWithRedirect function is called.
    return (
        <div>
            {!isAuthenticated ? (
                <button onClick={() => loginWithRedirect()}>
                    Sign In
                </button>
            ) : (
                <div> </div>
            )}
        </div>
    );
}
