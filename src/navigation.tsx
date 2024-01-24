// Navigation.js

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/viewCustomers">Customer Details</Link>
        </li>
        <li>
          <Link to="/editCustomers">Customer Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
