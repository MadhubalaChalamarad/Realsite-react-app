import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profie";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ForgotPassword from "./pages/forgotPassword";
import Offers from "./pages/offers";
function App() {
  return (
    <div className="text-2xl bg-red-400">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
