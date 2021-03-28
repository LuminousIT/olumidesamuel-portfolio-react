import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import axios from "axios";
import Disqus from "disqus-react";
import Header from "../components/layouts/Header";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;

  useEffect(() => {
    axios.get(require(`../blogs/${blogFile}.md`)).then((result) => {
      setContent(result.data);
    });
  }, [content, blogFile]);

  const disqusShortname = "bolby"; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: "https://jthemes.net/themes/react/bolby", //Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  return (
    <>
      <Header
        logoSource="/images/logo.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
              <ReactMarkdown
                source={content}
                escapeHtml={false}
              ></ReactMarkdown>
              <div className="mi-blog-details-comments mt-30">
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default BlogDetails;
