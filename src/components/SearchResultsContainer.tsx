import { CircularProgress } from '@mui/material';
import React from 'react';
import FilterDropdown from './FilterDropdown';
import RestaurantListing from './RestaurantListing';
import { Restaurant, filterableCuisine } from './SearchContainer';
interface SearchResultsContainerProps {
    searchResults: Restaurant[];
    filterableCuisines: filterableCuisine[];
    loading: boolean;
    toggleFilter: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}



export default function SearchResultsContainer(props: SearchResultsContainerProps) {
  let searchResults;
  props.searchResults.length ? searchResults = 
    <div>
      <FilterDropdown filterableCuisines={props.filterableCuisines} toggleFilter={props.toggleFilter} />
      
      <ul>
        {props.searchResults.map((restaurant: Restaurant) => {
          return (
            <RestaurantListing restaurant={restaurant} key={restaurant.id}  />
          )
        }) }
      </ul>
    </div>
  : searchResults = "No results found.";
  return (
    <div>
      {props.loading ? <CircularProgress /> : searchResults}
    </div>
  )
}
