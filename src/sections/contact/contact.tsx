import "./style.scss";

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2 className="headline">CONTACT</h2>
      <ul className="contact-list">
        <a href="mailto:jcbkdev@gmail.com" target="_blank" rel="noreferrer">
          <li className="contact-item">
            <img src="/assets/mail.svg" alt="mail" />
            <p>jcbkdev@gmail.com</p>
          </li>
        </a>
        <a
          href="https://linkedin.com/in/jcbkdev"
          target="_blank"
          rel="noreferrer"
        >
          <li className="contact-item">
            <img src="/assets/linkedin.svg" alt="mail" />
            <p>linkedin</p>
          </li>
        </a>
      </ul>
    </section>
  );
}
