import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog.jsx";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="max-w-7xl w-2/3">
      <p className="text-4xl">Blogs: {blogs.length}</p>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
