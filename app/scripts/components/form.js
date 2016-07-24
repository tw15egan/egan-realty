const React = require('react');

// <Form />
class Form extends React.Component {
  super() {
    return {
      type: 'info',
      message: ''
    };
  };

  sendEmail(evt) {
    evt.preventDefault();
    const formData = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    };

    const xmlhttp = new XMLHttpRequest();
    const _this = this;
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4) {
        console.log(xmlhttp.responseText);
        const response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'We have recieved your message.'});
        } else {
          _this.setState({ type: 'danger', message: 'Sorry'});
        }
      }
    };
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
  }

  requestBuildQueryString(params) {
    let queryString = [];
    for (let property in params) {
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
      return queryString.join('&');
    }
  }

  render() {
    return (
      <form action="" className="form" onSubmit={this.sendEmail.bind(this)}>
        <input type="text" ref="name" placeholder="Full Name" />
        <input type="text" ref="email" placeholder="Email Address" />
        <input type="number" ref="phone" placeholder="Phone Number" />
        <textarea type="text" ref="message" placeholder="Your message"></textarea>
        <button type="submit">Send Email</button>
      </form>
    )
  }
};

export default Form;
