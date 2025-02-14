function SearchResult(props) {
  return (
    <>
      <div className={props.statusResult ? "result" : "noResult"}>
        <h2>Kết quả tìm kiếm</h2>
        <div className="boxResult row">
          {props.result.length === 0 ? (
            <h2>🎯 Kết quả bạn cần hiện chưa có !!!</h2>
          ) : (
            props.result.map((item) => (
              <div key={item.id} className="card col-md-4">
                <div className="opacity"></div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt=""
                />
                <h5>{item.title}</h5>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default SearchResult;
