import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import '../styles/rockets.css';
import { fetchAPI, reservation } from '../redux/rocketSlice';

const RocketList = () => {
  const dispatch = useDispatch();
  const { RocketList, isLoading, error } = useSelector(
    (store) => store.rockets,
  );

  useEffect(() => {
    if (RocketList.length === 0) {
      dispatch(fetchAPI());
    }
  }, [dispatch, RocketList.length]);

  if (isLoading === true) {
    return <div>Loading</div>;
  }

  if (isLoading === false) {
    return (
      <div data-testid="RocketList">
        {RocketList.map((item) => (
          <Rocket
            key={item.id}
            item={item}
            reservationAction={() => dispatch(reservation(item.id))}
          />
        ))}
      </div>
    );
  }

  return <div>{error}</div>;
};

const Rocket = ({ item, reservationAction }) => {
  const
    {
      id, name, disc, images, reserved,
    } = item;

  return (
    <section className="body-rockets">
      <div className="rocket1" key={id} data-testid="Rocket">
        <img className="rocketlook" src={images} alt={name} />
        <div className="contentsA">
          <h4 className="rocektName">{name}</h4>
          <div className="rocketDesctext">
            {reserved ? (
              <div>
                <span className="reserved">Reserved </span>
                {disc}
              </div>
            ) : (
              disc
            )}
          </div>
          <div
            role="button"
            tabIndex="0"
            onClick={reservationAction}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                reservationAction();
              }
            }}
          >
            {reserved ? (
              <button type="button" className="Reservation-revoked">
                Cancel Reservation
              </button>
            ) : (
              <button type="button" className="Reservation">
                Reserve rocket
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
Rocket.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    disc: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  reservationAction: PropTypes.func.isRequired,
};
export default RocketList;
