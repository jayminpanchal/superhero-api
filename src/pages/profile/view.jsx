import React, { useEffect } from "react";

import Loader from "../../component/Loader";

const Profile = ({
  match,
  history,
  isLoader,
  superHero,
  getSuperHeroProfileWatcher,
}) => {
  console.log("match", match);
  useEffect(() => {
    if (!match.params || !match.params.id) {
      history.push("/");
      return;
    }
    getSuperHeroProfileWatcher({ id: match.params.id });
  }, []);
  console.log("Profile", superHero);
  if (isLoader) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }
  if (!superHero) {
    return null;
  }
  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-header">
          <div className="superhero-image-wrapper">
            <img className="superhero-image" src={superHero.image.url} />
          </div>
          <div className="profile-header-details">
            <p className="superhero-name">{superHero.name}</p>
            <p className="superhero-detail-text">
              {superHero.biography["full-name"]}
            </p>
            <p className="superhero-detail-text">
              {superHero.biography.publisher}
            </p>
          </div>
        </div>
        <div className="profile-desc">
          <p className="superhero-detail-text">{superHero.appearance.gender}</p>
          <p className="superhero-detail-text">
            {superHero.appearance.height[0]}
          </p>
          <p className="superhero-detail-text">
            {superHero.appearance.weight[0]}
          </p>
          <p className="superhero-detail-text">
            {superHero.biography["first-appearance"]}
          </p>
          <p className="superhero-detail-text">
            {superHero.biography.aliases.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
