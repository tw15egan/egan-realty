const React = require('react');
import Section from './section';
import Form from './form';

const Content = React.createClass({
  render : function() {
    return (
      <div className="container">
        <Section>
          <Form />
        </Section>
      </div>
    )
  }
});

export default Content;
