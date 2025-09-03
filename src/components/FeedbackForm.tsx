import React, { useState } from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const feedback = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    };
    
    const existingFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    existingFeedback.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(existingFeedback));
    
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your feedback. We appreciate it!"
    });
    
    setFormData({ name: '', email: '', message: '', rating: 0 });
  };

  return (
    <div className="bg-black/30 border border-[#FF8C42]/20 rounded-lg p-6">
      <h3 className="text-xl font-bold text-[#FF8C42] mb-4 flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        Share Your Feedback
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#FF8C42] focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#FF8C42] focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label className="block text-white/80 mb-2">Rating</label>
          <div className="flex gap-1">
            {[1,2,3,4,5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({...formData, rating: star})}
                className={`text-2xl transition-colors ${
                  star <= formData.rating ? 'text-yellow-400' : 'text-white/20'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        
        <textarea
          placeholder="Your feedback..."
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={4}
          className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#FF8C42] focus:outline-none resize-none"
          required
        />
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;