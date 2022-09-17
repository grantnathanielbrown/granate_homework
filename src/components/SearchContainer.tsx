import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


export default function SearchContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    
    function submitSearch(): void {
        console.log(searchTerm);
        // setSearchTerm('');
    }
  return (
    <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} submitSearch={submitSearch}/>
        <SearchResults />
    </div>
  )
}
