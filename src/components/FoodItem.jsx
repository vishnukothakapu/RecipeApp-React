
const FoodItem = ({food,setFoodId}) => {
  return (
    <div className="w-80 rounded-lg shadow-lg m-5 overflow-hidden font-mono">
      <img
        src={food.image}
        key={food.id}
        alt={food.title}
        className="w-full h-auto"
      />
      <div className="text-center font-sans mt-3">
        <p className="text-lg font-semibold text-[#393e46]">{food.title}</p>
      </div>
      <div className="mt-5 mb-5 flex justify-around text-center">
        <button className="bg-[#29bb89] border border-none p-2 text-md font-medium hover:bg-[#4ac399] rounded-md text-white cursor-pointer"
         onClick={()=> {console.log(food.id)
          setFoodId(food.id)
         }}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem