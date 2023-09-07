import React from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);

  const myRockets = rockets.RocketList.filter(
    (rocket) => rocket.reserved === true,
  );
  if (myRockets.length === 0) {
    return (
      <table>
        <tr>
          <td>My Rockets </td>
        </tr>
        <tr>
          <td>You have not reserved any rockets.</td>
        </tr>
      </table>
    );
  }
  return (
    <table>
      <tr><th>My Rockets</th></tr>
      <ul>
        {myRockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.name}
          </li>
        ))}
      </ul>
    </table>
  );
};
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
function MyProfile() {
  return (
    <div>
      <Mission />
      <Rocket />
    </div>
  );
}
export default MyProfile;
