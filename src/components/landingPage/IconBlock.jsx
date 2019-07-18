import React from "react";

export default function IconBlock(props) {
  const { contentsData } = props;

  return (
    <div className="landingPage_contents_block" name="serviceItems">
      <div className="contents_title">
        <h3>{contentsData.title}</h3>
        <h4>{contentsData.info}</h4>
      </div>
      <div className="contents">
        {contentsData.contents.map((content, i) => {
          return (
            <div className="content" key={i}>
              <img src={content.img} alt={content.content_title} />
              <h4>{content.content_title}</h4>
              <p>{content.content_info} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
