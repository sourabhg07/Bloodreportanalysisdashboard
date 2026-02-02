import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Droplets, 
  Weight, 
  Ruler,
  Edit2,
  Camera,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const ProfileView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">My Profile</h1>
          <p className="text-slate-500 max-w-2xl">
            Manage your personal information, medical history basics, and account security.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 rounded-xl text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
          <Edit2 size={18} />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1 space-y-8">
          {/* Profile Card */}
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="h-32 bg-blue-600 relative">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md text-slate-600 hover:text-blue-600 border border-slate-100 transition-colors">
                    <Camera size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-16 pb-8 px-8 text-center">
              <h2 className="text-2xl font-bold text-slate-800">Alexander Thorne</h2>
              <p className="text-sm text-slate-500 font-medium">Patient ID: HL-88293-2025</p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Blood Type</p>
                  <p className="text-xl font-bold text-rose-600 flex items-center justify-center gap-1">
                    <Droplets size={16} />
                    A+
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-xl font-bold text-emerald-600 flex items-center justify-center gap-1 text-sm">
                    Verified
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 space-y-6">
            <h3 className="font-bold text-slate-800">Vital Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-500">
                  <Weight size={18} />
                  <span className="text-sm">Weight</span>
                </div>
                <span className="font-bold text-slate-800">78 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-500">
                  <Ruler size={18} />
                  <span className="text-sm">Height</span>
                </div>
                <span className="font-bold text-slate-800">182 cm</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-500">
                  <Calendar size={18} />
                  <span className="text-sm">Age</span>
                </div>
                <span className="font-bold text-slate-800">32 years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 space-y-8">
          {/* Contact Details */}
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <div className="flex items-center gap-3 py-2 border-b border-slate-100">
                  <User size={18} className="text-slate-400" />
                  <span className="font-medium text-slate-700">Alexander Thorne</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <div className="flex items-center gap-3 py-2 border-b border-slate-100">
                  <Mail size={18} className="text-slate-400" />
                  <span className="font-medium text-slate-700">alex.thorne@example.com</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                <div className="flex items-center gap-3 py-2 border-b border-slate-100">
                  <Phone size={18} className="text-slate-400" />
                  <span className="font-medium text-slate-700">+1 (555) 000-1234</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</label>
                <div className="flex items-center gap-3 py-2 border-b border-slate-100">
                  <MapPin size={18} className="text-slate-400" />
                  <span className="font-medium text-slate-700">New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account & Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Security</h3>
              <p className="text-sm text-slate-500 mb-6">Your account is secured with two-factor authentication.</p>
              <button className="text-sm font-bold text-blue-600 hover:underline">Change Password</button>
            </div>
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Billing</h3>
              <p className="text-sm text-slate-500 mb-6">Manage your subscription and lab test credits.</p>
              <button className="text-sm font-bold text-blue-600 hover:underline">View History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};