import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-[#FDFCF8] text-[#2C3E50] font-sans selection:bg-[#D6CFC7] min-h-screen flex flex-col">
      
      {/* --- Navigation --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 sticky top-0 bg-[#FDFCF8]/95 backdrop-blur-md z-50 border-b border-[#2C3E50]/5">
        <Link to="/" className="text-2xl font-serif font-semibold tracking-tight text-[#2C3E50]">Dr. Maya Reynolds, PsyD</Link>
        <div className="hidden md:flex space-x-10 uppercase text-xs tracking-[0.15em] font-medium text-[#5A6B7C]">
          <Link to="/" className="hover:text-[#8F9E8B] transition duration-300">Home</Link>
          <Link to="/blog" className="hover:text-[#8F9E8B] transition duration-300">Insights</Link>
          <Link to="/contact" className="hover:text-[#8F9E8B] transition duration-300">Contact</Link>
        </div>
        <button className="md:hidden text-[#2C3E50]">Menu</button>
      </nav>

      {/* --- Dynamic Page Content --- */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- Footer --- */}
      <footer className="bg-[#2C3E50] text-[#FDFCF8] pt-20 pb-10 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 space-y-4">
            <h3 className="text-2xl font-serif italic">Maya Reynolds, PsyD</h3>
            <div className="text-sm space-y-2 opacity-80 font-light">
              <p>Licensed Clinical Psychologist</p>
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <br />
              <p className="hover:text-[#8F9E8B] transition cursor-pointer">contact@drmayareynolds.com</p>
              <p>(310) 555-0123</p>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#8F9E8B]">Practice Hours</h4>
            <div className="text-sm opacity-80 space-y-2 font-light">
              <p>Mon - Thu: 9am - 6pm</p>
              <p>Fri: 9am - 2pm</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#8F9E8B]">Navigation</h4>
            <div className="text-sm opacity-80 space-y-2 flex flex-col font-light">
              <Link to="/" className="hover:text-[#8F9E8B] transition">Home</Link>
              <Link to="/contact" className="hover:text-[#8F9E8B] transition">Book Consultation</Link>
              <Link to="/blog" className="hover:text-[#8F9E8B] transition">Blog & Resources</Link>
            </div>
          </div>
          <div className="col-span-1">
             <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#8F9E8B]">Client Portal</h4>
             <p className="text-sm opacity-80 font-light mb-4">Existing clients can log in to manage appointments.</p>
             <button className="border border-[#FDFCF8] px-6 py-2 text-xs uppercase hover:bg-[#8F9E8B] hover:border-[#8F9E8B] transition">Client Login</button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#FDFCF8]/20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-50 gap-4">
            <div className="flex gap-6 flex-wrap justify-center">
                <a href="#">Privacy Policy</a>
                <a href="#">Good Faith Estimate</a>
                <a href="#">Terms of Service</a>
            </div>
            <p>© 2026 Maya Reynolds, PsyD. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;