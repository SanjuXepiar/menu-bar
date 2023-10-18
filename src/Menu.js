const Menu = ({ items }) => {
  return (
    <div className="main">
      {items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <div className="dishes" key={id}>
            <img key={id} className="itemImage" src={img} alt={title} />
            <div className="footer">
              <div className="menuInfo">
                <h4 style={{ margin: "0" }}>{title}</h4>
                <h4 style={{ margin: "0" }}>${price}</h4>
              </div>
              <p style={{ margin: ".5rem  " }}>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
