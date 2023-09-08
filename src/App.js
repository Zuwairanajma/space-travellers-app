import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigations from './components/Navigation';
import MyProfile from './components/MyProfile';
import Mission from './components/Mission';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route
            path="/MyProfile"
            element={<MyProfile style={{ borderRight: 'solid 1px darkgray' }} />}
          />
          <Route path="/Mission" element={<Mission />} />
          <Route path="*" element={<h3>No Match</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
