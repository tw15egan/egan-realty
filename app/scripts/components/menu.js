const React = require('react');

// <Menu />
class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
};

export default Menu;
