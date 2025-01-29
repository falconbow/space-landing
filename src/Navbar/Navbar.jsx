import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar_wrapper">
        <div className="navbar_logo"></div>
        <div className="navbar_content">
          <div className="navbar_content__link">Home</div>
          <div className="navbar_content__link">Products</div>
          <div className="navbar_content__cart"></div>
          <div className="navbar_content__hamburger">
            <input
              type="checkbox"
              className="navbar_content__hamburger-checkbox"
            />
            <div className="navbar_content__hamburger-icon"></div>
            <div className="menu">
              <div className="menu_item">Home</div>
              <div className="menu_item">Products</div>
              <div className="menu_item">Cart</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
