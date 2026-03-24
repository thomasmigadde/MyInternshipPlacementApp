import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/SignupPage">Signup</Link>
          <Link to="/SignupPage2">Signup</Link>
          <Link to="/SignupPage3">Signup</Link>
          <Link to="/SignupPage4">Signup</Link>
        </div>
        </nav>
    );
};
export default NavBar;