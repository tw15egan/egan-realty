const React = require('react');

// <Menu />
class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    )
  }
};

export default Menu;
