import React from 'react';
import { useSelector } from 'react-redux';

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
    </div>
  );
}
export default MyProfile;
