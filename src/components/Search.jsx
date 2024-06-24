import { useEffect, useState } from 'react';
import { RiRestaurantLine } from "@remixicon/react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a8bc44dce50642c1b435e2d3ce936755";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function fetchApi() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchApi();
  }, [query, setFoodData]);

  return (
    <>
      <div className="p-8 flex items-center shadow-lg justify-between">
        <div className="flex items-center gap-2">
          <RiRestaurantLine className="text-[#393e46]" />
          <h1 className="text-3xl font-mono font-bold text-[#393e46]">
            FoodApp
          </h1>
        </div>
        <div className="w-80">
          <input
            type="text"
            className="outline-none border border-gray-300  pt-3 pb-3 pr-5 pl-5 w-full text-slate-700 hover:border-[#29bb89] active:border-[#29bb89] rounded-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter recipe name..."
          />
        </div>
      </div>
    </>
  );
};

export default Search;
