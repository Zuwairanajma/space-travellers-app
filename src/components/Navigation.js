import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/spaceshiplogo.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/Mission', text: 'Mission' },
  { path: '/MyProfile', text: 'My Profile' },
];

const Navigations = () => (
  <>
    <Container className="d-flex flex-wrap align-items-center p-3">
      <img
        className="Logo"
        src={logo}
        alt="Logo"
        style={{ width: '60px' }}
      />
      <h3>Space Travelers&apos; Hub</h3>
      <ul
        className="list-unstyled m-2 p-2 d-flex flex-wrap"
        style={{ justifyContent: 'flex-end', flex: '2' }}
      >
        {links.map((link) => (
          <li key={link.text} className="m-2">
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              to={link.path}
              style={{ borderLeft: link.path === '/MyProfile' ? '3px solid darkgray' : 'none', paddingLeft: '15px' }}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
    <hr className="m-5 my-1" />
  </>
);

export default Navigations;
