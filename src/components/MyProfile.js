import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/rockets.css';

const Mission = () => {
  const { missions } = useSelector((store) => store.missions);

  const myMissions = missions.filter((item) => item.reserved);
  if (myMissions.length === 0) {
    return (
      <table>
        <tr>
          <th>
            My Missions
          </th>
        </tr>
        <tr>
          <td><p>You have not reserved any missions.</p></td>
        </tr>
      </table>

    );
  }
  return (
    <table>
      <h3>My Missions</h3>
      <ul>
        {myMissions.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </table>
  );
};

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
      <ol className="profile-list">
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
    <Mission />
  </section>
);

export default MyProfile;
