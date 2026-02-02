import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  Calendar, 
  Filter, 
  Download, 
  ChevronRight,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const trendData = [
  { date: 'Jan 2025', hemoglobin: 14.2, cholesterol: 185, glucose: 88 },
  { date: 'Apr 2025', hemoglobin: 13.8, cholesterol: 195, glucose: 90 },
  { date: 'Jul 2025', hemoglobin: 13.5, cholesterol: 210, glucose: 95 },
  { date: 'Oct 2025', hemoglobin: 13.2, cholesterol: 205, glucose: 92 },
];

const reportHistory = [
  { id: '1', date: 'Oct 24, 2025', type: 'Full Blood Count', provider: 'City Diagnostics', status: 'Final' },
  { id: '2', date: 'Jul 12, 2025', type: 'Lipid Profile', provider: 'Global Health', status: 'Final' },
  { id: '3', date: 'Apr 05, 2025', type: 'Routine Checkup', provider: 'City Diagnostics', status: 'Final' },
  { id: '4', date: 'Jan 18, 2025', type: 'Annual Screening', provider: 'St. Mary\'s Hospital', status: 'Final' },
];

export const TrendsHistoryView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Trends & History</h1>
          <p className="text-slate-500 max-w-2xl">
            Track your health journey over time. Visualize changes in key biomarkers and access your complete medical report history.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Calendar size={18} />
            Jan 2025 - Oct 2025
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={18} />
            Advanced Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Trend Visualization */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Lipid & Glucose Trends</h2>
              <p className="text-sm text-slate-500">Comparing total cholesterol and fasting glucose</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs font-medium text-slate-600">Cholesterol</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-slate-600">Glucose</span>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorChol" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorGluc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '16px', 
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="cholesterol" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorChol)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="glucose" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorGluc)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hemoglobin Trend */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Hemoglobin Stability</h2>
              <p className="text-sm text-slate-500">Monitoring oxygen-carrying capacity over 10 months</p>
            </div>
            <div className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-wider">
              Below Range
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  domain={[12, 16]}
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '16px', 
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="hemoglobin" 
                  stroke="#f43f5e" 
                  strokeWidth={4}
                  dot={{ r: 6, fill: '#f43f5e', strokeWidth: 3, stroke: '#fff' }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Report History</h2>
            <p className="text-sm text-slate-500">Access and download your previous blood test reports</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
            Request Records Transfer
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="divide-y divide-slate-50">
          {reportHistory.map((report) => (
            <div key={report.id} className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{report.type}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Calendar size={12} />
                      {report.date}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock size={12} />
                      {report.provider}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {report.status}
                </div>
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                  <Download size={20} />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-slate-50/50 text-center">
          <button className="text-sm font-bold text-slate-500 hover:text-slate-800">
            View All Historical Records
          </button>
        </div>
      </div>
    </div>
  );
};