import { CircularProgress } from '@mui/material';
import React from 'react';
import FilterDropdown from './FilterDropdown';
import RestaurantListing from './RestaurantListing';
import { filterableCuisine, hideableRestaurant } from './SearchContainer';
interface SearchResultsContainerProps {
    searchResults: hideableRestaurant[];
    filterableCuisines: filterableCuisine[];
    loading: boolean;
    toggleFilter: (event: React.ChangeEvent<HTMLInputElement>, cuisineType: string, index: number) => void;
}



export default function SearchResultsContainer(props: SearchResultsContainerProps) {

  let searchResults;
  props.searchResults.length ? searchResults = 
    <div>
      <FilterDropdown filterableCuisines={props.filterableCuisines} toggleFilter={props.toggleFilter} />
      
      <ul>
        {props.searchResults.filter(hideableRestaurant => hideableRestaurant.displayed).map((hideableRestaurant: hideableRestaurant) => {
          return (
            <RestaurantListing hideableRestaurant={hideableRestaurant} key={hideableRestaurant.id} />
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
