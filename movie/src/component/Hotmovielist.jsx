import { useContext, useState } from "react";
import { themeContext } from "../App";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Top_rated() {
  const theme = useContext(themeContext);
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

  return (
    <>
      <Carousel responsive={responsive}>
        {theme.datatoprate.map((item) => (
          <div id="hit" key={item.id} className="cardtoprate col-md-4">
            <div className="opacity"></div>
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
