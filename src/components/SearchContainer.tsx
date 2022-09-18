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


export default function SearchContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState<Restaurant[]>([]);

    const options = {
        // isCaseSensitive: false,
        includeScore: true,
        threshold: 0.4,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
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
          const results = fuse.search(searchTerm).map( (restaurant: Fuse.FuseResult<Restaurant>) => {
              return restaurant.item;
          });
          setLoading(false);
          setSearchResults(results);
        });

    }
  return (
    <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} submitSearch={submitSearch}/>
        <SearchResultsContainer searchResults={searchResults} loading={loading} />
    </div>
  )
}
