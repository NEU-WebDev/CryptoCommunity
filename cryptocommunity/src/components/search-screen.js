import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import movieService from "../services/coin-exchange-service"

const SearchScreen = (
    {
        to,
        searchTerm={title: "Enter Coin Code"}
    }
) => {
  const {title} = useParams();
  const [results, setResults] = useState({rates: []})
  const [searchTitle, setSearchTitle] = useState(title)
  const [cachedItem, setCachedItem] = useState(searchTerm)
  useEffect( () => {
    findPriceByCoin()
  },[searchTitle])
  const findPriceByCoin = () => {
    movieService.findExchangeRateByCoin(title)
    .then((results) => {
      setResults(results)
    })
  }

  return(
      <div>
        <h2>Search Screen</h2>
        <input
            onChange={(e) => setCachedItem({
              ...cachedItem,
              title: e.target.value
            })}
            placeholder={cachedItem.title}
            className="form-control"/>
            <Link
              onClick={() => (setSearchTitle(cachedItem.title))}
              className="btn btn-primary"
              to={`/search/${cachedItem.title}`}>
              Search
            </Link>
        <ul className="list-group">
          {
            results.rates.map((coinRate) =>{
              return(
                <li className="list-group-item">
                  <Link to={`/details/${title}/`}>
                    1 {results.asset_id_base} is Worth: {coinRate.rate} {coinRate.asset_id_quote}
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