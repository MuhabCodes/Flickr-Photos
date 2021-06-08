import React from 'react';
import PeopleCard from './PeopleCard';

/**
 * People cards to follow container
 * @namespace HomePage.CardsContainer
 * @example <CardsContainer />
 * @function CardsContainer
 * @returns CardsContainer of home page
 */

const CardsContainer = (props) => {
  const prop = props;
  let { Profiles } = prop;
  Profiles = Profiles.slice(0, 4); /* Only Show 4 profiles */
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
