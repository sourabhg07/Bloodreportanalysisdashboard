import React, { useState } from 'react';
import { Sidebar } from '@/app/components/Sidebar';
import { TopNav } from '@/app/components/TopNav';
import { ParameterCard, Parameter } from '@/app/components/ParameterCard';
import { PatientOverview } from '@/app/components/PatientOverview';
import { InsightsSummary } from '@/app/components/InsightsSummary';
import { UploadModal } from '@/app/components/UploadModal';
import { LoginScreen } from '@/app/components/LoginScreen';
import { DetailView } from '@/app/components/DetailView';
import { ParametersView } from '@/app/components/ParametersView';
import { TrendsHistoryView } from '@/app/components/TrendsHistoryView';
import { InsightsView } from '@/app/components/InsightsView';
import { ProfileView } from '@/app/components/ProfileView';
import { SettingsView } from '@/app/components/SettingsView';
import { 
  Plus, 
  Filter, 
  Download, 
  TrendingUp,
  LayoutGrid,
  List,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

// Mock Data
const bloodParameters: Parameter[] = [
  {
    id: '1',
    name: 'Hemoglobin',
    value: 13.2,
    unit: 'g/dL',
    range: '13.5 - 17.5',
    status: 'low',
    description: 'Hemoglobin is a protein in red blood cells that carries oxygen throughout your body. Low levels may indicate anemia or other conditions.',
    trend: 'down'
  },
  {
    id: '2',
    name: 'Total Cholesterol',
    value: 205,
    unit: 'mg/dL',
    range: '< 200',
    status: 'borderline',
    description: 'Total cholesterol is a measure of the total amount of cholesterol in your blood. High levels can increase your risk of heart disease.',
    trend: 'up'
  },
  {
    id: '3',
    name: 'Blood Sugar (Fasting)',
    value: 92,
    unit: 'mg/dL',
    range: '70 - 99',
    status: 'normal',
    description: 'Fasting blood sugar measures your blood glucose after you haven\'t eaten for at least 8 hours. It is used to screen for diabetes.',
    trend: 'stable'
  },
  {
    id: '4',
    name: 'WBC Count',
    value: 6.8,
    unit: 'x10³/µL',
    range: '4.5 - 11.0',
    status: 'normal',
    description: 'White blood cells (WBCs) are part of the immune system and help fight infections.',
    trend: 'stable'
  },
  {
    id: '5',
    name: 'Platelets',
    value: 245,
    unit: 'x10³/µL',
    range: '150 - 450',
    status: 'normal',
    description: 'Platelets are small blood components that help with clotting to stop bleeding.',
    trend: 'down'
  },
  {
    id: '6',
    name: 'Vitamin D',
    value: 28,
    unit: 'ng/mL',
    range: '30 - 100',
    status: 'low',
    description: 'Vitamin D is essential for bone health and immune function. Low levels are common and may require supplementation.',
    trend: 'down'
  },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedParam, setSelectedParam] = useState<Parameter | null>(null);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    if (selectedParam) {
      return <DetailView parameter={selectedParam} onClose={() => setSelectedParam(null)} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Patient Header */}
            <PatientOverview />

            {/* Parameter Grid Section */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Blood Parameters</h2>
                  <p className="text-sm text-slate-500">Showing results from your latest report</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
                    <button className="p-1.5 bg-slate-100 text-blue-600 rounded-lg shadow-sm">
                      <LayoutGrid size={18} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
                      <List size={18} />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                    <Filter size={16} />
                    Filter
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {bloodParameters.map((param) => (
                  <ParameterCard 
                    key={param.id} 
                    parameter={param} 
                    onClick={setSelectedParam}
                  />
                ))}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsUploadOpen(true)}
                  className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-blue-500 hover:border-blue-300 hover:bg-blue-50 transition-all min-h-[180px]"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center">
                    <Plus size={24} />
                  </div>
                  <span className="font-bold">Add Manual Reading</span>
                </motion.button>
              </div>
            </section>

            {/* Summary Section */}
            <section className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Insights & Summary</h2>
                  <p className="text-sm text-slate-500">Personalized interpretation of your results</p>
                </div>
                <button className="hidden sm:flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
                  Download Full Analysis (PDF)
                  <Download size={16} />
                </button>
              </div>
              <InsightsSummary />
            </section>
          </div>
        );
      case 'upload':
        return (
          <div className="max-w-3xl mx-auto py-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Upload Report</h2>
              <p className="text-slate-500">Our system will automatically extract and categorize your results.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm text-center">
               <button 
                onClick={() => setIsUploadOpen(true)}
                className="w-full h-64 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-blue-400 hover:bg-blue-50/50 transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <TrendingUp size={32} />
                </div>
                <p className="font-bold text-slate-800">Click to upload your medical report</p>
                <p className="text-sm text-slate-500">PDF, JPG, or PNG formats</p>
              </button>
            </div>
          </div>
        );
      case 'parameters':
        return <ParametersView parameters={bloodParameters} onSelectParameter={setSelectedParam} />;
      case 'trends':
        return <TrendsHistoryView />;
      case 'insights':
        return <InsightsView />;
      case 'profile':
        return <ProfileView />;
      case 'settings':
        return <SettingsView onLogout={handleLogout} />;
      default:
        return (
          <div className="flex items-center justify-center h-[60vh] text-slate-400">
            <div className="text-center">
              <Activity className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <h3 className="text-xl font-bold text-slate-600">Coming Soon</h3>
              <p className="text-sm">The {activeTab} section is currently under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedParam(null);
        }}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        onLogout={handleLogout}
      />
      
      <main className={cn(
        "transition-all duration-300 min-h-screen flex flex-col",
        isCollapsed ? "lg:ml-20" : "lg:ml-64"
      )}>
        <TopNav 
          setIsMobileOpen={setIsMobileOpen} 
          patientName="Alexander Thorne"
        />

        <div className="p-4 lg:p-8 flex-1">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>

        <footer className="p-8 border-t border-slate-200 bg-white/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-medium">
            <p>© 2026 HemoX • Blood Report Analysis System</p>
            <div className="flex items-center gap-6">
              <span>Educational Project • College of Health Sciences</span>
              <span>v1.0.4</span>
            </div>
            <p className="text-center md:text-right max-w-xs">
              This application is for educational purposes only and does not provide medical advice.
            </p>
          </div>
        </footer>
      </main>

      <UploadModal 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
      />
    </div>
  );
}
