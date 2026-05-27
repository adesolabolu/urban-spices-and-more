import React, { useState } from 'react';
import { BRAND } from '../assets';

export function Footer() {
  const [formData, setFormData] = useState({
    eventType: '',
    guests: '',
    date: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Urban Spices and More, I'd like to book an event:\n\nType of Event: ${formData.eventType || 'Not specified'}\nGuests: ${formData.guests || 'Not specified'}\nDate: ${formData.date || 'Not specified'}\nAdditional Info: ${formData.additionalInfo || 'None'}`;
    const url = `https://wa.me/2348032492536?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-white text-onyx py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center max-w-2xl">
          Reserve Your Table Or Plan Your Event Today!
        </h2>
        
        <form onSubmit={handleBook} className="w-full max-w-2xl bg-[#FFFDF8] p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 mb-16 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="eventType" className="font-display font-medium text-sm text-charcoal">Type of Event</label>
              <select 
                id="eventType"
                name="eventType" 
                value={formData.eventType} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#F6A33C] transition-colors"
                required
              >
                <option value="" disabled>Select event type</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Private Dinner">Private Dinner</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="guests" className="font-display font-medium text-sm text-charcoal">Persons Expected</label>
              <input 
                type="number" 
                id="guests"
                name="guests" 
                value={formData.guests} 
                onChange={handleChange}
                placeholder="e.g. 50" 
                min="1"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#F6A33C] transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="font-display font-medium text-sm text-charcoal">Date of the Event</label>
            <input 
              type="date" 
              id="date"
              name="date" 
              value={formData.date} 
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#F6A33C] transition-colors"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="additionalInfo" className="font-display font-medium text-sm text-charcoal">Additional Info (Optional)</label>
            <textarea 
              id="additionalInfo"
              name="additionalInfo" 
              value={formData.additionalInfo} 
              onChange={handleChange}
              placeholder="Any specific requests or dietary requirements?" 
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#F6A33C] transition-colors resize-none"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#F6A33C] text-white px-10 py-5 rounded-full text-lg font-display font-medium tracking-wide hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:-translate-y-1 mt-4"
          >
            Book Your Experience
          </button>
        </form>

        <div className="w-full h-px bg-gray-100 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-sm text-charcoal font-sans">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-red transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
