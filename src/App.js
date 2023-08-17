import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";
function App() {
  const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState([]);

  const filteredItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  //    ....
  return (
    <div className="contents">
      {/* .. */}

      <div className="title">
        <h2>Menu Bar</h2>
      </div>

      {/* ... */}

      <div className="mainBody">
        <Categories filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </div>

      {/* ... */}
    </div>
  );
}

export default App;
