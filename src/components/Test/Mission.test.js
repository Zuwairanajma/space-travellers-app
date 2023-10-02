import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import Mission from '../Mission';

const mockStore = configureStore([]);
describe('Mission Component', () => {
  it('renders mission information from the store', () => {
    const initialState = {
      missions: {
        missions: [
          {
            id: 1,
            name: 'Mission 1',
            desce: 'Description 1',
            reserved: true,
          },
        ],
      },
    };
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Active Member')).toBeInTheDocument();
  });
});
