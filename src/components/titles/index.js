import React from 'react';

const Titles = (props) => {
  const Tag = props.tag || 'h2'

  let styles = ''
  props.tag === 'h1'
    ? styles = "text-white font-headings text-xl pb-2"
    : styles = "text-gray-400 font-body text-lg pb-2"

  return (
    <>
      <Tag className={styles}>{props.content}</Tag>
    </>
  );
};

export default Titles;
