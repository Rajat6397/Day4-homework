import "./App.css";
import Profile from "./Components/Profile/Profile";
import Work from "./Components/Work/Work";
import Skill from "./Components/Skill/Skill";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Profile />
      <Work />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
