import React, { useState } from 'react';
import { resourcesData } from '../../data/resourcesData';
import { ResourceItem } from '../../types/creator';
import {
  BookOpen,
  FileCheck,
  FileText,
  Clock,
  Award,
  Copy,
  Check,
  Download,
} from 'lucide-react';

interface ResourcesSectionProps {
  onShowToast: (title: string, msg?: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onShowToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes les Ressources' },
    { id: 'guide', label: 'Guides' },
    { id: 'checklist', label: 'Checklists' },
    { id: 'script', label: 'Modèles de Scripts' },
    { id: 'structure', label: 'Structures de Vidéos' },
    { id: 'advice', label: 'Conseils & Manifeste' },
  ];

  const filteredResources = resourcesData.filter((r) => {
    if (selectedCategory === 'all') return true;
    return r.category === selectedCategory;
  });

  const handleCopy = (item: ResourceItem) => {
    const text = `${item.title}\n\n${item.content}\n\n${item.templateSnippet || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    onShowToast('Ressource copiée !', item.title);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Centre de Documentation
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          Ressources Éducatives & Gabarits
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Accédez à nos modèles de scripts, checklists de tournage et fiches méthodologiques prêtes à l'emploi.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-white text-zinc-950 font-semibold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  {res.categoryLabel}
                </span>
                <button
                  onClick={() => handleCopy(res)}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedId === res.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{res.downloadLabel || 'Copier'}</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug">{res.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{res.description}</p>

              {/* Resource Content Preview Box */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-mono whitespace-pre-line leading-relaxed max-h-56 overflow-y-auto">
                {res.content}
              </div>

              {res.templateSnippet && (
                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800 text-[11px] text-zinc-400">
                  <span className="font-mono text-zinc-300 mr-1.5">Note clé :</span>
                  {res.templateSnippet}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
