import React from "react";

const SuperHero = ({ superhero, history }) => {
  const openProfile = () => {
    history.push(`/profile/${superhero.id}`);
  };
  return (
    <div className="superhero-item-container" onClick={openProfile}>
      <div className="superhero-item-wrapper">
        <div className="superhero-image-wrapper">
          <img className="superhero-image" src={superhero.image.url} />
        </div>
        <div className="details-card">
          <span className="superhero-name">{superhero.name}</span>

          <div className="superhero-detail-container">
            <span className="superhero-detail-text">
              {superhero.biography["full-name"]}
            </span>
            <span className="superhero-detail-text">{superhero.work.base}</span>
            <span className="superhero-detail-text">
              {superhero.biography.publisher}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperHero;
