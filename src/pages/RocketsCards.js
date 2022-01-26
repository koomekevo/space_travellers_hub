import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRocket,
} from '../redux/rockets/rockets';

const RocketsCards = () => {
  const dispatch = useDispatch();
  const fetchApi = 'https://api.spacexdata.com/v3/rockets';

  const myRocketArray = useSelector((state) => state.rockets);

  useEffect(() => {
    const apiRockets = async () => {
      const fetchRockets = await fetch(fetchApi);
      const rockets = await fetchRockets.json();
      return dispatch(getRocket(rockets));
    };
    if (myRocketArray.length === 0) {
      apiRockets();
    }
  }, []);

  return (
    <div className="rocket-card">
      {myRocketArray.map((rocket) => (
        <div key={rocket.id} className="rockets-div">
          <div className="rocket-imgs">
            <img
              src={rocket.flickr_images}
              alt={rocket.rocket_name}
              width="300"
              height="200"
              className="header-logo"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className="rocket-img"
            />
          </div>
          <div className="rockets-desc">
            <h3 className="rockets-desc-title">{rocket.rocket_name}</h3>

          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsCards;
