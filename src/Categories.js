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
