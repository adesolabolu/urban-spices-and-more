import { BRAND } from '../assets';

export function Footer() {
  return (
    <footer className="bg-[#151515] text-cream py-16 border-t border-onyx">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 text-center max-w-2xl">
          Ready to make your next event <i className="text-brand-red">unforgettable</i>?
        </h2>
        
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-red text-white px-10 py-5 rounded-full text-lg font-medium tracking-wide hover:bg-white hover:text-onyx transition-all duration-300 mb-16 shadow-2xl"
        >
          Book Your Experience
        </a>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-sm text-cream/50 font-light">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
