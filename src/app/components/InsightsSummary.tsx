import React from 'react';
import { Lightbulb, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export const InsightsSummary: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <h3 className="font-bold text-emerald-900 mb-1">Health Status: Good</h3>
            <p className="text-emerald-800/80 text-sm leading-relaxed">
              Most of your parameters are within the optimal range. Your immune system markers (WBC) and oxygen-carrying capacity (Hemoglobin) are looking strong.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
              <AlertTriangle size={18} />
            </div>
            <h4 className="font-bold text-slate-800">Areas for Attention</h4>
          </div>
          <ul className="space-y-3">
            {[
              "Cholesterol levels are slightly above the borderline.",
              "Vitamin D levels show a downward trend since last report.",
              "Blood Sugar (Fasting) is nearing the upper limit."
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <Lightbulb size={18} />
            </div>
            <h4 className="font-bold text-slate-800">Recommended Next Steps</h4>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-600">Based on your results, we suggest the following lifestyle adjustments:</p>
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                <span className="text-sm font-medium text-slate-700">View Dietary Suggestions</span>
                <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                <span className="text-sm font-medium text-slate-700">Schedule Follow-up Consultation</span>
                <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
        <p className="text-[10px] text-slate-400 font-medium uppercase text-center leading-relaxed">
          Disclaimer: This summary is generated for educational purposes based on reference ranges. 
          It does not constitute medical advice. Please consult with a qualified physician for clinical diagnosis.
        </p>
      </div>
    </div>
  );
};
