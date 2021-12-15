import { useEffect } from "react";

import "./App.css";

import MainPage from "./Container/MainPage";
import AOS from "aos";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AirDropPage from "./Pages/AirdropPage";
import LandingPage from "./Pages/LandingPage";
import PrivateSellPage from "./Pages/PrivateSellPage";
import PublicSellPage from "./Pages/PublicSellPage";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Switch>
        <MainPage>
          <Route exact path="/" component={HomePage} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/airdrop" component={AirDropPage} />
          <Route path="/private-sell" component={PrivateSellPage} />
          <Route path="/public-sell" component={PublicSellPage} />
        </MainPage>
      </Switch>
    </div>
  );
}

export default App;
