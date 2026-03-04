import "./Contact.css";
import Resume from '../assets/Resume.pdf'

const Contact = () => {
  return (
    <section className="contact-master">
    <section className="contact-page">
      <figure>
      <img src={"https://media.licdn.com/dms/image/v2/D4E03AQGgD51n2SwI9A/profile-displayphoto-scale_200_200/B4EZxTJlXPK0AY-/0/1770921547794?e=1774483200&v=beta&t=2ZBGBEL0h4OgWdP9jPvLYk6tHnn08D4_bjtg_ThRP4A"} alt="Ishtiaq Akanda" className="homepage-avatar" />
      </figure>
      <h1 className="contact-title">Get in Touch</h1>
      
      <p className="contact-subtitle">
        I'm always open to new opportunities, collaborations, or just a friendly chat.
      </p>

      <section className="contact-links">
            <a href="mailto:ishtiaqa2003@gmail.com" className="contact-item">Email Me</a>
            <a href="https://github.com/ishtiaqa1" target="_blank" className="contact-item">GitHub</a>
            <a href="https://www.linkedin.com/in/ishtiaq-akanda/" target="_blank" className="contact-item">LinkedIn</a>
            <a href={Resume} target = '_blank' className="contact-item">View Resume</a>
      </section>
    </section>

      <section id="form">
        <form
          action="https://formspree.io/f/xnjdkjqa"
          method="POST"
        >
          <section className="text-box">
            <label for="name">Name</label>
            <input id="name" name='name' type="text" required placeholder="Your Name"></input>
          </section>
          <section className="text-box">
            <label for="email">E-Mail</label>
            <input id="email" name='email' type="email" required placeholder="Yourmail@example.com"></input>
          </section>
          <section className="text-area">
            <label for="inquiry">Inquiry</label>
            <textarea id="inquiry" name='inquiry' required placeholder="Messages, requests, and more!"></textarea>
          </section>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </section>
      </section>
  );
};

export default Contact;
