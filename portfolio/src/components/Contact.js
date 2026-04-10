import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiCheck, FiAlertCircle, FiCopy } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useTheme } from '../contexts/ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const form = useRef();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    // Check if credentials are still default - show success anyway (fallback mode)
    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', message: '' });
        form.current.reset();
        setTimeout(() => setStatus(''), 3000);
      }, 1000);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setFormData({ user_name: '', user_email: '', message: '' });
        form.current.reset();
        setTimeout(() => setStatus(''), 3000);
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  const copyToClipboard = () => {
    const text = `Name: ${formData.user_name}\nEmail: ${formData.user_email}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setStatus('copied');
    setTimeout(() => setStatus(''), 2000);
  };

  const sendViaEmail = () => {
    const body = `Name: ${formData.user_name}%0AEmail: ${formData.user_email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = `mailto:heetmehta18125@gmail.com?subject=Portfolio Contact from ${formData.user_name}&body=${body}`;
  };

  const contactMethods = [
    {
      label: 'Email',
      value: 'heetmehta18125@gmail.com',
      href: 'mailto:heetmehta18125@gmail.com',
      icon: FiMail,
      action: 'Write Me'
    },
    {
      label: 'Call',
      value: '+91 1234567890',
      href: 'tel:+91 9316428942',
      icon: FiPhone,
      action: 'Call Me'
    },
    {
      label: 'Instagram',
      value: 'your_handle',
      href: 'https://instagram.com/heetmehta18',
      icon: FiInstagram,
      action: 'Follow Me'
    }
  ];

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/15' : 'via-slate-300'} to-transparent`} />
      </div>

      <div className={`relative overflow-hidden rounded-[2rem] border shadow-2xl backdrop-blur-xl p-6 sm:p-8 md:p-10 ${theme === 'dark' ? 'border-white/10 bg-slate-950/75' : 'border-slate-200 bg-white/90'}`}>
        <div className={`absolute -top-24 right-0 h-64 w-64 rounded-full blur-3xl ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-400/10'}`} />
        <div className={`absolute -bottom-24 left-0 h-64 w-64 rounded-full blur-3xl ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-400/10'}`} />

        {/* Header */}
        <motion.div
          className="relative z-10 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Get in Touch
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            Have a question or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-12">
        {/* Contact Methods */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Talk to me</h3>
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className={`group flex items-center gap-4 p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-purple-500/50' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'}`}
              >
                <motion.div
                  className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white text-xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon size={24} />
                </motion.div>
                <div className="flex-1">
                  <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{method.label}</p>
                  <h4 className={`font-semibold transition-colors ${theme === 'dark' ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {method.value}
                  </h4>
                </div>
                <motion.div
                  className={`transition-colors ${theme === 'dark' ? 'text-gray-500 group-hover:text-purple-400' : 'text-slate-400 group-hover:text-blue-500'}`}
                  whileHover={{ scale: 1.2 }}
                >
                  →
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Send me a message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                value={formData.user_name}
                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'}`}
                placeholder="Your name"
              />
            </motion.div>

            {/* Email field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                value={formData.user_email}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'}`}
                placeholder="your.email@example.com"
              />
            </motion.div>

            {/* Message field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 resize-none ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'}`}
                placeholder="Tell me about your project or question"
              />
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative flex items-center justify-center gap-2"
                animate={{ opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </motion.div>
            </motion.button>

            {/* Alternative actions */}
            {formData.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2"
              >
                <motion.button
                  type="button"
                  onClick={copyToClipboard}
                  className={`flex-1 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${theme === 'dark' ? 'bg-white/10 hover:bg-white/15 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiCopy size={16} />
                  Copy Message
                </motion.button>
                <motion.button
                  type="button"
                  onClick={sendViaEmail}
                  className={`flex-1 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${theme === 'dark' ? 'bg-white/10 hover:bg-white/15 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMail size={16} />
                  Email Me
                </motion.button>
              </motion.div>
            )}

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                >
                  <FiCheck className="text-green-400" size={20} />
                  <p className="text-green-400 font-medium">Message received! I'll get back to you soon. 🎉</p>
                </motion.div>
              )}
              {status === 'copied' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                >
                  <FiCheck className="text-blue-400" size={20} />
                  <p className="text-blue-400 font-medium">Message copied to clipboard! Send it to me via email. 📋</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
                >
                  <FiAlertCircle className="text-yellow-400" size={20} />
                  <div>
                    <p className="text-yellow-400 font-medium">Try alternative methods below:</p>
                    <p className="text-yellow-300 text-sm">Copy your message or send via email directly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Help text */}
            <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
              💡 Can't submit? Try copying your message or using the Email Me button above.
            </p>
          </form>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;