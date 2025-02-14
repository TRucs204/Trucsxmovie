import contimdanloi from "../assets/contimdanloi.jpg";
import quyphunhan from "../assets/quyphunhan.jpg";
import avt from "../assets/phim-chieu-rap-7.jpg";

function Banner() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={contimdanloi}
              className="d-block w-50 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src={quyphunhan} className="d-block w-50 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={avt} className="d-block w-50 mx-auto" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
