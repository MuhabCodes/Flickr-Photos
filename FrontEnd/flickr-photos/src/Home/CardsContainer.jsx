import React from 'react';
import PeopleCard from './PeopleCard';

const CardsContainer = (props) => {
  const prop = props;
  let { Profiles } = prop;
  Profiles = Profiles.slice(0, 4);
  // console.log(Profiles);
  return (
    <div className="cards-container">
      { Profiles.map((Profile) => (
        <div className="single-card" key={Profile.id}>
          <PeopleCard Profile={Profile} />
        </div>
      )) }
    </div>
  );
};

export default CardsContainer;
