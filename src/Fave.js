import React from 'react';

const Fave = () => {
  const handleClick = (event) => {
    event.stopPropagation();
    console.log('Handling Fave click!');
  };

  return (
    <button className="film-row-fave add_to_queue" onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </button>
  );
};

export default Fave;