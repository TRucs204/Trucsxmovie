import Top_rated from "./Hotmovielist";
import Popular from "./popularMovielist";
function MovieList() {
  return (
    <>
      <h2>Phim hot</h2>
      <div className="main row">
        <Top_rated />
      </div>
      <h2>Phim dề cử</h2>
      <div className="main row">
        <Popular />
      </div>
    </>
  );
}
export default MovieList;
