import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/SignupPage">Signup</Link>
        </div>
        </nav>
    );
};
export default NavBar;