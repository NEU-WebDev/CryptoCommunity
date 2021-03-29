import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import movieService from "../services/coin-exchange-service"

const SearchScreen = () => {
  const {title} = useParams();
  const [results, setResults] = useState({rates: []})
  useEffect( () => {
    findPriceByCoin()
  },[])
  const findPriceByCoin = () => {
    movieService.findExchangeRateByCoin(title)
    .then((results) => {
      setResults(results)
    })
  }

  return(
      <div>
        <h2>Search Screen</h2>
        <input placeholder={title} className="form-control"/>
            <button className="btn btn-primary">
              Search
            </button>
        <ul className="list-group">
          {
            results.rates.map((coinRate) =>{
              return(
                <li className="list-group-item">
                  <Link to={`/details/${title}/${coinRate.asset_id_quote}`}>
                    1 Bitcoin is Worth: {coinRate.rate} {coinRate.asset_id_quote}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
  )
}

export default SearchScreen;