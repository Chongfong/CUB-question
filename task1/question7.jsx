/** Please write the sample code to debounce handleOnChange (Do not use
any 3th party libs other than react) **/

// a debounce feature on user input
import { useState, useRef } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const debounceTimeout = useRef(null);

  const handleOnChange = (event) => {
    const value = event.target.value;

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      // make ajax call
      setQuery(value);
    }, 1000);
  };

  return (
    <div>
      <p>{query}</p>
      <input type="search" name="p" onChange={handleOnChange} />;
    </div>
  );
};
