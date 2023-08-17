const Menu = ({ items }) => {
  return (
    <div className="main">
      {items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <div className="dishes">
            <img key={id} className="itemImage" src={img} alt={title} />
            <div className="footer">
              <div className="menuTitle">
                <h4>{title}</h4>
                <h4>${price}</h4>
              </div>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
