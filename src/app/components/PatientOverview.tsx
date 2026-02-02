import React from 'react';
import { User, Droplets, Calendar, UserRound } from 'lucide-react';

export const PatientOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            <UserRound size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Alexander Thorne</h2>
            <p className="text-slate-500 text-sm">Patient ID: <span className="font-semibold">#28471</span></p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Age / Gender</p>
            <p className="font-semibold text-slate-700">28 / Male</p>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Blood Group</p>
            <div className="flex items-center gap-1.5 font-semibold text-rose-600">
              <Droplets size={14} />
              <span>O Positive</span>
            </div>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Report Date</p>
            <p className="font-semibold text-slate-700">Jan 28, 2026</p>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Ref. Doctor</p>
            <p className="font-semibold text-slate-700">Dr. Sarah Miller</p>
          </div>
        </div>
      </div>
    </div>
  );
};
