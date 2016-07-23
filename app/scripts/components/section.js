const React = require('react');

// <Section />
const Section = React.createClass({
  render : function() {
    return (
      <section className="section">
        {this.props.children}
      </section>
    )
  }
});

export default Section;
