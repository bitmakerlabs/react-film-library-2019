import React, {useState} from 'react';

const Faves = () => {

  const [isFave, setIsFave] = useState(false);


  const handleClick = (e) => {
    e.stopPropagation()

    setIsFave((isFave) => {
      return !isFave
    })
  };

  const favorited = isFave ? 'remove_from_queue' : 'add_to_queue' 

  return (
    <div className={`film-row-fave ${favorited}`} onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </div>
  )
};

export default Faves;