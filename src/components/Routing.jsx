// React Router Imports
import { Route, Routes } from 'react-router-dom';

// Element Imports
import StorePage from '../pages/storePage';
import BagPage from '../pages/BagPage';

const Routing = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/bag" element={<BagPage />} />
      </Routes>
    </main>
  );
};
export default Routing;
