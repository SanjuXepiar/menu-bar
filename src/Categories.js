import "./App.css";
const Categories = ({ filteredItems, categories, selectedCategory }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          // Dynamic buttons....
          <button
            key={index}
            className={`categoryButtons ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => filteredItems(category)}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
{
  /* ...manual buttons  */
}
{
  /* <button className="btn" onClick={() => filteredItems("all")}>
  All
  </button>
  <button className="btn" onClick={() => filteredItems("breakfast")}>
  Breakfast
</button>
<button className="btn" onClick={() => filteredItems("lunch")}>
  Lunch
  </button>
  <button className="btn" onClick={() => filteredItems("shakes")}>
  Shakes
</button> */
}
