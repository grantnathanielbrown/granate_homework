import { Button, CircularProgress, Stack } from '@mui/material';
import React from 'react';
import CuisineFilters from './CuisineFilters';
import RestaurantListing from './RestaurantListing';
import { filterableCuisine, hideableRestaurant } from './SearchContainer';
interface SearchResultsContainerProps {
    searchResults: hideableRestaurant[];
    filterableCuisines: filterableCuisine[];
    sort: string;
    loading: boolean;
    toggleFilter: (event: React.ChangeEvent<HTMLInputElement>, cuisineType: string, index: number) => void;
    toggleSort: (sortPreference: string) => void;
}



export default function SearchResultsContainer(props: SearchResultsContainerProps) {

  let searchResults;
  if (props.searchResults.length) {
    searchResults = 
      <>
        <CuisineFilters filterableCuisines={props.filterableCuisines} toggleFilter={props.toggleFilter} />
        <Stack spacing={2} direction="row">
          <Button onClick={() => props.toggleSort("Relevance")} variant={props.sort === "Relevance" ? "contained": "outlined"}>Sort by Relevance</Button>
          <Button onClick={() => props.toggleSort("Rating")} variant={props.sort === "Rating" ? "contained": "outlined"}>Sort by Rating</Button>
        </Stack>
      <span className="font-bold mr-8">Restaurant Name</span><span className="font-bold mr-8">Cuisine</span><span className="font-bold ">Rating</span>
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
    <div className={`bg-slate-100 min-h-80 rounded-xl p-4 ${props.loading ? "flex justify-center items-center" : ""}`}>
      {props.loading ? <CircularProgress /> : searchResults}
    </div>
  )
}
