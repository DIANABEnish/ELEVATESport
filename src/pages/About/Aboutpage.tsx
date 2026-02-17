import "./AboutPage.scss";

const AboutPage = () => {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: "Performance First",
      desc: "Every piece we carry is tested for real athletic performance — not just looks.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Sustainable Choice",
      desc: "We partner with brands that prioritize eco-friendly materials and responsible production.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: "Built for Everyone",
      desc: "Whether you're a pro athlete or just starting your fitness journey — we've got you.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      ),
      title: "Community Driven",
      desc: "We listen to our customers. Your feedback shapes what lands on our shelves.",
    },
  ];

  const stats = [
    { number: "2K+", label: "Happy Customers" },
    { number: "200+", label: "Products" },
    { number: "15+", label: "Top Brands" },
    { number: "4.8★", label: "Average Rating" },
  ];

  return (
    <div className="about-page">

        {/* ── Hero ── */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <span className="about-eyebrow">Our Story</span>
            <h1>We Live & Breathe <span className="accent">Sport</span></h1>
            <p>
              ELEVATE SPORT was born from a simple idea: great sportswear shouldn't be a
              compromise between style, comfort, and performance. We curate the best athletic
              gear so you can focus on what matters — moving.
            </p>
          </div>
          <div className="about-hero-img">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
              alt="Athletes training"
            />
            <div className="hero-img-badge">Est. 2020</div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="about-stats">
          <div className="stats-inner">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="about-mission">
          <div className="mission-text">
            <span className="about-eyebrow">Our Mission</span>
            <h2>Fuel the Movement</h2>
            <p>
              We believe movement changes everything. A morning run clears your head. A gym
              session builds more than muscle. A yoga practice connects body and mind.
            </p>
            <p>
              Our mission is to remove every barrier between you and your best workout — starting
              with the gear you wear. That's why we obsessively source, test, and curate products
              that deliver on every promise.
            </p>
            <a href="/products" className="about-btn">Shop Collection</a>
          </div>
          <div className="mission-img">
            <img
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=700&q=80"
              alt="Training session"
            />
          </div>
        </section>

        {/* ── Values ── */}
        <section className="about-values">
          <div className="values-header">
            <span className="about-eyebrow">What We Stand For</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
            <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team CTA ── */}
        <section className="about-cta">
          <div className="cta-inner">
            <h2>Ready to Elevate Your Game?</h2>
            <p>Explore our full collection and find the gear that moves with you.</p>
            <a href="/products" className="about-btn about-btn-white">Browse All Products</a>
          </div>
        </section>

      </div>
  );
};

export default AboutPage;