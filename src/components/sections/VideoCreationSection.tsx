import React, { useState } from 'react';
import { videoCreationData } from '../../data/videoCreationData';
import { VideoCreationGuide } from '../../types/creator';
import {
  Video,
  Sparkles,
  Scissors,
  Captions,
  Film,
  Zap,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Play,
} from 'lucide-react';

interface VideoCreationSectionProps {
  onShowToast: (title: string, msg?: string) => void;
}

export const VideoCreationSection: React.FC<VideoCreationSectionProps> = ({ onShowToast }) => {
  const [activeGuideId, setActiveGuideId] = useState<string>(videoCreationData[0].id);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Hook simulator state
  const [hookTopic, setHookTopic] = useState('la création de contenu');
  const [hookAudience, setHookAudience] = useState('les créateurs débutants');
  const [hookMistake, setHookMistake] = useState('passer 4 heures sur le montage sans peaufiner le hook');

  const activeGuide =
    videoCreationData.find((g) => g.id === activeGuideId) || videoCreationData[0];

  const handleCopyFormula = (formula: string, id: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedKey(id);
    onShowToast('Formule copiée !', 'Utilisez-la dans votre prochain script.');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Atelier de Réalisation
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          Création de Vidéos & Maîtrise du Montage
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          De la première milliseconde à l'export final : les 7 techniques indispensables pour maximiser la rétention et captiver votre audience.
        </p>
      </div>

      {/* Interactive Guide Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {videoCreationData.map((guide, idx) => {
          const isSelected = guide.id === activeGuideId;
          return (
            <button
              key={guide.id}
              onClick={() => setActiveGuideId(guide.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer border ${
                isSelected
                  ? 'bg-white text-zinc-950 font-bold border-white shadow-lg'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              <span className="font-mono text-[10px] mr-1.5 opacity-60">0{idx + 1}</span>
              {guide.title.split('(')[0]}
            </button>
          );
        })}
      </div>

      {/* Active Guide Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-8">
        <div className="border-b border-zinc-800 pb-6">
          <span className="text-xs font-mono text-zinc-400">Technique Fondamentale</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
            {activeGuide.title}
          </h2>
          <p className="text-sm text-zinc-300 font-medium mt-1">{activeGuide.shortDesc}</p>
          <p className="text-xs text-zinc-400 mt-3 max-w-3xl leading-relaxed">
            {activeGuide.principle}
          </p>
        </div>

        {/* Action Formula Box */}
        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              Formule d'application directe
            </span>
            <p className="text-xs sm:text-sm text-zinc-200 font-medium">
              {activeGuide.actionFormula}
            </p>
          </div>
          <button
            onClick={() => handleCopyFormula(activeGuide.actionFormula, activeGuide.id)}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg text-xs font-mono transition-colors shrink-0 cursor-pointer border border-zinc-700"
          >
            {copiedKey === activeGuide.id ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiée</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copier la formule</span>
              </>
            )}
          </button>
        </div>

        {/* Best Practices vs Mistakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Best Practices */}
          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ce qu'il faut faire (Standard VQR)</span>
            </div>
            <div className="space-y-3">
              {activeGuide.bestPractices.map((bp, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-zinc-300 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mistakes to avoid */}
          <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider">
              <XCircle className="w-4 h-4" />
              <span>Les erreurs fatales à bannir</span>
            </div>
            <div className="space-y-3">
              {activeGuide.mistakesToAvoid.map((mistake, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-zinc-300 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                  <span>{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tool: Hook Formula Generator Simulator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Outil Interactif
            </span>
            <h3 className="text-xl font-display font-bold text-white mt-0.5">
              Simulateur d'Accroche Vidéo (0-3s)
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            Formule VQR Instantanée
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block text-zinc-400 mb-1">1. Ton sujet / thématique</label>
            <input
              type="text"
              value={hookTopic}
              onChange={(e) => setHookTopic(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-600"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1">2. Ton audience cible</label>
            <input
              type="text"
              value={hookAudience}
              onChange={(e) => setHookAudience(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-600"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1">3. La fausse bonne idée ou erreur</label>
            <input
              type="text"
              value={hookMistake}
              onChange={(e) => setHookMistake(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>

        {/* Generated Hooks Output */}
        <div className="space-y-2 pt-2">
          <div className="text-xs font-mono text-zinc-400">3 Hooks générés pour ton prochain tournage :</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              `« Si tu fais partie de ${hookAudience}, arrête immédiatement de ${hookMistake}. »`,
              `« Pourquoi 90% des personnes qui s'intéressent à ${hookTopic} échouent à cause de ceci. »`,
              `« Ce que personne ne te dit sur ${hookTopic} en 2026. »`,
            ].map((hk, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-3"
              >
                <p className="text-xs font-medium text-zinc-200 italic">{hk}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(hk);
                    onShowToast('Hook copié !', hk);
                  }}
                  className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1 self-end transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copier</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
