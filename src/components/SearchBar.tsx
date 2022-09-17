import React from 'react';

interface SearchBarProps {
    setSearchTerm: (searchTerm: string) => void;
    submitSearch: () => void;
    searchTerm: string;
}

export default function SearchBar(props: SearchBarProps) {


    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.setSearchTerm(event.target.value);
    }

  return (
    <div>
      {/* Not doing extra input validation because restaurants can have weird names, and event.target.value will always be a string */}
        <input className="border-2" type="text" value={props.searchTerm} onChange={handleChange} />
        <button className="border-2 border-violet-400" type="submit" onClick={props.submitSearch}>Search</button>
    </div>
  )
}
