'use client';
import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="nav-logo">ADCRAZE</div>
          <button className="nav-cta">Book Free Audit</button>
        </nav>

        <div className="hero-content">
          <div className="hero-badge">Performance-Based Results</div>
          <h1 className="hero-title">
            Stop Burning Money on Ads.<br />
            Start <span className="highlight">Scaling Revenue.</span>
          </h1>
          <p className="hero-subtitle">
            We only win when you win. No fluff, no wasted spend—just data-driven campaigns that deliver measurable ROI from day one.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary">Get Your Free Strategy Call</a>
            <a href="#case-studies" className="btn-secondary">See Our Results</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">3.8x</div>
              <div className="stat-label">Avg. ROAS</div>
            </div>
            <div className="stat">
              <div className="stat-number">$12M+</div>
              <div className="stat-label">Client Revenue Generated</div>
            </div>
            <div className="stat">
              <div className="stat-number">47%</div>
              <div className="stat-label">Avg. CPA Reduction</div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">Tired of Agencies That Over-Promise and Under-Deliver?</h2>
          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-icon">💸</div>
              <h3>Wasted Ad Spend</h3>
              <p>You're pouring money into ads but seeing minimal returns. Every dollar wasted is revenue left on the table.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📊</div>
              <h3>Zero Transparency</h3>
              <p>You get vague reports with vanity metrics. No clear connection between ad spend and actual business growth.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">⏰</div>
              <h3>Slow to Adapt</h3>
              <p>Markets change fast. Your agency moves slow. You're stuck with outdated strategies while competitors surge ahead.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🎯</div>
              <h3>Cookie-Cutter Campaigns</h3>
              <p>Generic templates don't work. Your business is unique—you need custom strategies that actually fit your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-content">
            <div className="solution-text">
              <h2 className="section-title">The Adcraze Difference:<br />Performance-Based. Data-Obsessed. Results-Driven.</h2>
              <p className="solution-intro">We're not here to impress you with buzzwords. We're here to scale your revenue with precision-targeted campaigns that actually convert.</p>

              <div className="solution-features">
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h3>Performance-Based Pricing</h3>
                    <p>Pay for results, not effort. We earn more when you earn more.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h3>Real-Time Reporting</h3>
                    <p>Live dashboards showing exactly where every dollar goes—and what it returns.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h3>Custom-Built Campaigns</h3>
                    <p>No templates. Every strategy is built from scratch for your business, audience, and goals.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h3>Weekly Optimization Sprints</h3>
                    <p>We test, tweak, and scale continuously. No "set it and forget it."</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="solution-visual">
              <div className="visual-card">
                <h3>Our 90-Day Growth Framework</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-number">1</div>
                    <div>
                      <h4>Discovery & Audit</h4>
                      <p>Deep dive into your current campaigns, audience data, and competitive landscape</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-number">2</div>
                    <div>
                      <h4>Strategic Deployment</h4>
                      <p>Launch optimized campaigns across Google, Meta, and high-intent channels</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-number">3</div>
                    <div>
                      <h4>Test & Scale</h4>
                      <p>Rapid A/B testing, creative refresh, and budget reallocation to winners</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-number">4</div>
                    <div>
                      <h4>Predictable Growth</h4>
                      <p>Consistent ROAS improvement with clear path to scaling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="case-studies-section">
        <div className="container">
          <h2 className="section-title">Real Clients. Real Results.</h2>
          <div className="case-studies-grid">
            <div className="case-study">
              <div className="case-study-header">
                <div className="case-study-industry">E-commerce • Fashion</div>
                <div className="case-study-result">+412% Revenue</div>
              </div>
              <h3>From $15K to $77K Monthly Revenue in 5 Months</h3>
              <p>Mid-size fashion retailer was stuck with 1.2x ROAS. We rebuilt their entire funnel, optimized creative, and scaled profitably to 4.1x ROAS.</p>
              <div className="case-study-metrics">
                <div className="metric">
                  <span className="metric-value">47%</span>
                  <span className="metric-label">Lower CPA</span>
                </div>
                <div className="metric">
                  <span className="metric-value">4.1x</span>
                  <span className="metric-label">ROAS</span>
                </div>
              </div>
            </div>

            <div className="case-study">
              <div className="case-study-header">
                <div className="case-study-industry">SaaS • B2B</div>
                <div className="case-study-result">+267% Leads</div>
              </div>
              <h3>Tripled Qualified Leads While Cutting Cost Per Lead by 38%</h3>
              <p>B2B software company was generating expensive, low-quality leads. We shifted targeting and creative strategy, improving lead quality and volume simultaneously.</p>
              <div className="case-study-metrics">
                <div className="metric">
                  <span className="metric-value">38%</span>
                  <span className="metric-label">Lower CPL</span>
                </div>
                <div className="metric">
                  <span className="metric-value">267%</span>
                  <span className="metric-label">More Leads</span>
                </div>
              </div>
            </div>

            <div className="case-study">
              <div className="case-study-header">
                <div className="case-study-industry">Local Services</div>
                <div className="case-study-result">+523% Bookings</div>
              </div>
              <h3>Local Service Business Went from 12 to 75 Monthly Bookings</h3>
              <p>Fitness studio was relying on word-of-mouth. We launched hyper-local campaigns with compelling offers, turning them into the top-booked facility in their area.</p>
              <div className="case-study-metrics">
                <div className="metric">
                  <span className="metric-value">$23</span>
                  <span className="metric-label">Cost Per Booking</span>
                </div>
                <div className="metric">
                  <span className="metric-value">5.8x</span>
                  <span className="metric-label">ROAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Full-Funnel Ad Management</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Paid Search (Google Ads)</h3>
              <p>Capture high-intent buyers actively searching for your solution. Precision targeting, killer ad copy, and relentless optimization.</p>
            </div>
            <div className="service-card">
              <h3>Paid Social (Meta, LinkedIn, TikTok)</h3>
              <p>Build awareness, nurture interest, and drive conversions with scroll-stopping creatives and surgical audience targeting.</p>
            </div>
            <div className="service-card">
              <h3>Retargeting & Conversion Optimization</h3>
              <p>Turn browsers into buyers. Smart retargeting sequences that bring back visitors and close the deal.</p>
            </div>
            <div className="service-card">
              <h3>Landing Page & Funnel Optimization</h3>
              <p>Your ads are only as good as your landing page. We optimize every step of the journey to maximize conversions.</p>
            </div>
            <div className="service-card">
              <h3>Creative Strategy & Production</h3>
              <p>Fresh, high-performing ad creatives every month. We handle concept, design, and iteration—you just approve.</p>
            </div>
            <div className="service-card">
              <h3>Analytics & Attribution</h3>
              <p>Know exactly which campaigns, ads, and audiences drive revenue. Full transparency, zero guesswork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"Adcraze completely transformed our ad strategy. We went from barely breaking even to 4x ROAS in under 3 months. Finally, an agency that actually delivers."</p>
              <div className="testimonial-author">
                <strong>Sarah Mitchell</strong>
                <span>Founder, Luxe Apparel</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"Best decision we made this year. Our lead volume tripled, and the quality is way better. They're not just a vendor—they're a growth partner."</p>
              <div className="testimonial-author">
                <strong>James Rodriguez</strong>
                <span>CMO, CloudSync Software</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"Transparency, speed, and results. That's what you get with Adcraze. I've worked with 5 agencies before—these guys are in a different league."</p>
              <div className="testimonial-author">
                <strong>Emily Chen</strong>
                <span>Owner, FitCore Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Scale Without the Guesswork?</h2>
            <p>Book a free 30-minute strategy call. We'll audit your current campaigns, identify wasted spend, and show you exactly how we'd scale your revenue.</p>
            <a href="#contact" className="btn-primary-large">Book Your Free Strategy Call →</a>
            <div className="cta-footer">No commitment. No sales pressure. Just honest feedback and a clear growth plan.</div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Let's Talk Growth</h2>
              <p>Fill out the form and we'll get back to you within 24 hours with a custom strategy outline for your business.</p>
              <div className="contact-benefits">
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <div>Free campaign audit (worth $997)</div>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <div>Custom growth roadmap</div>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <div>No-obligation consultation</div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              {submitted && (
                <div className="success-message">
                  ✓ Thanks! We'll be in touch within 24 hours.
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Monthly Ad Budget *</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your business and goals"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">Get Your Free Strategy Call</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">ADCRAZE</div>
              <p>Performance-based digital advertising that scales revenue, not costs.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#services">Paid Search</a>
                <a href="#services">Paid Social</a>
                <a href="#services">Retargeting</a>
                <a href="#services">Analytics</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#case-studies">Case Studies</a>
                <a href="#contact">Contact</a>
                <a href="#about">About Us</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Adcraze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
