import React from 'react';
import { 
  Bell, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Smartphone,
  ChevronRight,
  LogOut,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SettingsViewProps {
  onLogout: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ onLogout }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
        <p className="text-slate-500 max-w-2xl">
          Customize your experience, manage notifications, and control your data privacy preferences.
        </p>
      </div>

      <div className="max-w-4xl space-y-6">
        {/* Section: Notifications */}
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Bell className="text-blue-500" size={24} />
              Notifications
            </h2>
          </div>
          <div className="divide-y divide-slate-50">
            <div className="p-8 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800">Email Notifications</h3>
                <p className="text-sm text-slate-500 mt-1">Receive reports and summaries via email.</p>
              </div>
              <div className="relative inline-block w-12 h-6 rounded-full bg-blue-600 transition-colors">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
              </div>
            </div>
            <div className="p-8 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800">Critical Alerts</h3>
                <p className="text-sm text-slate-500 mt-1">Get immediate push notifications for abnormal lab results.</p>
              </div>
              <div className="relative inline-block w-12 h-6 rounded-full bg-blue-600 transition-colors">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Privacy & Security */}
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Lock className="text-blue-500" size={24} />
              Privacy & Security
            </h2>
          </div>
          <div className="divide-y divide-slate-50">
            <button className="w-full p-8 flex items-center justify-between hover:bg-slate-50 transition-colors text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Eye size={20} className="text-slate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Data Visibility</h3>
                  <p className="text-sm text-slate-500 mt-1">Manage who can see your health data.</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400" />
            </button>
            <button className="w-full p-8 flex items-center justify-between hover:bg-slate-50 transition-colors text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Database size={20} className="text-slate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Export Health Data</h3>
                  <p className="text-sm text-slate-500 mt-1">Download a copy of all your medical records.</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400" />
            </button>
          </div>
        </section>

        {/* Section: Preferences */}
        <section className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Globe className="text-blue-500" size={24} />
              Preferences
            </h2>
          </div>
          <div className="divide-y divide-slate-50">
            <div className="p-8 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800">Language</h3>
                <p className="text-sm text-slate-500 mt-1">Select your preferred language.</p>
              </div>
              <select className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div className="p-8 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800">Units of Measurement</h3>
                <p className="text-sm text-slate-500 mt-1">Choose between Metric or Imperial systems.</p>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button className="px-4 py-1.5 bg-white rounded-lg text-sm font-bold shadow-sm">Metric</button>
                <button className="px-4 py-1.5 text-slate-500 text-sm font-bold">Imperial</button>
              </div>
            </div>
          </div>
        </section>

        {/* Info & Logout */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 p-6 bg-slate-50 rounded-3xl flex items-center gap-4 hover:bg-slate-100 transition-all border border-slate-200/50">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Info size={20} className="text-slate-400" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-800">About HemoX</h4>
              <p className="text-xs text-slate-500">v1.0.4 • Terms & Privacy</p>
            </div>
          </button>
          <button 
            onClick={onLogout}
            className="flex-1 p-6 bg-rose-50 rounded-3xl flex items-center gap-4 hover:bg-rose-100 transition-all border border-rose-200/50 group"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:text-rose-600 transition-colors">
              <LogOut size={20} className="text-rose-400" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-rose-600">Logout Account</h4>
              <p className="text-xs text-rose-400">Sign out of this session</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};