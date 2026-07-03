import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section active">
      <div className="container">
        <div className="section-eyebrow">Connect</div>
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info-panel">
            {/* Office */}
            <div className="contact-method-card">
              <div className="contact-icon"><i className="fas fa-building"></i></div>
              <div className="contact-details">
                <h4>Chennai Office</h4>
                <p>Advocate Chambers, George Town (Madras Parrys), Chennai - 600001, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-method-card">
              <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="contact-details">
                <h4>General Helpline</h4>
                <p>For free legal aid queries or media statements:<br />
                <a href="tel:#">+91 98400 XXXXX</a> (Press/Urgent Only)</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-method-card">
              <div className="contact-icon"><i className="far fa-envelope"></i></div>
              <div className="contact-details">
                <h4>Official Email</h4>
                <p>Send official representations and press invitations:<br />
                <a href="mailto:info@ashvathaman.in">info@ashvathaman.in</a></p>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name">Full Name *</label>
                <input 
                  type="text" 
                  id="form-name" 
                  className="form-control" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="form-email">Email Address *</label>
                <input 
                  type="email" 
                  id="form-email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="form-subject">Subject</label>
                <input 
                  type="text" 
                  id="form-subject" 
                  className="form-control" 
                  placeholder="Subject of message" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-message">Message *</label>
                <textarea 
                  id="form-message" 
                  className="form-control" 
                  placeholder="How can we help you?" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary btn-submit"
                disabled={status === 'loading'}
                style={{
                  backgroundColor: status === 'success' ? 'var(--flag-green)' : '',
                  backgroundImage: status === 'success' ? 'none' : ''
                }}
              >
                {status === 'idle' && (
                  <>SEND SECURE MESSAGE <i className="fas fa-paper-plane" style={{ fontSize: '0.8rem', marginLeft: '8px' }}></i></>
                )}
                {status === 'loading' && (
                  <><i className="fas fa-spinner fa-spin"></i> SENDING...</>
                )}
                {status === 'success' && (
                  <><i className="fas fa-check"></i> MESSAGE SENT!</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
