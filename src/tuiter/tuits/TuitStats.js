import React from 'react';

const TuitStats = ({ tuit }) => {
  const liked = tuit.liked ? 'red' : ' ';
  const likeIcon = tuit.liked
    ? 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/heart-icon-design-template-7582e2dfe68c75576eeec72967453753_screen.jpg?ts=1624545175'
    : 'https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-gris-1.png';
  return (
    <div className="wd-icon-footer">
      <a href="#" className="wd-icon-container">
        <img
          width="15px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0I9t7Pbj6KaCPtNJaBoi-0VXkl1wKDjjbLQ&amp;usqp=CAU"
        />
        <span>{tuit.replies}</span>
      </a>
      <a href="#" className="wd-icon-container">
        <img
          width="15px"
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"
        />
        <span>{tuit.retuits}</span>
      </a>
      <a href="#" className="wd-icon-container">
        <img src={likeIcon} width="15px" />
        <span style={{ color: liked }}>{tuit.likes}</span>
      </a>
      <a href="#" className="wd-icon-container">
        <img
          width="15px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-ImqcLMrbbXcZpkBlx0rbNTrzKd8WIpmx8SSCCo&amp;s"
        />
      </a>
    </div>
  );
};

// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F705939310324457612%2F&psig=AOvVaw2zjSLEC9MekVFoZhas9U4Y&ust=1667855281078000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNih8Z27mvsCFQAAAAAdAAAAABAE
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emojipng.com%2Fpreview%2F8392682&psig=AOvVaw2ahrEZpW44g-fSkgPjMuva&ust=1667855314253000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMi5irS7mvsCFQAAAAAdAAAAABAD

export default TuitStats;
