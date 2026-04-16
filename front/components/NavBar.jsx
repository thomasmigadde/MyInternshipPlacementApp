import { useNavigation } from '/PAGES/usenavigation.jsx';

function NavBar() {
  const { goToHome, goToSignup , goToDisplay} = useNavigation();

  return (
    <nav>
      <button 
                type="button"
                className="loginButtonClass" 
                onClick={goToDisplay}
              >
                Login
              </button>
    </nav>
  );
}

export default NavBar;