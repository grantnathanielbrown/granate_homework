import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResultsContainer from './SearchResultsContainer';
import restaurants from '../restaurants.json';
import Fuse from 'fuse.js';

export interface hideableRestaurant {
    id: number;
    name: string;
    cuisineType: string;
    stars: number;
    imageUrl: string;
    displayed?: boolean;
}

export interface filterableCuisine {
  cuisineType: string;
  checked: boolean;
}


export default function SearchContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState<hideableRestaurant[]>([]);
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
          const hideableRestaurants = fuse.search(searchTerm).map( (result: Fuse.FuseResult<hideableRestaurant>) => {
            return {...result.item, displayed: true};
          });

          let cuisines: string[] = []; 
          hideableRestaurants.forEach((hideableRestaurant: hideableRestaurant) => {
            if (!cuisines.includes(hideableRestaurant.cuisineType)) {
              cuisines.push(hideableRestaurant.cuisineType);
            }
          })

          const uniqueFilterableCuisines = cuisines.map( (cuisine: string) => {
            return {
              cuisineType: cuisine,
              checked: true
            }
          })

          setLoading(false);
          setSearchResults(hideableRestaurants);
          setFilterableCuisines(uniqueFilterableCuisines);
        });

    }

    function toggleFilter(event: React.ChangeEvent<HTMLInputElement>, cuisineType: string, index: number): void {
      const cuisineClone = [...filterableCuisines];
      cuisineClone[index].checked = event.target.checked;
      setFilterableCuisines(cuisineClone);

      const searchResultsClone = [...searchResults];
      searchResultsClone.forEach((hideableRestaurant: hideableRestaurant) => {
        if (hideableRestaurant.cuisineType === cuisineType) {
          hideableRestaurant.displayed = event.target.checked;
        }
      });

    }


  return (
    <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} submitSearch={submitSearch}/>
        <SearchResultsContainer searchResults={searchResults} filterableCuisines={filterableCuisines} toggleFilter={toggleFilter} loading={loading} />
    </div>
  )
}
