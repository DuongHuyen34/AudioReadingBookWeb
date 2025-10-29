import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { texts } from "../../locales/texts";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import './SupportPage.css';
import { 
  FaHeadset, 
  FaQuestionCircle, 
  FaEnvelope, 
  FaPhone, 
  FaClock,
  FaMapMarkerAlt,
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { MdSupportAgent } from "react-icons/md";
import supportBg from '../../assets/supBg.jpg';

const SupportPage = () => {
  const { lang } = useLanguage();
  const t = texts[lang]?.support || {};
  
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Dữ liệu FAQ
  const faqData = [
    {
      question: t.faq1 || "How do I reset my password?",
      answer: t.faq1Answer || "You can reset your password by clicking on 'Forgot Password' on the login page. We'll send a reset link to your registered email address."
    },
    {
      question: t.faq2 || "Can I read books offline?",
      answer: t.faq2Answer || "Yes! You can download books for offline reading. Go to the book details page and click the download button. The book will be available in your 'My Library' section."
    },
    {
      question: t.faq3 || "How do I cancel my subscription?",
      answer: t.faq3Answer || "You can cancel your subscription anytime from the 'Account Settings' page. Go to Subscription section and click 'Cancel Subscription'. Your access will continue until the end of your billing period."
    },
    {
      question: t.faq4 || "Are there any reading limits?",
      answer: t.faq4Answer || "With a free account, you can read up to 3 books per month. Premium subscribers enjoy unlimited reading and access to all features."
    },
    {
      question: t.faq5 || "How do I report a technical issue?",
      answer: t.faq5Answer || "You can report technical issues through this support page by filling out the contact form. Please include detailed information about the problem you're experiencing."
    }
  ];

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: t.emailSupport || "Email Support",
      details: "support@readio.com",
      description: t.emailResponse || "We'll respond within 24 hours"
    },
    {
      icon: <FaPhone />,
      title: t.phoneSupport || "Phone Support",
      details: "+1 (555) 123-READ",
      description: t.phoneHours || "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <FaHeadset />,
      title: t.liveChat || "Live Chat",
      details: t.available247 || "Available 24/7",
      description: t.instantHelp || "Get instant help from our team"
    }
  ];

  const handleFAQToggle = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.thankYouMessage || 'Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="support-page">
      <Header />
      
      <main className="support-main">
        {/* Hero Section */}
        <section className="support-hero" style={{ '--support-bg': `url(${supportBg})` }}>
          <div className="support-hero-content">
            <div className="support-hero-text">
              <h1 className="support-title">
                <span className="sp-title-line sp-highlight">{t.title || "We're Here to Help"}</span>
              </h1>
              <p className="support-subtitle">
                {t.subtitle || "Get assistance with your account, technical issues, or any questions about READIO. Our support team is ready to help you."}
              </p>
            </div>
            <div className="support-hero-icon">
              <MdSupportAgent />
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="contact-methods-section">
          <div className="container" style={{'max-height': '400px'}}>
            <h2 className="section-title">{t.getInTouch || "Get in Touch"}</h2>
            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method-card">
                  <div className="contact-method-icon">
                    {method.icon}
                  </div>
                  <h3 className="contact-method-title">{method.title}</h3>
                  <p className="contact-method-details">{method.details}</p>
                  <p className="contact-method-description">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="faq-header">
              <h2 className="section-title">{t.faq || "Frequently Asked Questions"}</h2>
              <p className="section-subtitle">
                {t.faqSubtitle || "Quick answers to common questions about READIO"}
              </p>
            </div>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div 
                    className="faq-question"
                    onClick={() => handleFAQToggle(index)}
                  >
                    <span>{faq.question}</span>
                    {activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {activeFAQ === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
            <div className="container">
                <div className="contact-form-wrapper">
                    <div className="contact-form-info">
                        <h2 className="section-title">{t.sendMessage || "Send us a Message"}</h2>
                        <p className="contact-form-description">
                        {t.formDescription || "Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible."}
                        </p>
                        
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <FaMapMarkerAlt className="contact-info-icon" />
                                <div>
                                <h4>{t.ourOffice || "Our Office"}</h4>
                                <p>255 3/4 Street, Ward 17, District 11, HCMC</p>
                                </div>
                            </div>
                        
                            <div className="contact-info-item">
                                <FaClock className="contact-info-icon" />
                                <div>
                                <h4>{t.workingHours || "Working Hours"}</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>{t.followUs || "Follow Us"}</h4>
                            <div className="social-icons">
                                <a href="#" className="social-link">
                                <FaFacebook />
                                </a>
                                <a href="#" className="social-link">
                                <FaTwitter />
                                </a>
                                <a href="#" className="social-link">
                                <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{t.fullName || "Full Name"}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">{t.emailAddress || "Email Address"}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">{t.subject || "Subject"}</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t.message || "Message"}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            {t.sendMessageBtn || "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;