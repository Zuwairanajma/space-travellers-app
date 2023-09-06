// import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/rockets.css';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.RocketList.filter((rocket) => rocket.reserved === true);
  if (myRockets.length === 0) {
    return (
      <section>
        <h3>My Rockets</h3>
        <p>You have not reserved any rockets</p>
      </section>
    );
  }
  return (
    <section>
      <h3>My Rockets</h3>
      <ol>
        {myRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ol>
    </section>
  );
};

const MyProfile = () => (
  <section className="flex-style" style={{ display: 'flex' }}>
    <Rocket />
  </section>
);

export default MyProfile;
