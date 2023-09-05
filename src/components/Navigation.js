import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/Mission', text: 'Mission' },
  { path: '/MyProfile', text: 'My Profile' },
];

const Navigations = () => (
  <>
    <img
      className="Logo"
      src="../assets/spaceshiplogo.png"
      alt="Logo"
      style={{ width: '50px' }}
    />
    <h3>Space Travellers&apos; Hub</h3>
    <ul
      className="Lists-style"
      style={{
        display: 'flex', justifyContent: 'flex-end', gap: '20px', flex: '2',
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
  </>
);

export default Navigations;

// C:\Users\USER\Desktop\space-travellers-app\src\spaceshiplogo.png
