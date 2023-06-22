import "./App.css";

// React Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./views/Home/HomePage";
import AboutPage from "./views/About/AboutPage";
import ContactPage from "./views/Contact/ContactPage";
import ShopPage from "./views/Shop/ShopPage";
import PlayerDetailPage from "./views/PlayerDetail/PlayerDetailPage";
import PlayerPositionPage from "./views/PlayerPosition/PlayerPositionPage";

// CONTEXT
import { PlayersProvider } from "./context/PlayersContext";

// COMPONENTS
import Header from "./components/Header/Header";
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";

const App = () => {
  return (
    <Router>
      <PlayersProvider>
        <div className="App">
          <Header />
          <ResponsiveNavigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/details/:id" element={<PlayerDetailPage />} />
            <Route
              path="/player-position/:position"
              element={<PlayerPositionPage />}
            />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </div>
      </PlayersProvider>
    </Router>
  );
};

export default App;
