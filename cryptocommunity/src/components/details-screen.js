import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import movieService from "../services/coin-exchange-service"

const DetailsScreen = () => {
  const {coinId, currency}= useParams();
  const [results, setResults] = useState({searchResults: []})
  const history = useHistory();
  useEffect(() => {
    findExchanceData()
  }, [])
  const findExchanceData = () => {
    movieService.findDetailedExchangeData(coinId, currency)
    .then((results) => {
      setResults(results)
    }, [])
  }
  return(
      <div>
        <button onClick={()=>{history.goBack()}}>Go Back</button>
        <br/>
         1 {results.asset_id_base} is Worth: {results.rate} {results.asset_id_quote}
      </div>
  )
}

export default DetailsScreen;