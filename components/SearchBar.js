const { useState, useEffect } = require("react");

const SearchBar = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const onChange = async (term) => {
    if (term === "") {
      setResults([]);
      return;
    }
    const res = await fetch(`/api/findUsers?searchTerm=${term}`);
    const json = await res.json();
    setResults(json.result);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => onChange(searchTerm), 300);
    return () => clearInterval(timeoutId);
  }, [searchTerm]);

  return (
    <div className="flex flex-col justify-start relative">
      <label htmlFor={title} className="mb-2 dark:text-white">
        {title}
      </label>
      <input
        name={title}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        value={searchTerm}
        className="shadow rounded-md px-2 py-1 mb-2"
      />
      {results.length > 0 && (
        <ul className="absolute top-full left-0 shadow rounded-md px-2 py-1 bg-white overflow-y-scroll max-h-52 w-full">
          {results.map(({ id, first_name, last_name }) => (
            <li
              key={id}
              className="px-2 py-1 hover:bg-blue-400 rounded-md cursor-pointer"
            >{`${first_name} ${last_name}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
