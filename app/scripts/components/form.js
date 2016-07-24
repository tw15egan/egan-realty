const React = require('react');
const $ = require('jQuery');

// <Form />
class Form extends React.Component {
  constructor() {
    super();
  }

  sendEmail(evt) {
    evt.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const phone = this.refs.phone.value;
    const message = this.refs.message.value;
    const confirmation = document.querySelector('.form__confirmation');
    confirmation.classList.add('show');

    setTimeout(() => {
      confirmation.classList.remove('show');
    }, 4000);

    $.ajax({
      url: '//formspree.io/mari.l.johannessen@gmail.com',
      method: 'POST',
      data: {
        name: name,
        email: email,
        phone: phone,
        message: message
      },
      dataType: 'json'
    });
  }

  shrinkLabel(evt) {
    const inputField = evt.target;
    const inputFieldName = inputField.getAttribute('name');
    const inputFieldLabel = document.querySelector('label[for="'+ inputFieldName + '"]');
    inputFieldLabel.classList.add('active');
    inputField.classList.add('active');

    if (inputField.value === '') {
      inputFieldLabel.classList.remove('active');
      inputField.classList.remove('active');
    }
  }

  render() {

    return (
      <form className="form" onSubmit={this.sendEmail.bind(this)}>
        <div className="form__confirmation">
          <div>
            <h1>Thank you for your message.</h1>
            <h3>We will be in touch as soon as possible.</h3>
          </div>
        </div>
        <fieldset className="form__container">
          <input type="text" className="form__input" ref="name" name="name" onInput={this.shrinkLabel} required />
          <label htmlFor="name" className="form__label">Full Name</label>
        </fieldset>
        <fieldset className="form__container">
          <input type="email" className="form__input" ref="email" name="email" onInput={this.shrinkLabel} required />
          <label htmlFor="email" className="form__label">Email Address</label>
        </fieldset>
        <fieldset className="form__container">
          <input type="tel" className="form__input" ref="phone" name="phone" onInput={this.shrinkLabel} required />
          <label htmlFor="phone" className="form__label">Phone Number</label>
        </fieldset>
        <fieldset className="form__container">
          <textarea type="text" className="form__message" name="message" ref="message" onInput={this.shrinkLabel} required ></textarea>
          <label htmlFor="message" className="form__label">Message</label>
        </fieldset>
        <input type="hidden" name="_next" value="/" />
        <input type="text" name="_gotcha" className="form__hidden"/>
        <fieldset className="form__container">
          <button type="submit" className="form__button">Send Message</button>
        </fieldset>
      </form>
    )
  }
}

export default Form;
