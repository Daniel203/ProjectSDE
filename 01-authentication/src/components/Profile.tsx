import { useAuth0 } from '@auth0/auth0-react';

// The Profile component renders the user's profile information.
// The useAuth0 hook provides the user object that contains the user's profile information.
// The user object is only available if the user is authenticated.
// The user object contains the following properties:
// - name: The user's name
// - nickname: The user's nickname
// - picture: The URL of the user's profile picture
// - email: The user's email address
// - email_verified: Whether the user's email address has been verified
// - updated_at: The last time the user's profile was updated
// - sub: The user's unique identifier
// ...
export default function Profile() {

    // The useAuth0 hook provides the user object that contains the user's profile information.
    const { user, isAuthenticated } = useAuth0();

    // The profile is only rendered if the user is authenticated.
    if (!user) {
      return null;
    }

    // The profile is rendered as an article element. It contains the user's profile picture
    // and the user's profile information.
    return (
        <div>
            {isAuthenticated ? (
                <article className="column">
                    {user?.picture && <img src={user.picture} alt={user?.name} />}
                    <h2>{user?.name}</h2>
                    <ul>
                        {user
                            ? Object.keys(user).map((objKey, i) => (
                                <li key={i}>
                                    {objKey}: {user[objKey]}
                                </li>
                            ))
                            : <li>No user data available</li>
                        }
                    </ul>
                </article>
            ) : (
                <div> </div>
            )}
        </div>
    );
}
