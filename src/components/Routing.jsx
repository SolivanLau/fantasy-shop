// React Router Imports
import { Route, Routes } from 'react-router-dom';

// Element Imports
import StorePage from '../pages/storePage';
import BagPage from '../pages/bagPage';

const Routing = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="" element={<BagPage />} />
      </Routes>
    </main>
  );
};
export default Routing;
