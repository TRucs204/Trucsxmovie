import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header";
import Banner from "./component/banner";
import MovieList from "./component/movieList";
import SearchResult from "./component/searchResult";

export const themeContext = createContext();
function App() {
  const [data, setData] = useState({
    datatoprate: [],
    datapopular: [],
  });
  const [valueInput, setValueInput] = useState("");
  const [result, setResult] = useState([]);
  const [statusResult, setStatusResult] = useState(false);
  useEffect(() => {
    // get api top_rate
    const dataTop_rate = fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWJkZmYyMDk4MTU1MjgwMjAzMTZkOGYyYjBmZWMyNiIsIm5iZiI6MTczODgzNzc1OC42NDgsInN1YiI6IjY3YTQ4ZWZlYmYzNjA0MGM1ZDg1YzBkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YV3thEWDSFh9sbiEOw1mSgdFSzsFK8BRUCztj1oumE8",
        },
      }
    ).then((response) => {
      return response.json();
    });

    //get api popular
    const dataPopular = fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWJkZmYyMDk4MTU1MjgwMjAzMTZkOGYyYjBmZWMyNiIsIm5iZiI6MTczODgzNzc1OC42NDgsInN1YiI6IjY3YTQ4ZWZlYmYzNjA0MGM1ZDg1YzBkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YV3thEWDSFh9sbiEOw1mSgdFSzsFK8BRUCztj1oumE8",
        },
      }
    ).then((response) => {
      return response.json();
    });

    Promise.all([dataTop_rate, dataPopular]).then(
      ([dataTop_rate, dataPopular]) => {
        setData({
          datatoprate: dataTop_rate.results,
          datapopular: dataPopular.results,
        });
      }
    );
  }, []);

  function Textsearch(event) {
    setValueInput(event.target.value);
  }

  function handleSearch() {
    const dataTitle = [...data.datapopular, ...data.datatoprate];
    let resultSearch = dataTitle.filter((item) =>
      item.title.toLowerCase().includes(valueInput.toLowerCase())
    );
    setResult(resultSearch);
    setStatusResult(true);
  }
  return (
    <>
      <themeContext.Provider value={data}>
        <Header
          search={Textsearch}
          Search={handleSearch}
          statusResult={statusResult}
          setStatusResult={setStatusResult}
        />
        <Banner />
        <SearchResult result={result} statusResult={statusResult} />
        <MovieList />
      </themeContext.Provider>
    </>
  );
}

export default App;
