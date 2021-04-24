import React from 'react';
import moment from 'moment';
const Article = ({ title, snippet, date, length }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>Posted: {moment(date).format('MMMM Do YYYY')} 🗓️</span>
        <div></div>
        <span>{length} min read 📖</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
