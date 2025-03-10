import { useState } from "react";
import { themeContext } from "../App";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CheckContext } from "./checkUser";
import { getAuth, signOut } from "firebase/auth";
import Modal from "./ModalMessage";

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    check,
    setCheck,
    setDisplayEmail,
    displayEmail,
    openModal,
    Modalcheck,
  } = useContext(CheckContext);
  function setMenu() {
    setOpenMenu(!openMenu);
  }

  // input value
  function onchangeSearch(e) {
    props.search(e);
  }

  // mở modal
  const navigate = useNavigate();
  function handleclick() {
    if (check) {
      navigate("/Profile");
    } else {
      openModal();
    }
  }

  // Đăng xuất người dùng

  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCheck(false);
      setDisplayEmail("N/A");
      openModal();
    } catch (error) {
      alert("Đăng xuất thất bại!");
      console.error("Lỗi:", error);
    }
  };
  return (
    <>
      <header className="container-fluid row">
        <div className="header-left col-sm-9 ">
          <nav className="row">
            <Modal
              text="fa-xmark"
              content="Chưa đăng nhâp"
              boder="boderErr"
              Modalcheck={Modalcheck}
            />
            <h1 className="col-sm-3">
              TRUCSX <span>MOVIE</span>
            </h1>
            <i
              id="barscolor"
              onClick={setMenu}
              className={`fa-solid  ${openMenu ? "fa-xmark" : "fa-bars"} `}
            ></i>
            <ul className={`navBar col-sm-9 ${openMenu ? "open" : ""}`}>
              {displayEmail && <li className="user-name">{displayEmail}</li>}
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Liên hệ</li>
              <li onClick={handleclick}>Cá nhân</li>

              {check ? (
                <li>
                  <span onClick={handleLogout}>Đăng xuất</span>
                </li>
              ) : (
                <Link to="/Login">
                  <li>
                    <span>Dăng nhập</span>
                  </li>
                </Link>
              )}
            </ul>
          </nav>
        </div>
        <div className="header-right col-sm-3">
          <div className="input-group mb-3">
            <input //search
              onChange={onchangeSearch}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm"
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
