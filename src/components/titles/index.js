import React from 'react';

const Titles = (props) => {
  const Tag = props.tag || 'h2'

  let styles = ''
  props.tag === 'h1'
    ? styles = "text-white font-headings text-center text-2xl font-bold"
    : styles = "text-gray-300 font-body text-center text-lg pb-2"

  return (
    <>
      <Tag className={styles}>{props.content}</Tag>
    </>
  );
};

export default Titles;
