import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Helper Components ---
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const AccordionItem = ({ title, answer, isOpen, onClick }) => (
  <div className="border-b border-[#2C3E50]/20">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-6 text-left hover:text-[#8F9E8B] transition duration-300"
    >
      <span className="text-xl font-serif text-[#2C3E50]">{title}</span>
      {isOpen ? <Minus size={20} className="text-[#8F9E8B]" /> : <Plus size={20} className="text-[#8F9E8B]" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-6 pt-2 text-[#5A6B7C] font-sans text-base leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openBackground, setOpenBackground] = useState(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const toggleBg = (idx) => setOpenBackground(openBackground === idx ? null : idx);

  // Images from Drive Links (Converted to displayable URLs)
  const doctorImg = "https://lh3.googleusercontent.com/d/1koVGhvD8mkiRXRukqrklo0HbB48p9PIa";
  const officeImg1 = "https://lh3.googleusercontent.com/d/1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW";
  const officeImg2 = "https://lh3.googleusercontent.com/d/1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy";
  
  const coffeeImg = "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2000&auto=format&fit=crop";

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center px-6 md:px-12 gap-12 max-w-7xl mx-auto pt-12 md:pt-0">
        {/* Left: Image (Calm, grounding) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-[450px] aspect-[3/4]">
            {/* Arch Mask */}
            <div className="absolute inset-0 rounded-t-[225px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={doctorImg}
                alt="Calm ocean view in Santa Monica"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-[#2C3E50]">
            Reconnect with <br />
            <span className="italic text-[#8F9E8B]">your true self.</span>
          </h1>
          <p className="text-lg tracking-wide text-[#5A6B7C] uppercase text-xs font-semibold">
            Licensed Clinical Psychologist | Santa Monica, CA
          </p>
          <p className="text-lg text-[#2C3E50]/80 leading-relaxed max-w-lg mx-auto md:mx-0">
             Specialized therapy for high-achieving adults navigating anxiety, burnout, and the lingering effects of past experiences.
          </p>
          
          <Link to="/contact">
            <button className="group bg-[#2C3E50] text-white px-8 py-4 rounded-sm hover:bg-[#8F9E8B] transition-all duration-300 uppercase text-xs tracking-[0.2em] flex items-center gap-4 mx-auto md:mx-0 shadow-lg">
              Begin Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* --- Intro Split Section --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#2C3E50]">Functional on the outside, exhausted on the inside?</h2>
              <div className="w-24 h-[2px] bg-[#8F9E8B] my-6"></div>
              <p className="text-lg leading-relaxed text-[#5A6B7C]">
                Many of the people I work with are high-achieving, thoughtful, and self-aware. You might keep it together professionally, but internally feel stuck in overthinking, on edge, or always bracing for something to go wrong.
              </p>
              <p className="text-lg leading-relaxed text-[#5A6B7C]">
                I offer a space to slow down, process the impact of past experiences, and develop sustainable ways of living and working.
              </p>
              <Link to="/contact" className="inline-block border-b-2 border-[#2C3E50] pb-1 uppercase text-sm tracking-widest mt-6 hover:text-[#8F9E8B] hover:border-[#8F9E8B] transition">
                READ MORE ABOUT MY APPROACH
              </Link>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2">
            <Reveal delay={0.2}>
              <img
                src={coffeeImg}
                alt="Mindfulness moment"
                className="w-full h-auto object-cover shadow-xl rounded-sm"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Specialties (Based on Profile) --- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <Reveal><h2 className="text-4xl md:text-5xl font-serif text-center mb-6 text-[#2C3E50]">Areas of Focus</h2></Reveal>
        <Reveal><p className="text-center text-[#5A6B7C] max-w-2xl mx-auto mb-20">Integrating evidence-based methods like CBT, EMDR, and mindfulness to help you find balance.</p></Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { 
                title: "Anxiety & Overwhelm", 
                desc: "For those who feel constantly 'on.' We work to soothe the nervous system and quiet the cycle of worry and tension.",
                img: "https://images.unsplash.com/photo-1650850048713-5460c8f143ab?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            },
            { 
                title: "Trauma & Healing", 
                desc: "Whether it's a single incident or complex patterns from childhood, we pace the work carefully to rebuild safety and resilience.",
                img: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2000&auto=format&fit=crop" 
            },
            { 
                title: "Burnout & Perfectionism", 
                desc: "Reconnect with yourself after years of pushing through stress. Ideal for entrepreneurs and creatives feeling disconnected.",
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop" 
            }
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                {/* Circular Image Mask */}
                <div className="w-72 h-72 rounded-full overflow-hidden mb-8 border-8 border-[#FDFCF8] shadow-xl relative">
                  <div className="absolute inset-0 bg-[#2C3E50]/20 group-hover:bg-transparent transition duration-500 z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-[#2C3E50]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5A6B7C] max-w-xs">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- NEW SECTION: Our Office (Custom Addition) --- */}
      <section className="bg-[#EBECE8] py-32 px-6 md:px-12">
         <div className="max-w-7xl mx-auto">
            <Reveal>
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Left: Copy */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-4xl font-serif text-[#2C3E50] mb-6">A Calm Space for Healing.</h2>
                        <div className="w-16 h-[2px] bg-[#8F9E8B] mb-8"></div>
                        <p className="text-[#5A6B7C] text-lg leading-relaxed mb-6">
                            Environment matters. My Santa Monica office is designed to be a quiet, private refuge from the noise of the city. 
                        </p>
                        <p className="text-[#5A6B7C] text-lg leading-relaxed mb-6">
                             With natural light and a comfortable, uncluttered aesthetic, the space itself is intended to help you feel grounded the moment you walk through the door.
                        </p>
                        <ul className="text-sm font-semibold uppercase tracking-widest text-[#2C3E50] space-y-3 mt-8">
                            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#8F9E8B] rounded-full"></span>In-Person in Santa Monica</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#8F9E8B] rounded-full"></span>Secure Telehealth Available</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#8F9E8B] rounded-full"></span>Private & Confidential</li>
                        </ul>
                    </div>
                    
                    {/* Right: Images Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-6">
                        <div className="mt-12">
                             <img src={officeImg1} alt="Dr. Maya Reynolds Therapy Office Seating" className="w-full h-[400px] object-cover rounded-t-[100px] shadow-lg border-4 border-white" />
                        </div>
                        <div>
                             <img src={officeImg2} alt="Dr. Maya Reynolds Office Decor" className="w-full h-[400px] object-cover rounded-b-[100px] shadow-lg border-4 border-white" />
                        </div>
                    </div>
                </div>
            </Reveal>
         </div>
      </section>

      {/* --- "You don't have to do this alone" --- */}
      <section className="bg-[#D6CFC7]/20 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1766808982424-86d5200fa152?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Woman looking peaceful"
                className="w-full h-[600px] object-cover rounded-sm shadow-md"
              />
            </Reveal>
          </div>
          <div className="w-full md:w-1/2">
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C3E50]">You don't have to carry it all alone.</h2>
              <p className="text-lg mb-8 text-[#5A6B7C]">If you are navigating any of these, there is a path forward:</p>

              <ul className="space-y-4 mb-10">
                {[
                  "A constant sense of internal pressure or perfectionism",
                  "Difficulty relaxing or feeling safe in your body",
                  "Impact of past trauma on current relationships",
                  "Professional burnout and loss of creativity",
                  "Anxiety that feels unmanageable despite your success"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#2C3E50]">
                    <span className="mt-2 w-1.5 h-1.5 bg-[#8F9E8B] rounded-full flex-shrink-0"></span>
                    <span className="text-lg opacity-80">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-8 font-serif italic text-xl text-[#2C3E50]">
                "Therapy works best when you feel respected, understood, and actively involved in the process."
              </p>

              <Link to="/contact">
                <button className="border border-[#2C3E50] text-[#2C3E50] px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#2C3E50] hover:text-white transition duration-300">
                  Work With Me →
                </button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Bio Section (Dr. Maya) --- */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2C3E50]">Hi, I'm Dr. Maya.</h2>
            <h3 className="text-md uppercase tracking-widest text-[#8F9E8B] font-bold mb-6">Licensed Clinical Psychologist</h3>
            <p className="text-lg leading-relaxed text-[#5A6B7C] mb-6">
              I’m a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            </p>
            <p className="text-lg leading-relaxed text-[#5A6B7C] mb-8">
               I take a warm, collaborative, and grounded approach. My goal isn't just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself.
            </p>
            <Link to="/contact">
              <button className="bg-[#8F9E8B] text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#2C3E50] transition shadow-lg">
                Let's Connect →
              </button>
            </Link>
          </Reveal>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Reveal delay={0.2}>
            {/* Arch Image Right */}
            <div className="relative w-[300px] h-[450px]">
              <div className="absolute inset-0 rounded-t-[150px] overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={doctorImg}
                  alt="Dr. Maya Reynolds"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 bg-[#8F9E8B]">
                 {/* Abstract/Texture for decoration */}
                 <div className="w-full h-full bg-[#8F9E8B] opacity-80 flex items-center justify-center text-white font-serif italic text-2xl">PsyD</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="bg-[#FDFCF8] py-32 px-6 md:px-12 border-t border-[#2C3E50]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3">
            <Reveal>
              <h2 className="text-4xl font-serif mb-6 text-[#2C3E50]">Common Questions</h2>
              <p className="text-[#5A6B7C] mb-8">
                Therapy is an investment in your well-being. Here are some answers to help you decide if we are a good fit.
              </p>
              <img src="https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=2000&auto=format&fit=crop" className="w-full h-[300px] object-cover grayscale opacity-80 rounded-sm" alt="Calm texture" />
            </Reveal>
          </div>
          <div className="w-full md:w-2/3">
            <Reveal delay={0.2}>
              <div className="space-y-2">
                <AccordionItem
                    title="Do you offer In-Person or Online sessions?"
                    answer="I offer both. My office is located in Santa Monica for in-person sessions. I also provide secure telehealth video sessions for clients located anywhere in California."
                    isOpen={openFaq === 0}
                    onClick={() => toggleFaq(0)}
                />
                <AccordionItem
                    title="What is your approach to trauma?"
                    answer="My approach is paced carefully, emphasizing safety and stabilization first. We don't rush into the deep end. I use evidence-based modalities like EMDR and somatic techniques to help regulate your nervous system."
                    isOpen={openFaq === 1}
                    onClick={() => toggleFaq(1)}
                />
                 <AccordionItem
                    title="Do you take insurance?"
                    answer="I am an out-of-network provider. This allows us to focus on your needs rather than insurance limitations. I can provide a superbill for you to submit to your insurance for potential reimbursement."
                    isOpen={openFaq === 2}
                    onClick={() => toggleFaq(2)}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Professional Background (Simple) --- */}
      <section className="py-24 px-6 bg-[#EBECE8]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-serif text-center mb-12 text-[#2C3E50]">Professional Background</h2>
            <div className="bg-[#FDFCF8] p-8 shadow-sm rounded-sm">
               <AccordionItem title="Education & Training" answer="Doctor of Psychology (PsyD) in Clinical Psychology. Extensive training in Trauma-Informed Care, CBT, and Mindfulness-Based Stress Reduction." isOpen={openBackground === 0} onClick={() => toggleBg(0)} />
               <AccordionItem title="Licensure" answer="Licensed Clinical Psychologist in the state of California." isOpen={openBackground === 1} onClick={() => toggleBg(1)} />
               <AccordionItem title="Memberships" answer="American Psychological Association (APA), California Psychological Association." isOpen={openBackground === 2} onClick={() => toggleBg(2)} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#2C3E50] text-[#FDFCF8] py-28 px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Reclaim your peace.</h2>
          <p className="mb-12 max-w-xl mx-auto text-lg opacity-80 leading-relaxed font-light">
            Therapy can be a space to slow down, reconnect, and build a life that feels sustainable. 
            I look forward to speaking with you.
          </p>
          <Link to="/contact">
            <button className="bg-transparent border border-[#FDFCF8] px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-[#FDFCF8] hover:text-[#2C3E50] transition duration-300">
              Schedule Consultation →
            </button>
          </Link>
        </Reveal>
      </section>
    </>
  );
};

export default Home;