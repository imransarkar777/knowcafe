import "./App.css";
import { useState } from "react";
import Header from "./assets/Component/Header/Header.jsx";
import Blogs from "./assets/Component/Blogs/Blogs.jsx";
import Bookmarks from "./assets/Component/Bookmarks/Bookmarks.jsx";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove this id : ' , id);
    const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id );
    setBookmarks(remainingBookmarks);


  };

  return (
    <>
      <Header></Header>
      <div className="md:flex mx-auto my-0">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
