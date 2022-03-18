import "./Styles/NavBar.scss";

const NavBar = ({ hide, otherDetailsMenu, setOtherDetailsMenu }) => {
  // navigation bar click handler
  let clickHandler = () => {
    if (hide) {
      otherDetailsMenu ? setOtherDetailsMenu(false) : setOtherDetailsMenu(true);
    }
  };

  return (
    <nav>
      <h2 className={`app-name ${hide ? "animate-left" : ""}`}>
        weather.today
      </h2>
      <button
        className={`menu-btn ${hide ? "animate-right" : ""}`}
        onClick={clickHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBar;
