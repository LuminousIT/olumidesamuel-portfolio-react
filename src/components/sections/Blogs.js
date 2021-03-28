import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Implementing Protected Route and Authentication in React-JS",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "14 March, 2021",
    author: "Samuel Olumide Oluwole",
    category: "Tutorials",
  },
  {
    id: 2,
    title: "Structuring Redux in a React Web App",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "09 March, 2021",
    author: "Samuel Olumide Oluwole",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "SASS CSS for Beginners",
    image: "images/blog/3.svg",
    filesource: "../../blogs/things-to-know-about-startup-business.md",
    date: "07 March, 2020",
    author: "Samuel Olumdie Oluwole",
    category: "Tutorial",
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default">
            Show all blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
