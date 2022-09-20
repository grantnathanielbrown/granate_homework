import { CircularProgress, ToggleButton } from '@mui/material';
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
  if (props.searchResults.length) {
    searchResults = 
      <>
      <span className="mr-8">Restaurant Name</span><span className="mr-8">Cuisine</span><span>Rating</span>
        <FilterDropdown filterableCuisines={props.filterableCuisines} toggleFilter={props.toggleFilter} />
        {/* <ToggleButtonGroup
        
        >
          <ToggleButton>Sort by Rating</ToggleButton>
          <ToggleButton>Sort by Rating</ToggleButton>
        </ToggleButtonGroup> */}
        <ul>
          {props.searchResults.filter(hideableRestaurant => hideableRestaurant.displayed).map((hideableRestaurant: hideableRestaurant) => {
            return (
              <RestaurantListing hideableRestaurant={hideableRestaurant} key={hideableRestaurant.id} />
            )
          }) }
        </ul>
      </>
  } 
  
  return (
    <div className="bg-slate-100 min-h-80 rounded-xl">
      {props.loading ? <CircularProgress /> : searchResults}
    </div>
  )
}
