import React from 'react';
import { Restaurant } from './SearchContainer';
interface SearchResultsContainerProps {
    searchResults: Restaurant[];
}


export default function SearchResultsContainer(props: SearchResultsContainerProps) {
  let searchResults;
  props.searchResults.length ? searchResults = <ul>
    {props.searchResults.map((restaurant: Restaurant) => {
      return (
        <li key={restaurant.id} className="flex flex-row">
          {/* <img src="dinosaur.jpg" alt="Dinosaur" /> */}
          <span>{restaurant.name}</span>
          <span>{restaurant.cuisineType}</span>
          <span>{restaurant.stars}</span>
        </li>
      )
    }) }
  </ul>
  : searchResults = "No results found.";
  return (
    <div>
      {searchResults}
    </div>
  )
}
