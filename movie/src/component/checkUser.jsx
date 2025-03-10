import { createContext, useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import Top_rated from "./Hotmovielist";

export const CheckContext = createContext();

export function CheckProvider({ children }) {
  const [check, setCheck] = useState(false);
  const [createdAt, setCreatedAt] = useState("N/A");
  const [lastLoginAt, setLastLoginAt] = useState("N/A");
  const [displayEmail, setDisplayEmail] = useState("N/A");
  const [watchLater, setWatchLater] = useState({});
  const [imageUrl, setImageUrl] = useState();
  const [titleMovie, setTitleMovie] = useState();
  const [totalLastWatch, setTotalLastWatch] = useState([]);
  const [Modalcheck, setModalCheck] = useState(false);

  function openModal() {
    setModalCheck(true);
    setTimeout(() => {
      setModalCheck(false);
    }, 3000);
  }

  // thời gian đăng nhập và thời gian tạo account
  function date(a, b) {
    const datecreatedAt = new Date(a).toLocaleString();
    const datelastLoginAt = new Date(b).toLocaleString();

    setCreatedAt(datecreatedAt);
    setLastLoginAt(datelastLoginAt);
  }

  // đọc dữ liệu trong localstorage

  useEffect(() => {
    const storeMovie = localStorage.getItem("lastWatch");
    setTotalLastWatch(storeMovie ? JSON.parse(storeMovie) : []);
  }, []);

  // Ghi dữ liệu trong localstorage
  function addMovieLastWatch(imageUrl, titleMovie) {
    const newLastWatch = {
      url: imageUrl,
      title: titleMovie,
    };

    setTotalLastWatch((prev) => {
      const displayList = prev.filter(
        (item) => item.title != newLastWatch.title
      );
      const updateLastWatch = [...displayList, newLastWatch];
      localStorage.setItem("lastWatch", JSON.stringify(updateLastWatch));
      return updateLastWatch;
    });
  }

  // xóa dữ liệu trong localstorage

  function removeLastMovie(title) {
    setTotalLastWatch((prev) => {
      const updateLastWatch = totalLastWatch.filter(
        (item) => item.title != title
      );
      localStorage.setItem("lastWatch", JSON.stringify(updateLastWatch));
      return updateLastWatch;
    });
  }

  return (
    <CheckContext.Provider
      value={{
        check,
        setCheck,
        displayEmail,
        setDisplayEmail,
        setWatchLater,
        watchLater,
        setCreatedAt,
        createdAt,
        setLastLoginAt,
        lastLoginAt,
        date,
        setImageUrl,
        imageUrl,
        addMovieLastWatch,
        titleMovie,
        setTitleMovie,
        totalLastWatch,
        removeLastMovie,
        openModal,
        Modalcheck,
        setModalCheck,
      }}
    >
      {children}
    </CheckContext.Provider>
  );
}
