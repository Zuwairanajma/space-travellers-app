import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import MyProfile from '../MyProfile';

const mockStore = configureStore([]);

describe('MyProfile Component', () => {
  it('renders My Missions section correctly', () => {
    const missions = [
      {
        id: 1,
        name: 'Mission 1',
        reserved: true,
      },
    ];

    const store = mockStore({
      missions: { missions },
      rockets: { RocketList: [] },
    });

    const { asFragment, getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(getByText('My Missions')).toBeInTheDocument();
    missions.forEach((mission) => {
      expect(getByText(mission.name)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders My Rockets section correctly', () => {
    const rockets = {
      RocketList: [
        {
          id: 1,
          name: 'Rocket 1',
          reserved: true,
        },
      ],
    };

    const store = mockStore({
      missions: { missions: [] },
      rockets,
    });

    const { asFragment, getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(getByText('My Rockets')).toBeInTheDocument();
    rockets.RocketList.forEach((rocket) => {
      expect(getByText(rocket.name)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
