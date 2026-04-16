import { useContext , createContext} from "react";
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const navigate = useNavigate();
    const goToHome = () => navigate("/");
    const goToSignup = () => navigate("/SignupPage");
    const goToSignup2 = () => navigate("/SignupPage2");
    const goToSignup3 = () => navigate("/SignupPage3");
    const goToSignup4 = () => navigate("/SignupPage4");
    const goToDisplay = () => navigate("/DisplayPage");


    return (
        <NavigationContext.Provider value={{ goToHome, goToSignup, goToSignup2, goToSignup3, goToSignup4, goToDisplay }}>
            {children}
        </NavigationContext.Provider>
    );
}
export function useNavigation() { 
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
}
