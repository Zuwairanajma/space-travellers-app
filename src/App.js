import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigations from './components/Navigation';
import MyProfile from './components/MyProfile';
import Mission from './components/Mission';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigations />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Mission" element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
