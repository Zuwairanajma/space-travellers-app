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
    if (RocketList.length === 0) {
      dispatch(fetchAPI());
    }
  }, [dispatch, RocketList.length]);

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
  reservationState: PropTypes.string.isRequired,
};

export default RocketList;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchRockets } from '../redux/rocketSlice';

// const RocketList = () => {
//   const dispatch = useDispatch();
//   const { data: RocketList, isLoading, error } = useSelector(
//     (state) => state.rockets,
//   );

//   useEffect(() => {
//     dispatch(fetchRockets());
//   }, [dispatch]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {RocketList.map((rocket) => (
//         <Rocket key={rocket.id} rocket={rocket} />
//       ))}
//     </div>
//   );
// };

// const Rocket = ({ rocket }) => {
//   const { id, rocketName, description, flickrImages } = rocket;

//   return (
//     <div key={id} className="rocket">
//       <img src={flickrImages[0]} alt={rocketName} />
//       <h3>{rocketName}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// Rocket.propTypes = {
//     rocket: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       rocketName: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
//     }).isRequired,
//   };

// export default RocketList;
