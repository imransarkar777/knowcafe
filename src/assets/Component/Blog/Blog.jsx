import PropTypes from "prop-types";
import { BsJournalBookmarkFill } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    posted_date,
    author_img,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 ml-55 max-w-7xl space-y-4">
      <img className="mb-8" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-3xl text-red-600"
          >
            <BsJournalBookmarkFill />
          </button>
        </div>
      </div>
      <p className="text-4xl">{title}</p>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="ml-2" key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-800 font-bold underline"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
