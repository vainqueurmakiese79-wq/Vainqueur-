import React, { useState } from 'react';
import { strategiesData } from '../../data/strategiesData';
import { StrategyModule } from '../../types/creator';
import {
  Compass,
  Target,
  Users,
  Sparkles,
  Calendar,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Clock,
  Check,
  Copy,
} from 'lucide-react';

interface StrategiesSectionProps {
  onShowToast: (title: string, msg?: string) => void;
}

export const StrategiesSection: React.FC<StrategiesSectionProps> = ({ onShowToast }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(strategiesData[0].id);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeModule = strategiesData.find((m) => m.id === selectedModuleId) || strategiesData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Target':
        return <Target className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Calendar':
        return <Calendar className="w-4 h-4" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const handleCopyChecklist = () => {
    const text = activeModule.checklist.map((c) => `[ ] ${c}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedKey(activeModule.id);
    onShowToast('Checklist copiée !', 'Collez-la dans votre carnet de notes personnel.');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Cursus Stratégique
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          Stratégies de Contenu & Positionnement
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Les 7 piliers fondamentaux pour transformer une création de contenu hasardeuse en un système fiable et pérenne.
        </p>
      </div>

      {/* Main Layout: Left Navigation / Right Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Module Tabs */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-2 mb-2">
            Modules du Cursus
          </div>
          <div className="space-y-1.5">
            {strategiesData.map((module, idx) => {
              const isSelected = module.id === selectedModuleId;
              return (
                <button
                  key={module.id}
                  onClick={() => setSelectedModuleId(module.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-900 border-zinc-700 text-white shadow-lg'
                      : 'bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:border-zinc-800'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-white text-zinc-950 font-bold'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-400'
                    }`}
                  >
                    {getIcon(module.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-zinc-400">0{idx + 1}</span>
                      <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {module.readTime}
                      </span>
                    </div>
                    <div className="text-xs font-semibold truncate mt-0.5">{module.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Module Detailed Content */}
        <div className="lg:col-span-8 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-8">
          {/* Module Header */}
          <div className="border-b border-zinc-800 pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-white font-semibold">Module d'Exécution</span>
              <span aria-hidden="true">·</span>
              <span>Temps de lecture : {activeModule.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
              {activeModule.title}
            </h2>
            <p className="text-sm font-medium text-zinc-300 mt-1">
              {activeModule.subtitle}
            </p>
            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
              {activeModule.summary}
            </p>

            {/* Key Takeaway Callout */}
            <div className="mt-5 p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
              <div>
                <span className="font-semibold text-white">Principe clé : </span>
                <span>{activeModule.keyTakeaway}</span>
              </div>
            </div>
          </div>

          {/* Action Steps */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Méthodologie d'application pas à pas
            </h3>

            <div className="space-y-4">
              {activeModule.steps.map((step) => (
                <div
                  key={step.number}
                  className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-400 border border-zinc-800 rounded px-2 py-0.5">
                      {step.number}
                    </span>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-8">
                    {step.description}
                  </p>
                  <div className="pl-8 text-xs text-zinc-400 font-mono italic">
                    Astuce VQR : {step.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist Area */}
          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Critères de validation du module
              </h3>
              <button
                onClick={handleCopyChecklist}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedKey === activeModule.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copié</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier la checklist</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2">
              {activeModule.checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
