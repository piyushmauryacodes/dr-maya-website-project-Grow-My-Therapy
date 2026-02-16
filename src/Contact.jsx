import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
        {children}
    </motion.div>
);

const Contact = () => {
    return (
        <div className="bg-[#FDFCF8]">
            {/* --- Header Section --- */}
            <section className="bg-[#EBECE8] pt-20 pb-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <Reveal>
                            <h1 className="text-6xl md:text-7xl font-serif text-[#2C3E50]">Let's Connect</h1>
                            <p className="text-xl italic font-serif text-[#5A6B7C]">Take the first step towards clarity.</p>
                            <p className="text-sm uppercase tracking-widest opacity-70 text-[#2C3E50]">Get in touch for a free 15-minute phone consultation.</p>

                            <div className="relative mt-12 w-full max-w-md">
                                <div className="w-[300px] h-[400px] rounded-t-[150px] overflow-hidden border-4 border-white shadow-xl">
                                    {/* Updated with a working Unsplash Image */}
                                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" className="w-full h-full object-cover" alt="Santa Monica Beach" />
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Content (Info Box) */}
                    <div className="w-full md:w-1/2 flex items-center">
                        <Reveal delay={0.2}>
                            <div className="bg-[#2C3E50] text-white p-10 md:p-14 shadow-2xl rounded-sm">
                                <p className="font-bold mb-4 uppercase text-xs tracking-widest text-[#8F9E8B]">Important:</p>
                                <p className="leading-relaxed opacity-90 font-light">
                                    To protect your privacy, please do not include sensitive health information in this form. We can discuss specific clinical concerns during our initial consultation call.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* --- Appointment Booking --- */}
            <section className="py-32 px-6 text-center bg-[#FDFCF8]">
                <Reveal>
                    <h2 className="text-5xl font-serif mb-6 text-[#2C3E50]">Book a session.</h2>
                    <p className="max-w-2xl mx-auto text-[#5A6B7C] mb-12">
                        Use the portal below to schedule your initial consultation or regular therapy session.
                    </p>
                    {/* Widget Placeholder */}
                    <div className="max-w-md mx-auto bg-white p-12 border border-[#EBECE8] shadow-sm">
                        <p className="text-center font-bold text-gray-400 tracking-widest">SIMPLEPRACTICE WIDGET</p>
                        <div className="mt-4 flex justify-center">
                            <button className="bg-[#2C3E50] text-white px-6 py-2 text-xs uppercase hover:bg-[#8F9E8B] transition">Go to Portal</button>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* --- Map & Office Info --- */}
            <section className="flex flex-col md:flex-row bg-[#8F9E8B]">
                <div className="w-full md:w-1/3 bg-[#8F9E8B] text-white p-16 flex flex-col justify-center">
                    <Reveal>
                        <h3 className="text-4xl font-serif mb-8">My Office</h3>
                        <div className="space-y-6 text-lg font-light">
                            <div>
                                <p className="font-medium">Santa Monica</p>
                                <p>123 4th Street</p>
                                <p>Santa Monica, CA 90401</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 text-[#2C3E50]">Hours</h4>
                                <p>Monday – Thursday</p>
                                <p>9am – 6pm</p>
                            </div>
                            <div>
                                <p>(310) 555-0123</p>
                                <p>contact@drmayareynolds.com</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="w-full md:w-2/3 h-[500px] md:h-auto grayscale hover:grayscale-0 transition duration-500">
                    {/* FIXED: Use a valid Google Maps Embed URL. 
               This points to Santa Monica, CA.
            */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7332480437007!2d-118.4966750234716!3d34.01210851921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d05e3f4327%3A0x6a048753f86e0691!2sSanta%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sus!4v1708100000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;