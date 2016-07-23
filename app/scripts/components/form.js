const React = require('react');

// <Form />
const Form = React.createClass({
  render : function() {
    return (
      <form className="form" onSubmit={this.sendEmail}>
        <input type="text" ref="name" placeholder="Full Name" />
        <input type="text" ref="email" placeholder="Email Address" />
        <input type="number" ref="phone" placeholder="Phone Number" />
        <textarea type="text" ref="message" placeholder="Your message"></textarea>
        <button type="submit">Send Email</button>
      </form>
    )
  }
});

export default Form;
