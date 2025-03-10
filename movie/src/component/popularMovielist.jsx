import { useContext, useState } from "react";
import { themeContext } from "../App";
import { CheckContext } from "./checkUser";
import Modal from "./ModalMessage";

function Popular() {
  const theme = useContext(themeContext);
  const { addMovieLastWatch, check, openModal, Modalcheck } =
    useContext(CheckContext);
  const [page, setPage] = useState(1);
  const [checkdrop, setCheckdrop] = useState({});

  const itemPage = 6;

  const totalPage = Math.ceil(theme.datapopular.length / itemPage);

  let endPage = page * itemPage;
  let startPage = endPage - itemPage;

  let currentItems = theme.datapopular.slice(startPage, endPage);

  function nextPage() {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }

  function PreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleClick(id) {
    setCheckdrop((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  //
  function handleClickaddMovieLastWatch(imgUrl, title) {
    if (check) {
      addMovieLastWatch(imgUrl, title);
    } else openModal();
  }

  return (
    <>
      <Modal
        text="fa-xmark"
        content="Chưa đăng nhập"
        boder="boderErr"
        Modalcheck={Modalcheck}
      />
      {currentItems.map((item) => (
        <div key={item.id} className="card col-md-4">
          <p
            onClick={() => {
              handleClick(item.id);
            }}
            className="iconMoviePopula"
          >
            &#8942;
          </p>
          <ul
            className={`drop-iconMovie-popula
                ${
                  checkdrop[item.id]
                    ? "drop-iconMovie-true"
                    : "drop-iconMovie-false"
                } `}
          >
            <li
              onClick={() =>
                handleClickaddMovieLastWatch(
                  `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                  item.title
                )
              }
            >
              thêm vào ds xem sau
            </li>
          </ul>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            alt=""
          />
          <h5>{item.title}</h5>
        </div>
      ))}

      <nav className="page" aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li onClick={PreviousPage} class="page-item disabled">
            <a class="page-link">Sau</a>
          </li>
          <li onClick={nextPage} class="page-item">
            <a class="page-link" href="#">
              Trước
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Popular;
