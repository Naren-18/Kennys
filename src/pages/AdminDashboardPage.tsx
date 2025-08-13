import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, MessageSquare, Calendar, Users, Mail, Phone, MapPin, Clock, Trash2, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  createdAt: string;
}

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  rating?: number;
  createdAt: string;
}

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'feedback' | 'reservations'>('reservations');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [selectedItem, setSelectedItem] = useState<Reservation | Feedback | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    const session = localStorage.getItem('adminSession');
    if (!session) {
      navigate('/admin/login');
      return;
    }

    // Load data
    loadReservations();
    loadFeedback();
  }, [navigate]);

  const loadReservations = () => {
    const stored = localStorage.getItem('reservations');
    if (stored) {
      setReservations(JSON.parse(stored));
    }
  };

  const loadFeedback = () => {
    const stored = localStorage.getItem('feedback');
    if (stored) {
      setFeedback(JSON.parse(stored));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."
    });
    navigate('/admin/login');
  };

  const deleteReservation = (id: string) => {
    const updated = reservations.filter(r => r.id !== id);
    setReservations(updated);
    localStorage.setItem('reservations', JSON.stringify(updated));
    toast({
      title: "Reservation Deleted",
      description: "The reservation has been removed."
    });
  };

  const deleteFeedback = (id: string) => {
    const updated = feedback.filter(f => f.id !== id);
    setFeedback(updated);
    localStorage.setItem('feedback', JSON.stringify(updated));
    toast({
      title: "Feedback Deleted",
      description: "The feedback has been removed."
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-kenny-dark">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-[#FF8C42]/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Kenny's Bar Logo" 
              className="w-12 h-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-[#FF8C42]">Kenny's Admin</h1>
              <p className="text-white/60 text-sm">Management Dashboard</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black/30 border-r border-[#FF8C42]/20 min-h-[calc(100vh-80px)]">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab('reservations')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'reservations'
                  ? 'bg-[#FF8C42] text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Calendar className="h-5 w-5" />
              Reservations
              <span className="ml-auto bg-white/20 px-2 py-1 rounded-full text-xs">
                {reservations.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('feedback')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'feedback'
                  ? 'bg-[#FF8C42] text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              Feedback
              <span className="ml-auto bg-white/20 px-2 py-1 rounded-full text-xs">
                {feedback.length}
              </span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'reservations' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Table Reservations</h2>
                <div className="text-white/60">
                  Total: {reservations.length} reservations
                </div>
              </div>

              <div className="grid gap-4">
                {reservations.length === 0 ? (
                  <div className="text-center py-12 text-white/60">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No reservations yet</p>
                  </div>
                ) : (
                  reservations.map((reservation) => (
                    <div key={reservation.id} className="bg-black/30 border border-[#FF8C42]/20 rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-lg font-semibold text-white">{reservation.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              reservation.location === 'bangalore' 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'bg-purple-500/20 text-purple-400'
                            }`}>
                              {reservation.location === 'bangalore' ? 'Bengaluru' : 'Hyderabad'}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-white/70">
                              <Mail className="h-4 w-4 text-[#FF8C42]" />
                              {reservation.email}
                            </div>
                            <div className="flex items-center gap-2 text-white/70">
                              <Phone className="h-4 w-4 text-[#FF8C42]" />
                              {reservation.phone}
                            </div>
                            <div className="flex items-center gap-2 text-white/70">
                              <Calendar className="h-4 w-4 text-[#FF8C42]" />
                              {reservation.date} at {reservation.time}
                            </div>
                            <div className="flex items-center gap-2 text-white/70">
                              <Users className="h-4 w-4 text-[#FF8C42]" />
                              {reservation.guests} guests
                            </div>
                          </div>
                          
                          {reservation.occasion && (
                            <div className="mt-3 text-white/60">
                              <strong>Occasion:</strong> {reservation.occasion}
                            </div>
                          )}
                          
                          <div className="mt-3 text-xs text-white/40">
                            Submitted: {formatDate(reservation.createdAt)}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedItem(reservation)}
                            className="p-2 bg-[#FF8C42]/20 hover:bg-[#FF8C42]/30 text-[#FF8C42] rounded-lg transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteReservation(reservation.id)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Customer Feedback</h2>
                <div className="text-white/60">
                  Total: {feedback.length} messages
                </div>
              </div>

              <div className="grid gap-4">
                {feedback.length === 0 ? (
                  <div className="text-center py-12 text-white/60">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No feedback yet</p>
                  </div>
                ) : (
                  feedback.map((item) => (
                    <div key={item.id} className="bg-black/30 border border-[#FF8C42]/20 rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            {item.rating && (
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={`text-sm ${
                                    i < item.rating! ? 'text-yellow-400' : 'text-white/20'
                                  }`}>
                                    ★
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          // In reservations section
                          <div className="flex items-center gap-2 text-white/70">
                            <Mail className="h-4 w-4 text-[#FF8C42]" />
                            {reservation.email}
                          </div>
                          
                          // In feedback section  
                          <div className="flex items-center gap-2 text-white/70 mb-3">
                            <Mail className="h-4 w-4 text-[#FF8C42]" />
                            {item.email}
                          </div>
                          
                          <div className="text-white/80 mb-3">
                            {item.message}
                          </div>
                          
                          <div className="text-xs text-white/40">
                            Submitted: {formatDate(item.createdAt)}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedItem(item)}
                            className="p-2 bg-[#FF8C42]/20 hover:bg-[#FF8C42]/30 text-[#FF8C42] rounded-lg transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteFeedback(item.id)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-kenny-dark border border-[#FF8C42]/30 rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#FF8C42]">
                {'guests' in selectedItem ? 'Reservation Details' : 'Feedback Details'}
              </h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4 text-white">
              <div>
                <strong className="text-[#FF8C42]">Name:</strong> {selectedItem.name}
              </div>
              <div>
                <strong className="text-[#FF8C42]">Email:</strong> {selectedItem.email}
              </div>
              
              {'guests' in selectedItem ? (
                <>
                  <div>
                    <strong className="text-[#FF8C42]">Phone:</strong> {selectedItem.phone}
                  </div>
                  <div>
                    <strong className="text-[#FF8C42]">Location:</strong> {selectedItem.location === 'bangalore' ? 'Bengaluru' : 'Hyderabad'}
                  </div>
                  <div>
                    <strong className="text-[#FF8C42]">Date & Time:</strong> {selectedItem.date} at {selectedItem.time}
                  </div>
                  <div>
                    <strong className="text-[#FF8C42]">Guests:</strong> {selectedItem.guests}
                  </div>
                  {selectedItem.occasion && (
                    <div>
                      <strong className="text-[#FF8C42]">Occasion:</strong> {selectedItem.occasion}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {selectedItem.rating && (
                    <div>
                      <strong className="text-[#FF8C42]">Rating:</strong>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${
                            i < selectedItem.rating! ? 'text-yellow-400' : 'text-white/20'
                          }`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <strong className="text-[#FF8C42]">Message:</strong>
                    <p className="mt-1 text-white/80">{selectedItem.message}</p>
                  </div>
                </>
              )}
              
              <div>
                <strong className="text-[#FF8C42]">Submitted:</strong> {formatDate(selectedItem.createdAt)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;