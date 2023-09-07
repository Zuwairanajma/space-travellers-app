import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../redux/rocketSlice';

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
            id={item.id}
            name={item.name}
            description={item.description}
            images={item.flickr_images}
          />
        ))}
      </div>
    );
  }

  return <div>{error}</div>;
};

const Rocket = (props) => {
  const
    {
      id, name, description, images,
    } = props;
  return (
    <div className="rocket1" key={id}>
      <img className="rocketlook" src={images[1]} alt={name} />
      <div className="contentsA">
        <h4 className="rocketName">{name}</h4>
        <div className="rocketDesctext">{description}</div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RocketList;
