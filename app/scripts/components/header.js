const React = require('react');

// <Header />
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Egan Realty & Appraisals</h1>
        <a href="tel:518-370-0256" className="header__phone">(518) 370-0256</a>
      </header>
    )
  }
};

export default Header;
