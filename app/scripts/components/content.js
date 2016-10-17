const React = require('react');
import Section from './section';
import Hero from './hero';
import Contact from './contact';
import Footer from './footer'
import About from './about';
import Areas from './areas';

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <Section>
          <Hero />
        </Section>
        <Section>
          <About />
        </Section>
        <Areas />
        <Section>
          <Contact />
        </Section>
        <Footer />
      </div>
    )
  }
};

export default Content;
