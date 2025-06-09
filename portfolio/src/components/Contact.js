import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="min-h-screen max-w-3xl mx-auto px-4 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold mb-2 text-center text-white"
      >
        Get in touch
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl font-semibold text-purple-400 mb-8 text-center"
      >
        Contact Me
      </motion.h3>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr] gap-8 md:gap-12 lg:gap-16" style={{ maxWidth: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h4 className="text-lg font-semibold text-white">Talk to me</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v15z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <h5 className="text-white">username_@gmail.com</h5>
              </div>
              <a href="mailto:heetmehta18125@gmail.com" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.19 3.292a1 1 0 01-.174 1.043l-1.611 1.612a12.003 12.003 0 004.99 4.99l1.612-1.611a1 1 0 011.043-.174l3.292 1.19a1 1 0 01.684.95V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
              <div>
                <p className="text-sm text-gray-400">Call</p>
                <h5 className="text-white">+91 000000000</h5>
              </div>
              <a href="tel:+9664517017" target="_blank" rel="noopener noreferrer" className="ml-auto text-purple-400 hover:text-white transition-colors">Call Me</a>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.145 8.317 4.071 6.683 1.937 3.17c-1.1.823-1.741 1.98-1.741 3.308 0 1.15.51 2.182 1.339 2.782-.88-.029-1.71-.268-2.43-.641-.015 3.008 2.22 5.507 5.101 6.07-.67.188-1.372.291-2.09.291-.51 0-1.009-.06-1.49-.144.817 2.558 3.178 4.425 5.997 4.465 2.917 2.27 6.596 3.612 10.551 3.612 1.209 0 1.901-.056 2.794-.139-.941-.751-1.85-1.698-2.621-2.775z"/>
              </svg>
              <div>
                <p className="text-sm text-gray-400">Instagram</p>
                <h5 className="text-white">username</h5>
              </div>
              <a href="https://instagram.com/heet._.18" target="_blank" rel="noopener noreferrer" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className=""
        >
          <h4 className="text-lg font-semibold text-white mb-4">Write me your message</h4>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="random.email123@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact; 