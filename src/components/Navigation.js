import { NavLink } from 'react-router-dom';
import '../styles/rockets.css';
import logo from '../assets/spaceshiplogo.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/Mission', text: 'Mission' },
  { path: '/MyProfile', text: 'My Profile' },
];

const Navigations = () => (
  <div className="parent-header">
    <nav className="Nav-start">
      <img
        className="Logo"
        src={logo}
        alt="Logo"
        style={{ width: '60px' }}
      />
      <h2>Space Travellers&apos; Hub</h2>
    </nav>
    <ul
      className="lists-style"
      style={{
        display: 'flex', justifyContent: 'flex-end', gap: '20px', flex: '3',
      }}
    >
      {links.map((link) => (
        <li key={link.text} className="mappedlinks" style={{ listStyle: 'none' }}>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigations;
