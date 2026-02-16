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

const blogPosts = [
  { id: 1, date: "May 12, 2026", title: "High-Functioning Anxiety: The Silent Struggle", img: "https://images.unsplash.com/photo-1740645581682-bc1e8e37b0f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, date: "April 03, 2026", title: "Why Professional Success Doesn't Cure Burnout", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, date: "March 15, 2026", title: "Grounding Techniques for Panic Moments", img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, date: "Feb 20, 2026", title: "Healing from Past Trauma in Adulthood", img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1854&auto=format&fit=crop" },
];

const Blog = () => {
  return (
    <div className="pt-10 bg-[#FDFCF8]">
      {/* --- Blog Header --- */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Arch Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative"
          >
             <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-t-[200px] overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1693122078320-5849c9343d31?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Journaling" className="w-full h-full object-cover"/>
             </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
             className="w-full md:w-1/2 space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C3E50]">Insights & Resources</h1>
            <p className="text-lg text-[#5A6B7C] leading-relaxed max-w-md">
              A collection of thoughts on healing, anxiety, and finding balance in a fast-paced world. <br/>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Blog Grid --- */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {blogPosts.map((post) => (
            <Reveal key={post.id}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 h-[400px] rounded-sm shadow-md">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                </div>
                <p className="text-xs uppercase tracking-widest text-[#8F9E8B] mb-2 font-bold">{post.date}</p>
                <h3 className="text-3xl font-serif mb-4 text-[#2C3E50] group-hover:text-[#8F9E8B] transition">{post.title}</h3>
                <span className="border-b border-[#2C3E50] pb-1 uppercase text-xs tracking-widest text-[#2C3E50] hover:opacity-60 transition">Read Article</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- Subscribe Section --- */}
      <section className="bg-[#2C3E50] text-white py-24 px-6 text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto border border-[#FDFCF8]/30 p-12 md:p-16 relative">
            <h2 className="text-4xl font-serif mb-4">Stay Connected</h2>
            <p className="mb-8 opacity-90 font-light">Sign up to receive monthly insights and practice updates.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="email" placeholder="Email Address" className="w-full bg-[#FDFCF8] text-[#2C3E50] px-4 py-3 outline-none" />
              <button className="bg-[#8F9E8B] text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#FDFCF8] hover:text-[#2C3E50] transition">Subscribe</button>
            </div>
            <p className="mt-4 text-[10px] opacity-70">Respecting your inbox and your privacy.</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Blog;