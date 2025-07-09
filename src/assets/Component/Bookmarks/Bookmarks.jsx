import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div>
        <h3 className="text-4xl"> reading time : {readingTime}</h3>
      </div>
      <h2 className="text-center text-3xl">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark bookmark={bookmark} key={idx}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
