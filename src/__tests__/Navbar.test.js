import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import Navbar from '../components/Navbar';

describe('Render the Navbar', () => {
  it('Renders the navbar', () => {
    const navbar = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
