// React Router Dom
import { Link } from 'react-router-dom';
import { Bag, Store } from '../assets/icons';
// Icon Imports
const Nav = () => {
  return (
    <nav>
      <div className="wrapper">
        <header>
          <h1>Fantasy Shop</h1>
        </header>

        <ul className="navLinks">
          {/* store */}
          <li>
            <Link to="/">
              <Store />
              <span className="srOnly">Store page</span>
            </Link>
          </li>
          {/* bag */}
          <li>
            <Link to="/bag">
              <Bag />
              <span className="srOnly">Bag page</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
