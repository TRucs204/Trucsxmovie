import { useContext } from "react";
import { CheckContext } from "./checkUser";
import { useNavigate } from "react-router-dom";
function Profile() {
  const {
    displayEmail,
    createdAt,
    lastLoginAt,
    totalLastWatch,
    removeLastMovie,
  } = useContext(CheckContext);

  console.log(totalLastWatch);

  function handleRemove(title) {
    removeLastMovie(title);
  }

  //
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <section className="profile row">
        {/* Phần thông tin cá nhân */}
        <aside className="box-user-left ">
          <p onClick={handleClick}>&#8592;</p>
          <h2>Thông tin cá nhân</h2>
          <dl>
            <dt>Email:</dt>
            <dd>{displayEmail}</dd>

            <dt>Thời gian khởi tạo tài khoản:</dt>
            <dd>{createdAt}</dd>
            <dt>Thời gian đăng nhập gần nhất:</dt>
            <dd>{lastLoginAt}</dd>
          </dl>
        </aside>

        <div className="lastWatch ">
          <h2 className="titleLastWatch"> Mục xem sau</h2>
          <div className="box-lastWatch">
            {totalLastWatch?.map((item) => (
              <div className="card ">
                <button
                  onClick={() => {
                    handleRemove(item.title);
                  }}
                  className="remove"
                >
                  xóa bỏ
                </button>
                <img src={item.url} alt="" />
                <h5>{item.title}</h5>
              </div>
            )) || <p>không có mục nào</p>}
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
