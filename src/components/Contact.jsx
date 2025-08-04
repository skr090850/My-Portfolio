import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'; // toast ko import karein
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn, fadeIn } from '../utils/motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

// Social media links ka data
const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={32} />, url: 'https://github.com/skr090850' },
    { name: 'LinkedIn', icon: <FaLinkedin size={32} />, url: 'https://linkedin.com/in/-suraj-kumar-' },
    { name: 'Instagram', icon: <FaInstagram size={32} />, url: 'https://www.instagram.com/' },
    { name: 'Twitter', icon: <FaTwitter size={32} />, url: 'https://twitter.com/' },
    { name: 'Facebook', icon: <FaFacebook size={32} />, url: 'https://www.facebook.com/' },
];

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.send(serviceID, templateID, 
            {
                from_name: form.name,
                to_name: 'Suraj Kumar',
                from_email: form.email,
                to_email: 'skr090850@gmail.com',
                message: form.message,
            }, 
            publicKey
        )
        .then(() => {
            setLoading(false);
            // FIX: alert() ki jagah toast.success() ka istemal
            toast.success('Thank you! I will get back to you soon.');
            setForm({ name: '', email: '', message: '' });
        }, (error) => {
            setLoading(false);
            console.error(error);
            // FIX: alert() ki jagah toast.error() ka istemal
            toast.error('Ahh, something went wrong. Please try again.');
        });
    };

    return (
        <div className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                {/* Contact Form Card */}
                <motion.div 
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 max-w-3xl mx-auto"
                >
                    <p className="text-slate-400 sm:text-[18px] text-[14px] uppercase tracking-wider">Get in touch</p>
                    <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col gap-8'
                    >
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className='bg-slate-700/50 py-4 px-6 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your web address?"
                                className='bg-slate-700/50 py-4 px-6 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium'
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='What you want to say?'
                                className='bg-slate-700/50 py-4 px-6 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium'
                                required
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-cyan-500 hover:bg-cyan-600 py-3 px-8 rounded-xl outline-none w-fit text-slate-900 font-bold shadow-md'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </motion.div>

                {/* Social Media Icons Section - Moved here */}
                <motion.div 
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className="flex justify-center items-center gap-6 mt-16"
                >
                    {socialLinks.map((social) => (
                        <a 
                            key={social.name}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-300 hover:text-cyan-400 transition-colors transform hover:scale-110" 
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
