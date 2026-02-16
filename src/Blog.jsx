import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Import the Close icon

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

// Added 'description' content for the modal view
const blogPosts = [
  { 
    id: 1, 
    date: "May 12, 2026", 
    title: "High-Functioning Anxiety: The Silent Struggle", 
    img: "https://images.unsplash.com/photo-1740645581682-bc1e8e37b0f3?q=80&w=1170&auto=format&fit=crop",
    description: "High-functioning anxiety is often invisible. On the outside, you might appear successful, organized, and calm. But on the inside, there is a constant churn of worry, fear of failure, and the feeling that you are never doing enough. This article explores the signs of high-functioning anxiety and practical steps to quiet the internal noise without sacrificing your ambition."
  },
  { 
    id: 2, 
    date: "April 03, 2026", 
    title: "Why Professional Success Doesn't Cure Burnout", 
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "We often think that once we reach a certain milestone—a promotion, a salary goal, a business launch—we will finally feel at ease. However, burnout is rarely cured by external success. True recovery requires a fundamental shift in how we relate to work, rest, and our own worthiness. Let's discuss why 'pushing through' is not the answer."
  },
  { 
    id: 3, 
    date: "March 15, 2026", 
    title: "Grounding Techniques for Panic Moments", 
    img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop",
    description: "Panic attacks can feel like a tidal wave, disconnecting you from reality. Grounding techniques are simple, physical tools designed to pull you back into the present moment. From the '5-4-3-2-1' method to diaphragmatic breathing, we outline five evidence-based strategies you can use anywhere, anytime to regain your center."
  },
  { 
    id: 4, 
    date: "Feb 20, 2026", 
    title: "Healing from Past Trauma in Adulthood", 
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1854&auto=format&fit=crop",
    description: "Trauma from the past doesn't just disappear; it often lives on in our nervous system, affecting our adult relationships and self-esteem. Healing is not about erasing the past, but about integrating it so it no longer controls your present. This piece discusses the non-linear journey of trauma recovery and the hope that lies on the other side."
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPost]);

  return (
    <div className="pt-10 bg-[#FDFCF8] relative min-h-screen">
      {/* --- Blog Header --- */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Arch Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative"
          >
             <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-t-[200px] overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1693122078320-5849c9343d31?q=80&w=685&auto=format&fit=crop" alt="Journaling" className="w-full h-full object-cover"/>
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
              {/* Added onClick to open the modal */}
              <div 
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
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

      {/* --- Article Modal / Lightbox --- */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            {/* Blurred Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
              onClick={() => setSelectedPost(null)} 
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#FDFCF8] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-[#2C3E50] hover:text-white transition duration-300"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedPost.img} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                 <p className="text-xs uppercase tracking-widest text-[#8F9E8B] mb-4 font-bold">{selectedPost.date}</p>
                 <h2 className="text-3xl md:text-4xl font-serif text-[#2C3E50] mb-6 leading-tight">{selectedPost.title}</h2>
                 <div className="w-16 h-[2px] bg-[#8F9E8B] mb-6"></div>
                 <p className="text-[#5A6B7C] text-lg leading-relaxed mb-8">
                   {selectedPost.description}
                 </p>
                 <button 
                   onClick={() => setSelectedPost(null)}
                   className="self-start border-b border-[#2C3E50] pb-1 text-sm uppercase tracking-widest text-[#2C3E50] hover:opacity-60 transition"
                 >
                   Back to Insights
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Blog;