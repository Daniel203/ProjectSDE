import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';


// The App component renders the LoginButton, LogoutButton and Profile components
// depending on the user's authentication state.
// The LoginButton component renders a button that redirects the user to the Auth0 login page.
// The LogoutButton component renders a button that logs the user out of the application.
// The Profile component renders the user's profile information
function App() {
  return (
    <main className="column">
        <h1>Auth0 Login</h1>
        <LoginButton />
        <LogoutButton />
        <Profile />
    </main>
  );
}

export default App;
