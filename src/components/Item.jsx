const Item = ({item}) => {
  return (
    <div>
      <div key={item.id} className="flex p-3 mt-14 shadow-md rounded-md">
        <div className="w-24 h-24 rounded-md">
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt="" className="max-w-full h-auto rounded-md"
          />
        </div>
        <div className="ml-14 ">
          <div className="text-xl font-bold">{item.name}</div>
          <div className="font-bold mt-2">
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item