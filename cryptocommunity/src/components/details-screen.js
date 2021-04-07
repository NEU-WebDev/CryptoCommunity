import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import movieService from "../services/coin-exchange-service"
import "../styles/details-page.css"

const DetailsScreen = () => {
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
    movieService.findDetailedCoinData(coinId)
    .then((Results) => {
      setResults(Results[0]);
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
            <h1>Detailed Currency Page</h1>
            <h6>The information on this page is current as of {date.toDateString()} {date.toTimeString()}</h6>
          </div>
        <i className="fas fa-cog" onClick={()=>{history.goBack()}}>Back</i>
        <br/>
        <ul className="list-group">
          <li className="list-group-item">
            Asset ID: <b>{results.asset_id}</b>
          </li>
          <li className="list-group-item">
            Trading Name: <b>{results.name}</b>
          </li>
          <li className="list-group-item">
            Currency Type:
              <b>
                {isCryptoText(results.type_is_crypto)}
              </b>
          </li>
          <li className="list-group-item">
            Introduced On: <b>{results.data_start}</b>
          </li>
          <li className="list-group-item">
            Last Active On: <b>{results.data_end}</b>
          </li>
          <li className="list-group-item">
            1 Day Volume (USD): <b>{results.volume_1day_usd}</b>
          </li>
        </ul>
      </div>
  )
}

export default DetailsScreen;