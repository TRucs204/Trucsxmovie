import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";
import Modal from "./ModalMessage";
import { useContext } from "react";
import { CheckContext } from "./checkUser";
function SignIn() {
  const {
    setCheck,
    setDisplayEmail,
    setUserId,
    date,
    openModal,
    setModalCheck,
    Modalcheck,
  } = useContext(CheckContext);
  const [Email, setNewEmail] = useState("");
  const [Password, setNewPassword] = useState("");
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [boder, setBoder] = useState("");
  const navigate = useNavigate();

  function dateSignin(Create, lastLogin) {
    date(Create, lastLogin);
  }

  async function signIn(e) {
    e.preventDefault();
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      console.log(createUser);
      setContent("Dăng ký thành công");
      setText("fa-check");
      setBoder("boder");
      setCheck(true);
      setDisplayEmail(createUser.user.email);
      setModalCheck(true);
      dateSignin(
        Number(createUser.user.metadata.createdAt),
        Number(createUser.user.metadata.lastLoginAt)
      );
      setTimeout(() => {
        setModalCheck(false);
        navigate("/");
      }, 3500);
    } catch (err) {
      console.log("lỗi tại đây", err);

      if (err.code == "auth/invalid-email") {
        setContent("Email không đúng");
      } else if (err.code == "auth/missing-password") {
        setContent("Mật khẩu không hợp lệ");
      } else if (err.code == "auth/weak-password") {
        setContent("Mật khẩu trên 5 ký tự");
      }
      setText("fa-xmark");
      setBoder("boderErr");
      openModal();
    }
  }
  return (
    <>
      <div className="Signin">
        <Modal
          text={text}
          content={content}
          boder={boder}
          Modalcheck={Modalcheck}
        />
        <form id="Signin" action="">
          <h2 className="titleLogin">Đăng ký</h2>
          <div className="SigninEmail">
            <input
              onChange={(e) => setNewEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="SigninPassword">
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="btn-Form">
            <button onClick={signIn}>
              <span>Đăng ký</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
