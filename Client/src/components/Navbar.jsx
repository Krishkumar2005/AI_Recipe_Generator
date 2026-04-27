// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <span className="logo-icon"></span>
//           AI Recipe Generator
//         </Link>
//         <div className="navbar-links">
//           <Link to="/" className={`nav-link${location.pathname === "/" ? "active" : ""}`}>
//             Home
//           </Link>
//           <Link to="/saved" className={`nav-link${location.pathname === "/saved" ? "active" : ""}`}>
//             Saved Recipes
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#2C2C2A"/>
              <path d="M7 19 C7 19 9.5 11 14 10 C18.5 9 20 14 20 14"
                stroke="#D4C9B0" strokeWidth="1.4" strokeLinecap="round"/>
              <circle cx="14" cy="8.5" r="1.8" fill="#D4C9B0"/>
              <path d="M7 19.5 H21" stroke="#7A6E5F" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-name">AI Recipe</span>
            <span className="logo-tagline">Intelligent Kitchen</span>
          </span>
        </Link>

        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <span className="nav-divider" />
          <Link
            to="/saved"
            className={`nav-link ${location.pathname === "/saved" ? "active" : ""}`}
          >
            Saved Recipes
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;