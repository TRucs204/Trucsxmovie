import { useState } from "react";
import { themeContext } from "../App";
import { useContext } from "react";
function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);
  function setMenu() {
    setOpenMenu(!openMenu);
  }

  // input value
  function onchangeSearch(e) {
    props.search(e);
  }
  return (
    <>
      <header className="container-fluid row">
        <div className="header-left col-sm-9 ">
          <nav className="row">
            <h1 className="col-sm-3">
              TRUCSX <span>MOVIE</span>
            </h1>
            <i
              onClick={setMenu}
              className={`fa-solid  ${openMenu ? "fa-xmark" : "fa-bars"}`}
            ></i>
            <ul className={`navBar col-sm-9 ${openMenu ? "open" : ""}`}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#hit">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right col-sm-3">
          <div className="input-group mb-3">
            <input //search
              onChange={onchangeSearch}
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              onClick={props.Search}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
