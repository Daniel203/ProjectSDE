import { useAuth0 } from '@auth0/auth0-react';

// The LogoutButton component renders a button that redirects the user to the Auth0 logout page.
export default function LogoutButton() {

    // The useAuth0 hook provides the isAuthenticated and logout functions
    // that are used to check the user's authentication state and to redirect the user
    // to the Auth0 logout page, respectively.
    const { logout, isAuthenticated } = useAuth0();

    // The logout button is only rendered if the user is authenticated.
    // When the user clicks the button, the logout function is called.
    return (
        <div>
            {isAuthenticated ? (
                <button onClick={() => logout()}>
                    Sign Out
                </button>
            ) : (
                <div> </div>
            )}
        </div>
    );
}

