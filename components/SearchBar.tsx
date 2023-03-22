import React from "react";

// Define the type for the SearchBar props
type SearchBarProps = {
  onResults: (matches: any[]) => void;
  setLoading: (loading: boolean) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onResults, setLoading }) => {
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const response = await fetch("/api/get_courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: searchInputRef.current?.value,
        searchResults: 20,
      }),
    });

    const jsonResponse = await response.json();

    setLoading(false);

    onResults(jsonResponse.matches);
  };

  return (
    <div className="mt-2.5 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 mx-auto sm:mx-4">
        <form className="flex items-center" onSubmit={onSubmit}>
          <input
            ref={searchInputRef}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow"
            placeholder="Search for courses..."
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-red-800 text-white font-semibold rounded-lg focus:outline-none active:bg-red-900 active:shadow-inner"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
