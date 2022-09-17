import React,{ useState } from 'react';

export default function SearchBar() {
const [term, setTerm] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTerm(event.target.value);
    }

  return (
    <div>
      {/* Not doing extra input validation because restaurants can have weird names, and event.target.value will always be a string */}
        <input className="border-2" type="text" value={term} onChange={handleChange} />
    </div>
  )
}
