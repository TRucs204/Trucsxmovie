import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { auth } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Modal from "./ModalMessage";
import { CheckContext } from "./checkUser";

function Login() {
  const {
    setDisplayEmail,
    date,
    setCheck,
    openModal,
    Modalcheck,
    setModalCheck,
  } = useContext(CheckContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [boder, setBoder] = useState("");
  const navigate = useNavigate();

  function dateSignin(Create, lastLogin) {
    date(Create, lastLogin);
  }

  async function Login(e) {
    e.preventDefault();
    try {
      const LoginUser = await signInWithEmailAndPassword(auth, email, password);
      setContent("Đăng nhập thành công");
      setText("fa-check");
      setBoder("boder");
      setDisplayEmail(email);
      setModalCheck(true);
      setCheck(true);
      dateSignin(
        Number(LoginUser.user.metadata.createdAt),
        Number(LoginUser.user.metadata.lastLoginAt)
      );
      setTimeout(() => {
        setModalCheck(false);
        navigate("/");
      }, 3500);
      console.log("đăng ký thành công");
    } catch (error) {
      console.log("lỗi tại đây", error);
      if (error.code == "auth/invalid-email") {
        setContent("Email không hợp lệ");
      } else if (error.code == "auth/missing-password") {
        setContent("mật Khẩu không hợp lệ");
      } else if (error.code == "auth/invalid-credential") {
        setContent("Sai Emai hoặc mật khẩu");
      }
      setText("fa-xmark");
      setBoder("boderErr");
      openModal();
    }
  }

  //

  return (
    <>
      <div className="Login">
        <Modal
          text={text}
          content={content}
          boder={boder}
          Modalcheck={Modalcheck}
        />
        <form id="Login" action="">
          <h2 className="titleLogin">Đăng nhập</h2>
          <div className="LoginEmail">
            <input
              className="LoginEmail"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="LoginPassword">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="LoginPassword input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="btn-Form">
            <Link to="/SignIn">Đăng ký</Link>
            <button onClick={Login}>
              <span>Đăng nhập</span>
            </button>
          </div>
        </form>
      </div>
      <Outlet />
    </>
  );
}
export default Login;
