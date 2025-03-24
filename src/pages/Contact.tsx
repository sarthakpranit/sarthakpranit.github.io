
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h1>
      
      <div className="max-w-xl mx-auto">
        {submitMessage ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {submitMessage}
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        <div className="mt-10 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>contact@sarthakpranit.com</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Social Media</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
