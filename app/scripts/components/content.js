const React = require('react');
import Section from './section';
import Form from './form';
import Hero from './hero';
import Map from './map';

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <Section>
          <Hero />
        </Section>
        <Section>
        </Section>
        <Map />
      </div>
    )
  }
};

export default Content;
