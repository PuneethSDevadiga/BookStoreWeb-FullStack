import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center px-4">
      <div className="max-w-4xl bg-white text-black dark:bg-black dark:text-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-pink-600 text-center mb-6 pt-20 md:pt-0">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">
          We’d love to hear from you! Whether you have a question or just want to say hi, feel free to drop us a message.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium bg-white text-black dark:bg-black dark:text-white">Name</label>
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full bg-white text-black dark:bg-black dark:text-gray-700 outline-none dark:outline-white rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium bg-white text-black dark:bg-black dark:text-white">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 w-full bg-white text-black dark:bg-black dark:text-gray-700 outline-none dark:outline-white rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium bg-white text-black dark:bg-black dark:text-white">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="mt-1 w-full bg-white text-black dark:bg-black dark:text-gray-700 outline-none dark:outline-white rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full font-bold bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-500 focus:ring-4 focus:ring-pink-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white text-black dark:bg-black dark:text-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-pink-500 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach us via email or visit our office.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold bg-white text-black dark:bg-black dark:text-white">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:pdxdev05@gmail.com" className="text-pink-500 hover:underline">
                    bookstore@company.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold bg-white text-black dark:bg-black dark:text-white">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+1234567890" className="text-pink-500 hover:underline">
                    +91 9876543210
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold bg-white text-black dark:bg-black dark:text-white">Address</h3>
                <p className="text-gray-600">
                  123 Udupi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
