import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import movieService from "../services/coin-exchange-service"
import "../styles/details-page.css"

const ExchangeRateScreen = () => {
  const date = new Date;
  const {coinId, currencyId} = useParams();
  const history = useHistory();
  const isCrypto = "";
  useEffect(() => {
    findExchanceData()
  }, [coinId, currencyId])
  const [results, setResults] = useState({searchResults: []})
  const [compareResults, setCompareResults] = useState({compareSearchResults: []})

  const findExchanceData = () => {
    movieService.findDetailedExchangeData(coinId, currencyId)
    .then((Results) => {
      setResults(Results);
    }, [])
  }

  const isCryptoText = (cryptoKey) => {
    if(cryptoKey === 1){
      return " Crypto";
    } else {
      return " Traditional";
    }
  }

  return(
      <div>
        <div className="cryptocommunity-navbar-primary">
          <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/search" className="navbar-brand">Search</Link>
            <Link to="/details" className="navbar-brand">Details</Link>
            <Link to="/Sign-In" className="navbar-brand">Sign-In</Link>
            <Link to="/register" className="navbar-brand">Sign-Up</Link>
            <Link to="/privacy" className="navbar-brand">Privacy Policy</Link>
          </nav>
        </div>
        <div className="details-welcome">
          <h1>Current Exchange Rates Page</h1>
          <h6>Here are the detailed exchange rates of the currencies you requested</h6>
        </div>
        <i className="fas fa-cog" onClick={()=>{history.goBack()}}>Back</i>
        <br/>
        <ul className="list-group">
          <li className="list-group-item">
            Currency A: <b>{results.asset_id_base}</b>
          </li>
          <li className="list-group-item">
            Currency B: <b>{results.asset_id_quote}</b>
          </li>
          <li className="list-group-item">
            Current Exchange Rate: 1 {results.asset_id_base} is currenlty worth <b>{results.rate}</b> {results.asset_id_quote}s
          </li>
          <li className="list-group-item">
            Valid On: <b>{results.time}</b>
          </li>
        </ul>
      </div>
  )
}

export default ExchangeRateScreen;