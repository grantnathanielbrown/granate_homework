import { CircularProgress } from '@mui/material';
import React from 'react';
import RestaurantListing from './RestaurantListing';
import { Restaurant } from './SearchContainer';
interface SearchResultsContainerProps {
    searchResults: Restaurant[];
    loading: boolean;
}


export default function SearchResultsContainer(props: SearchResultsContainerProps) {
  let searchResults;
  props.searchResults.length ? searchResults = <ul>
    {props.searchResults.map((restaurant: Restaurant) => {
      return (
        <RestaurantListing restaurant={restaurant} key={restaurant.id}  />
      )
    }) }
  </ul>
  : searchResults = "No results found.";
  return (
    <div>
      {props.loading ? <CircularProgress /> : searchResults}
    </div>
  )
}
