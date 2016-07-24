const React = require('react');
import Section from './section';
import Form from './form';

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <Section>
          <Form />
        </Section>
      </div>
    )
  }
};

export default Content;
