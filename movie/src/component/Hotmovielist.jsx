import { useContext, useState } from "react";
import { themeContext } from "../App";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CheckContext } from "./checkUser";
import Modal from "./ModalMessage";
function Top_rated() {
  const theme = useContext(themeContext);
  const [checkdrop, setCheckdrop] = useState({});
  const { addMovieLastWatch, check, Modalcheck, openModal } =
    useContext(CheckContext);
  function handleClick(id) {
    setCheckdrop((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }
  // console.log(theme.datatoprate);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      <Carousel responsive={responsive}>
        {theme.datatoprate.map((item) => (
          <div id="hit" key={item.id} className="cardtoprate col-md-4">
            <p
              onClick={() => {
                handleClick(item.id);
              }}
              className="iconMovie"
            >
              &#8942;
            </p>
            <ul
              className={`drop-iconMovie
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
      </Carousel>
    </>
  );
}
export default Top_rated;
