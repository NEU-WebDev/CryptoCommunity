import logo from './logo.svg';
import './App.css';
import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Route} from "react-router-dom";
import ExchangeRateScreen from "./components/exchange-rates-screen";

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <Route path="/" exact={true}>
            <HomeScreen/>
          </Route>
          <Route path={["/search", "/search/:title"]} exact={true}>
            <SearchScreen/>
          </Route>
          <Route path={["/details/:coinId", "/details/:coinId/:currencyId"]} exact={true}>
            <DetailsScreen/>
          </Route>
          <Route path="/exchangerate/:coinId/:currencyId" exact={true}>
            <ExchangeRateScreen/>
          </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
