import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((store) => store.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  const handleStatus = (reserved) => {
    if (reserved) {
      return <span>Active Member</span>;
    }
    return <span>NOT A MEMBER</span>;
  };

  const handleButtons = (id, reserved) => {
    if (reserved) {
      return (
        <button
          type="button"
          onClick={() => dispatch(leaveMission({ id }))}
        >
          Leave Mission
        </button>
      );
    }
    return (
      <button
        type="button"
        onClick={() => dispatch(joinMission({ id }))}
      >
        Join Mission
      </button>
    );
  };

  const mission = missions.map((item) => (
    <tr key={item.id}>
      <td>{ item.name }</td>
      <td>{ item.desc }</td>
      <td>
        {handleStatus(item.reserved)}
      </td>
      <td>
        {handleButtons(item.id, item.reserved)}
      </td>
    </tr>
  ));

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th width="150">Mission</th>
            <th>Description</th>
            <th width="150">Status</th>
            <th width="150"> </th>
          </tr>
        </thead>
        <tbody>
          {mission}
        </tbody>
      </table>
    </section>

  );
};

export default Mission;
