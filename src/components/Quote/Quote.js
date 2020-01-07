import React from "react";

const Quote = ({ author, category, qoute }) => {
  if (Math.random() > 0.7) throw new Error("Something error");
  return (
    <div className="card mb-2">
      <div className="card-header">Category : {category}</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{qoute}</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">{author}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
