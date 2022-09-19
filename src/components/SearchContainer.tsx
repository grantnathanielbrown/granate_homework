import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResultsContainer from './SearchResultsContainer';
import restaurants from '../restaurants.json';
import Fuse from 'fuse.js';

export interface Restaurant {
    id: number;
    name: string;
    cuisineType: string;
    stars: number;
}

export interface filterableCuisine {
  cuisineType: string;
  checked: boolean;
}


export default function SearchContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState<Restaurant[]>([]);
    const [filterableCuisines, setFilterableCuisines] = useState<filterableCuisine[]>([]);

    const options = {
        includeScore: true,
        threshold: 0.4,
        keys: [
          "name",
          "cuisineType"
        ]
      };

      const fuse = new Fuse(restaurants, options);

    function submitSearch(): void {
        setLoading(true);
        const mockServer = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Success!");
          }, 1000);
        });
        
        mockServer.then(() => {
          console.log(fuse.search(searchTerm));
          const restaurants = fuse.search(searchTerm).map( (result: Fuse.FuseResult<Restaurant>) => {
            return result.item;
          });
          const filterableCuisines = restaurants.map((restaurant: Restaurant) => {
            return {
              cuisineType: restaurant.cuisineType,
              checked: true
            };
          });

          setLoading(false);
          setSearchResults(restaurants);
          setFilterableCuisines(filterableCuisines);
        });

    }

    function toggleFilter(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
      const clone = [...filterableCuisines];
      clone[index].checked = event.target.checked;
      console.log(clone);
      setFilterableCuisines(clone);
    }


  return (
    <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} submitSearch={submitSearch}/>
        <SearchResultsContainer searchResults={searchResults} filterableCuisines={filterableCuisines} toggleFilter={toggleFilter} loading={loading} />
    </div>
  )
}
