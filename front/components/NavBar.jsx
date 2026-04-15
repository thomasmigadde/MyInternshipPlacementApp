import { useNavigation } from '/PAGES/usenavigation.jsx';

function NavBar() {
  const { goToHome, goToSignup } = useNavigation();

  return (
    <nav>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToSignup}>Signup</button>
    </nav>
  );
}

export default NavBar;