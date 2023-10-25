import "./HeaderStyling.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          className="search-input"
        />
      </div>
      <h2 className="header-title">Explore the World with GlobeHackers</h2>
      <p className="header-subtitle">
        Discover new places, cultures, and adventures.
      </p>
    </div>
  );
}

