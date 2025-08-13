import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminUser {
  id: string;
  username: string;
  password: string;
  email: string;
  createdAt: string;
}

const AdminLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      const users = JSON.parse(localStorage.getItem('adminUsers') || '[]') as AdminUser[];
      const user = users.find(u => u.username === formData.username && u.password === formData.password);
      
      if (user) {
        localStorage.setItem('adminSession', JSON.stringify({ userId: user.id, username: user.username }));
        toast({
          title: "Login Successful",
          description: `Welcome back, ${user.username}!`
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password",
          variant: "destructive"
        });
      }
    } else {
      // Registration logic
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Registration Failed",
          description: "Passwords do not match",
          variant: "destructive"
        });
        return;
      }
      
      const users = JSON.parse(localStorage.getItem('adminUsers') || '[]') as AdminUser[];
      const existingUser = users.find(u => u.username === formData.username);
      
      if (existingUser) {
        toast({
          title: "Registration Failed",
          description: "Username already exists",
          variant: "destructive"
        });
        return;
      }
      
      const newUser: AdminUser = {
        id: Date.now().toString(),
        username: formData.username,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString()
      };
      
      users.push(newUser);
      localStorage.setItem('adminUsers', JSON.stringify(users));
      localStorage.setItem('adminSession', JSON.stringify({ userId: newUser.id, username: newUser.username }));
      
      toast({
        title: "Registration Successful",
        description: `Welcome to Kenny's Admin, ${newUser.username}!`
      });
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-kenny-dark flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-kenny-dark via-[#1a120b] to-black"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-black/50 backdrop-blur-sm border border-[#FF8C42]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-6 sm:mb-8">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Kenny's Bar Logo" 
              className="w-20 sm:w-24 h-auto mx-auto mb-4"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-[#FF8C42] mb-2">Admin Portal</h1>
            <p className="text-white/60 text-xs sm:text-sm">Kenny's Bar Management System</p>
          </div>

          {/* Toggle Login/Register */}
          <div className="flex mb-4 sm:mb-6 bg-black/30 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                isLogin 
                  ? 'bg-[#FF8C42] text-white shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                !isLogin 
                  ? 'bg-[#FF8C42] text-white shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-medium text-white/80">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#FF8C42]" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#FF8C42] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#FF8C42] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter email"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-medium text-white/80">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#FF8C42]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#FF8C42] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-[#FF8C42] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-white/80">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#FF8C42]" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#FF8C42] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF6F1F] to-[#FF8C42] text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base mt-6"
            >
              {isLogin ? (
                <>
                  <User className="h-4 w-4" />
                  Sign In
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4" />
                  Create Account
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;