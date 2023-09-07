import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI, reservation } from '../redux/rocketSlice';
import '../styles/rockets.css';

const RocketList = () => {
  // console.log('Dispatching fetchAPI action');
  const dispatch = useDispatch();
  const { RocketList, isLoading, error } = useSelector(
    (store) => store.rockets,
  );

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  if (isLoading === true) {
    return <div>Loading...</div>;
  }

  if (isLoading === false) {
    return (
      <div data-testid="RocketList">
        {RocketList.map((item) => (
          <Rocket
            key={item.id}
            // id={item.id}
            name={item.name}
            description={
              item.reserved ? (
                <div>
                  <span className="reserved">Reserved</span>
                  {item.description}
                </div>
              ) : (
                item.description
              )

            }
            image={item.images}
            Reservation={item.id}
            reservationState={
              item.reserved ? (
                <button type="button" className="Reservation-revoked">
                  Cancel Reservation
                </button>
              ) : (
                <button type="button" className="Reservation">
                  Reserve rocket
                </button>
              )
            }
          />
        ))}
      </div>
    );
  }

  return <div>{error}</div>;
};

const Rocket = (props) => {
  const dispatch = useDispatch();
  const
    {
      id, name, description, image, Reservation, reservationState,
    } = props;
  const handleReservesClick = () => {
    dispatch(reservation(Reservation));
  };
    /* eslint-disable */
  return (
    <div className="rocket1" key={id}>
      <img className="rocketlook" src={image} alt={name} />
      <div className="contentsA">
        <h4 className="rocketName">{name}</h4>
        <div className="rocketDesctext">{description}</div>
        <div
          type="button"
          tabIndex="0"
          onClick={handleReservesClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleReservesClick();
            }
          }}
        >
          {reservationState}
        </div>
      </div>
    </div>
    /* eslint-enable */
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  Reservation: PropTypes.number.isRequired,
  reservationState: PropTypes.number.isRequired,
};

export default RocketList;
