
import Home from "../PAGES/home.jsx"
import "../STYLES/loginPage.css"
import "../STYLES/SignupPage.css"
import SignupPage from "../PAGES/signuppage.jsx"
import SignupPage2 from "../PAGES/signuppage2.jsx"
import SignupPage3 from "../PAGES/signuppage3.jsx"
import SignupPage4 from "../PAGES/signuppage4.jsx"
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar';
import "../STYLES/SignupPage.css"

function App() {
  return(
    <div>
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SignupPage" element={<SignupPage />} />
              <Route path="/SignupPage2" element={<SignupPage2 />} />
              <Route path="/SignupPage3" element={<SignupPage3 />} />
              <Route path="/SignupPage4" element={<SignupPage4 />} />
        </Routes>
      </main>  
    </div>
  
  );
};

export default App;
