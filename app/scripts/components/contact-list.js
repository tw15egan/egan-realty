const React = require('react');

// <ContactList />
class ContactList extends React.Component {
  render() {
    return (
      <div className="contact-list">
        <a
          href="tel:518-220-1110"
          className="contact-list__item contact-list__item--phone">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden="true">
              <path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z" />
              <title>Phone</title>
            </svg>
          </span>
          <span>(518) 220-1110</span>
        </a>
        <a
          href="mailto:eganappr@gmail.com"
          className="contact-list__item contact-list__item--email">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden="true">
              <path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z" />
              <title>Email</title>
            </svg>
          </span>
          <span>eganappr@gmail.com</span>
        </a>
        <a
          href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf"
          className="contact-list__item contact-list__item--email">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden="true">
              <path d="M30 18L30 16 24 16 24 26 26 26 26 22 29 22 29 20 26 20 26 18 30 18zM19 26H15V16h4a3.0033 3.0033 0 013 3v4A3.0033 3.0033 0 0119 26zm-2-2h2a1.0011 1.0011 0 001-1V19a1.0011 1.0011 0 00-1-1H17zM11 16H6V26H8V23h3a2.0027 2.0027 0 002-2V18A2.0023 2.0023 0 0011 16zM8 21V18h3l.001 3z" />
              <path d="M22,14V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,14,2H4A2.0059,2.0059,0,0,0,2,4V28a2,2,0,0,0,2,2H20V28H4V4h8v6a2.0059,2.0059,0,0,0,2,2h6v2Zm-8-4V4.4L19.6,10Z" />
              <title>document--pdf</title>
            </svg>
          </span>
          <span>Fair Housing Notice</span>
        </a>
      </div>
    );
  }
}

export default ContactList;
