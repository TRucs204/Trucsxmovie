import { useContext, useState } from "react";
import { themeContext } from "../App";

function Popular() {
  const theme = useContext(themeContext);
  // console.log(theme.datatoprate);
  const [page, setPage] = useState(1);

  const itemPage = 5;

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

  return (
    <>
      {currentItems.map((item) => (
        <div key={item.id} className="card col-md-4">
          <div className="opacity"></div>
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
            <a class="page-link">Previous</a>
          </li>
          <li onClick={nextPage} class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Popular;
