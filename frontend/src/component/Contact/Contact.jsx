import React from 'react';

const Contact = () => {
    return (
        <div className="p-10 font-serif max-w-4xl mx-auto">
            <h1 className="text-4xl mb-6 border-b-2 border-gray-200 pb-2">Contact Us</h1>
            <p className="text-lg mb-6">
                Have questions or feedback? We'd love to hear from you!
            </p>
            <form className="flex flex-col gap-4 max-w-lg">
                <label className="flex flex-col">
                    <span className="mb-1 font-bold text-gray-700">Name</span>
                    <input type="text" className="border border-gray-300 p-2 rounded" placeholder="Your Name" />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1 font-bold text-gray-700">Email</span>
                    <input type="email" className="border border-gray-300 p-2 rounded" placeholder="Your Email" />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1 font-bold text-gray-700">Message</span>
                    <textarea className="border border-gray-300 p-2 rounded h-32" placeholder="Your Message"></textarea>
                </label>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
