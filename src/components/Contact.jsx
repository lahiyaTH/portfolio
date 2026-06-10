import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-electricBlue" />,
      label: 'Phone Number',
      value: '0776681037',
      link: 'tel:0776681037'
    },
    {
      icon: <Mail className="w-5 h-5 text-electricBlue" />,
      label: 'Email Address',
      value: 'info@aevondigitalsolutions.com',
      link: 'mailto:info@aevondigitalsolutions.com'
    },
    {
      icon: <MapPin className="w-5 h-5 text-electricBlue" />,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Globe className="w-5 h-5" />, href: '#', label: 'Aevon Web' }
  ];

  return (
    <section id="contact" className="relative py-24 border-t border-white/5 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 reveal">
          <span className="text-electricBlue font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-[2px] bg-electricBlue mt-4 shadow-electric-glow"></div>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-8 reveal-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
              Let's Discuss Your <br />
              <span className="text-electricBlue">Next Digital Solution</span>
            </h3>

            <p className="text-sm text-slateGray-light leading-relaxed max-w-sm">
              Whether you need a bespoke business website, high-performance marketing templates, vector brand designs, or custom AI workflow automations, reach out today to discuss how Aevon Digital Solutions can assist.
            </p>

            {/* Direct Details Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.link}
                  className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-electricBlue/30 select-text"
                >
                  <div className="w-10 h-10 rounded-lg bg-electricBlue/10 border border-electricBlue/20 flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slateGray-light uppercase font-semibold tracking-wider">
                      {info.label}
                    </span>
                    <p className="text-sm font-semibold text-white block mt-0.5">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Channels */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-slateGray-light uppercase font-semibold tracking-wider self-start">
                Connect Socially
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:text-electricBlue hover:border-electricBlue/50 hover:shadow-electric-glow flex items-center justify-center transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 reveal-right">
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-xl relative overflow-hidden">
              
              {/* Success Notification Banner */}
              {submitted && (
                <div className="absolute inset-0 bg-[#0d0e12]/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-[fadeIn_0.3s_ease-out_forwards]">
                  <CheckCircle className="w-14 h-14 text-green-400 mb-4 animate-bounce" />
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slateGray-light max-w-sm">
                    Thank you for reaching out. Lahiru will review your inquiry and get back to you shortly at the email address provided.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 select-text">
                
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-start">
                    <label htmlFor="name" className="text-xs font-semibold text-white/80 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/5 border border-white/5 focus:border-electricBlue/50 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-xs font-semibold text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white/5 border border-white/5 focus:border-electricBlue/50 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col items-start">
                  <label htmlFor="subject" className="text-xs font-semibold text-white/80 mb-2">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry"
                    className="w-full bg-white/5 border border-white/5 focus:border-electricBlue/50 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col items-start">
                  <label htmlFor="message" className="text-xs font-semibold text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Describe your project requirements..."
                    className="w-full bg-white/5 border border-white/5 focus:border-electricBlue/50 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-sm select-none disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 rounded-full border-2 border-darkBg border-t-transparent animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
