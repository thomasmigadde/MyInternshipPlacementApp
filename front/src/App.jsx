
import Home from "../PAGES/home.jsx"
import "/STYLES/loginPage.css"
import "/STYLES/SignupPage.css"
import SignupPage from "/PAGES/signuppage.jsx"
import SignupPage2 from "/PAGES/signuppage2.jsx"
import SignupPage3 from "/PAGES/signuppage3.jsx"
import SignupPage4 from "/PAGES/signuppage4.jsx"
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar';
import "/STYLES/SignupPage.css"
import "/STYLES/loginPage.css"

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
              <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>  
    </div>
  
  );
};

export default App;
