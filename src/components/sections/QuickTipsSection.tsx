import React, { useState, useMemo } from 'react';
import { quickTipsData } from '../../data/quickTipsData';
import { QuickTip } from '../../types/creator';
import { Zap, Copy, Check, Filter, Search } from 'lucide-react';

interface QuickTipsSectionProps {
  onShowToast: (title: string, msg?: string) => void;
}

export const QuickTipsSection: React.FC<QuickTipsSectionProps> = ({ onShowToast }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes les astuces' },
    { id: 'hook', label: 'Améliorer un Hook' },
    { id: 'title', label: 'Améliorer un Titre' },
    { id: 'thumbnail', label: 'Créer une Miniature' },
    { id: 'interaction', label: 'Augmenter l\'Interaction' },
    { id: 'structure', label: 'Bonne Structure' },
    { id: 'errors', label: 'Erreurs Fréquentes' },
    { id: 'series', label: 'Créer une Série' },
  ];

  const filteredTips = useMemo(() => {
    return quickTipsData.filter((tip) => {
      const matchCat = selectedFilter === 'all' || tip.category === selectedFilter;
      const matchQuery =
        !searchQuery.trim() ||
        tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.beforeExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.afterExample.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedFilter, searchQuery]);

  const handleCopyTip = (tip: QuickTip) => {
    const text = `Astuce VQR : ${tip.title}\nFormule : ${tip.formula}\nExemple : ${tip.afterExample}`;
    navigator.clipboard.writeText(text);
    setCopiedId(tip.id);
    onShowToast('Astuce copiée !', tip.title);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Boîte à Outils Express
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          Astuces Rapides & Micro-Ajustements
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Des formules concrètes à appliquer en moins de 2 minutes sur votre prochain tournage pour déclencher un impact immédiat.
        </p>
      </div>

      {/* Filter and Search controls */}
      <div className="space-y-4">
        {/* Segmented Category Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher dans les astuces..."
            className="w-full px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-700"
          />
        </div>
      </div>

      {/* Tips Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTips.map((tip) => (
          <div
            key={tip.id}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Category & Title */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  {tip.categoryLabel}
                </span>
                <button
                  onClick={() => handleCopyTip(tip)}
                  className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white p-1 rounded transition-colors"
                  title="Copier la formule"
                >
                  {copiedId === tip.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-base font-bold text-white">{tip.title}</h3>

              {/* Action Formula */}
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs">
                <span className="font-mono text-white block text-[10px] uppercase tracking-wider mb-1">
                  La formule d'exécution :
                </span>
                <p className="text-zinc-200 font-medium leading-relaxed">{tip.formula}</p>
              </div>

              {/* Before vs After comparison */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-900">
                  <div className="text-[10px] font-mono text-rose-400 uppercase tracking-wider mb-1">
                    À éviter (Avant) :
                  </div>
                  <p className="text-zinc-400 italic leading-relaxed">{tip.beforeExample}</p>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    La version VQR (Après) :
                  </div>
                  <p className="text-zinc-200 font-medium leading-relaxed">{tip.afterExample}</p>
                </div>
              </div>
            </div>

            {/* Why it works */}
            <div className="pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
              <span className="font-mono text-zinc-300 font-semibold">Pourquoi ça marche : </span>
              {tip.whyItWorks}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
