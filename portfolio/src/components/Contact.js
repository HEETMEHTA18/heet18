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
                <h5 className="text-white">your.email@example.com</h5>
              </div>
              <a href="mailto:your.email@example.com" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.043 0C5.39 0 .045 5.344.045 12s5.345 12 12 12 12-5.344 12-12-5.345-12-12-12zm2.326 17.236c-.105.055-.25.085-.414.085-.164 0-.307-.029-.413-.085-.106-.056-.21-.13-.313-.224-.105-.093-.2-.202-.289-.32-.09-.116-.169-.255-.236-.414-.066-.159-.115-.339-.146-.54-.03-.2-.046-.388-.046-.569 0-.236.052-.45.156-.641.105-.19.25-.333.436-.437.184-.105.379-.157.586-.157.105 0 .207.019.309.058.103.04.193.096.272.167.08.07.148.15.206.239.059.088.095.174.109.256l.012.045c.023.078.042.16.058.248.016.088.025.169.025.243 0 .04-.003.06-.009.069l-.01.038c-.013.038-.043.074-.089.106-.045.033-.115.075-.206.125-.09.049-.184.102-.283.158-.1.057-.185.1-.256.13-.07.03-.136.049-.199.058-.064.009-.12.014-.167.014zm.975 1.434c.133.2.213.318.24.355.029.036.059.08.09.13.03.05.054.088.072.113.018.025.048.062.09.112.042.05.062.086.062.105 0 .03-.006.054-.018.072-.012.019-.039.03-.078.03-.039 0-.079-.006-.117-.018-.039-.012-.072-.029-.099-.045-.029-.019-.063-.049-.104-.093-.04-.045-.075-.086-.104-.122a1.87 1.87 0 0 0-.183-.22L14 18.076l-.37-.542c-.152-.222-.23-.335-.234-.339-.012-.012-.022-.015-.03-.015a.03.03 0 0 0-.021.007c-.006.004-.008.015-.005.032.004.018.03.06.079.128.05.069.095.136.136.203zM12.044 2.103c-5.414 0-9.804 4.39-9.804 9.804s4.39 9.804 9.804 9.804 9.804-4.39 9.804-9.804-4.39-9.804-9.804-9.804zm-.014 16.448c-.987 0-1.9-.25-2.744-.743-.845-.493-1.529-1.177-2.053-2.053-.523-.876-.785-1.789-.785-2.735 0-.716.165-1.378.495-1.985.33-.607.763-1.134 1.299-1.58.536-.447 1.137-.792 1.803-1.036.666-.244 1.368-.366 2.107-.366.716 0 1.377.164 1.984.494.607.33 1.133.763 1.579 1.299.447.536.792 1.137 1.036 1.802.244.666.366 1.368.366 2.107 0 .987-.25 1.9-.742 2.744-.493.845-1.177 1.529-2.053 2.053-.876.523-1.789.785-2.736.785z"/>
              </svg>
              <div>
                <p className="text-sm text-gray-400">Whatsapp</p>
                <h5 className="text-white">+123 456 7890</h5>
              </div>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.145 8.317 4.071 6.683 1.937 3.17c-1.1.823-1.741 1.98-1.741 3.308 0 1.15.51 2.182 1.339 2.782-.88-.029-1.71-.268-2.43-.641-.015 3.008 2.22 5.507 5.101 6.07-.67.188-1.372.291-2.09.291-.51 0-1.009-.06-1.49-.144.817 2.558 3.178 4.425 5.997 4.465 2.917 2.27 6.596 3.612 10.551 3.612 1.209 0 1.901-.056 2.794-.139-.941-.751-1.85-1.698-2.621-2.775z"/>
              </svg>
              <div>
                <p className="text-sm text-gray-400">Twitter</p>
                <h5 className="text-white">yourtwitterhandle</h5>
              </div>
              <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
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
                placeholder="your.email@example.com"
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