import Item from "./Item";

const ItemList = ({food,isLoading}) => {
  return (
    <div className="">
       {isLoading?(<p>Loading...</p>):(food.extendedIngredients.map((item) => (
           <Item item={item} />
        )))}
    </div>
  );
}

export default ItemList