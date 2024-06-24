import FoodItem from "./FoodItem";

const FoodList = ({foodData,setFoodId}) => {
  return (
    <div>
      {foodData.map((food) => (
        <div key={food.id}>
          <FoodItem key={food.id} food={food} setFoodId={setFoodId}  />
        </div>
      ))}
    </div>
  );
}

export default FoodList
