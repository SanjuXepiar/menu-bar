const Categories = ({ filteredItems }) => {
  return (
    <div className="menuButtons">
      <button className="btn" onClick={() => filteredItems("all")}>
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
      </button>
    </div>
  );
};

export default Categories;
