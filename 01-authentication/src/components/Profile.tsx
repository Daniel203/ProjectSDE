import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
    const { user, isAuthenticated } = useAuth0();

    if (!user) {
      return null;
    }

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
