import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let localErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) localErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      localErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      localErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      localErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      localErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <>
      <section id="contact" className="max-w-6xl mx-auto px-6 pt-24 pb-12 text-center scroll-mt-20">
        <h3 className="text-3xl font-bold mb-6">Let's Build Something Together</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        <a 
          href="#contact-form-anchor" 
          className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors mb-12"
        >
          Say Hello
        </a>

        <div id="contact-form-anchor" className="max-w-xl mx-auto bg-gray-50 border border-gray-100 p-8 rounded-2xl text-left shadow-sm scroll-mt-24">
          <h4 className="text-xl font-bold mb-6 text-gray-800">Send Me a Message</h4>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium">
              🎉 Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm transition-colors focus:outline-none focus:border-blue-500 ${
                  errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm transition-colors focus:outline-none focus:border-blue-500 ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm transition-colors focus:outline-none focus:border-blue-500 resize-none ${
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm shadow-blue-100"
            >
              Submit Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} D Sharat Chandra. Built with React & Tailwind.</p>
      </footer>
    </>
  );
};

export default Contact;