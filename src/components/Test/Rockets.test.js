import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import RocketList from '../Rockets';

const mockStore = configureStore([]);

describe('RocketList Component', () => {
  it('renders Rocket components when RocketList has items', () => {
    const rockets = [
      {
        id: 1,
        name: 'Rocket 1',
        disc: 'Description 1',
        images: 'rocket1.jpg',
        reserved: false,
      },
    ];

    const store = mockStore({
      rockets: {
        RocketList: rockets,
        isLoading: false,
        error: null,
      },
    });

    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );

    expect(getAllByTestId('Rocket')).toHaveLength(rockets.length);
    expect(getByText('Rocket 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
  });
});
