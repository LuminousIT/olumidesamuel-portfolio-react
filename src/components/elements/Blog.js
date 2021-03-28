import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Blog({ blogData }) {
  const {
    id,
    category,
    title,
    date,
    author,
    image,
    filesource,
    link,
  } = blogData;
  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split("/");
    let fileName = tempArr[tempArr.length - 1];
    console.log("fileName", fileName);
    let getName = fileName.slice(0, -3);
    console.log("getName", getName);
    return getName;
  };
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="blog-item rounded bg-white shadow-dark">
        <div className="thumb">
          <a href="/">
            <span className="category">{category}</span>
          </a>
          {/* <Link to={`blogs/blog-details/${id}/${getNospaceTitle(filesource)}`}> */}
          <a href={link} target="_blank">
            <img src={image} alt="blog-title" />
          </a>
        </div>
        <div className="details">
          <h4 className="my-0 title">
            {/* <Link
              to={`blogs/blog-details/${id}/${getNospaceTitle(filesource)}`}
            > */}
            <a href={link} target="_blank">
              {title}
            </a>
          </h4>
          <ul className="list-inline meta mb-0 mt-2">
            <li className="list-inline-item">{date}</li>
            <li className="list-inline-item">{author}</li>
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Blog;
