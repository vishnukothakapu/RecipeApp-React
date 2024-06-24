import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { RiTimeLine,RiBowlLine } from "@remixicon/react";
const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = "a8bc44dce50642c1b435e2d3ce936755";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`)
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood()
  }, [foodId]);
  return (
    <div className="font-mono">
      <div className="max-w-[600px] my-5 mx-auto p-5 shadow-lg rounded-lg">
        <h1 className="font-bold text-2xl mb-3"> {food.title}</h1>
        <img
          src={food.image}
          alt=""
          className="rounded-lg mb-3 max-w-full h-auto "
        />
        <div className="mt-5 mb-5 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <strong>⏲️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span className="flex items-center gap-2">
            <strong>🍚 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥬 Vegetarian" : "🍗 Non-Vegetarian"}
            </strong>
          </span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          <span>
            <strong>🔥 Very Popular: {food.veryPopular ? "Yes" : "No"}</strong>
          </span>
        </div>
        <h2 className="text-2xl font-bold mt-5 ">Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2 className="font-bold text-2xl mt-5">Instructions</h2>
        <div className="font-mono p-5 rounded-md text-[#adaab0]">
          <ol className="list-decimal ml-0 ">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li className="my-0 mx-3" key={index}>
                  {step.step}
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails
