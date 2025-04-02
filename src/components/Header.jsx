const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>My Movie Watchlist</h1>
      </div>
      <nav>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
        <label htmlFor="menu-toggle" className="close-x">X</label>
        <ul>
          <li><a href="/">Search</a></li>
          <li><a href="/watchlist">Watchlist</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;