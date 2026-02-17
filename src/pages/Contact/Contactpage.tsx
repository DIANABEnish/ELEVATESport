import { useState } from "react";
import "./Contactpage.scss";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Visit Us",
      lines: ["123 Sport Avenue", "Tel Aviv, Israel"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
        </svg>
      ),
      title: "Call Us",
      lines: ["+972 50 000 0000", "Sun – Thu, 9am – 6pm"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: "Email Us",
      lines: ["hello@elevatesport.com", "We reply within 24h"],
    },
  ];

  return (
    <div className="contact-page">

        {/* ── Hero ── */}
        <section className="contact-hero">
          <span className="contact-eyebrow">Get In Touch</span>
          <h1>We'd Love to <span className="accent">Hear From You</span></h1>
          <p>Questions, feedback, or just want to say hi? Drop us a line — we're here for it.</p>
        </section>

        {/* ── Info Cards ── */}
        <section className="contact-info-section">
          <div className="contact-info-grid">
            {contactInfo.map((item, i) => (
              <div className="contact-info-card" key={i}>
                <div className="info-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                {item.lines.map((line, j) => <p key={j}>{line}</p>)}
              </div>
            ))}
          </div>
        </section>

        {/* ── Form + Image ── */}
        <section className="contact-main">
          <div className="contact-form-wrap">
            <span className="contact-eyebrow">Send a Message</span>
            <h2>Let's Talk</h2>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, {formData.name}. We'll get back to you within 24 hours.</p>
                <button className="contact-btn" onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="contact-btn" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            )}
          </div>

          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80"
              alt="Sport training"
            />
            <div className="contact-img-overlay">
              <blockquote>
                "The only bad workout is the one that didn't happen."
              </blockquote>
            </div>
          </div>
        </section>

      </div>
  );
};

export default ContactPage;
