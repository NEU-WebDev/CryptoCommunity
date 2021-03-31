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
    movieService.findDetailedExchangeData(coinId)
    .then((results) => {
      setResults(results)
      console.log(results)
    }, [])
  }
  return(
      <div>
        <button onClick={()=>{history.goBack()}}>Go Back</button>
        <br/>
        <p>
         {results.asset_id}
         <br/>
         {results.name}
          <br/>
         {results.date_start}
          <br/>
        {results.date_end}
          <br/>
        {results.volume_1hrs_usd}
          <br/>
        {results.volume_1day_usd}
          <br/>
        {results.price_usd}
          <br/>
        {results.id_icon}
        </p>
      </div>
  )
}

export default DetailsScreen;