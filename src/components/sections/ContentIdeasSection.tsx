import React, { useState, useMemo } from 'react';
import { IDEA_CATEGORIES, contentIdeasData } from '../../data/contentIdeasData';
import { IdeaCategory, ContentIdea } from '../../types/creator';
import { Bookmark, BookmarkCheck, Sparkles, Copy, Check, Search, Filter } from 'lucide-react';

interface ContentIdeasSectionProps {
  savedIdeaIds: string[];
  onToggleSaveIdea: (id: string) => void;
  onShowToast: (title: string, msg?: string) => void;
}

export const ContentIdeasSection: React.FC<ContentIdeasSectionProps> = ({
  savedIdeaIds,
  onToggleSaveIdea,
  onShowToast,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<IdeaCategory | 'Toutes'>('Toutes');
  const [searchFilter, setSearchFilter] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [randomIdea, setRandomIdea] = useState<ContentIdea | null>(null);

  // Filter ideas
  const filteredIdeas = useMemo(() => {
    return contentIdeasData.filter((idea) => {
      const matchCategory =
        selectedCategory === 'Toutes' || idea.category === selectedCategory;
      const matchSearch =
        !searchFilter.trim() ||
        idea.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        idea.concept.toLowerCase().includes(searchFilter.toLowerCase()) ||
        idea.hook.toLowerCase().includes(searchFilter.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchFilter]);

  // Generate a random idea from the current category or whole library
  const handleGenerateRandomIdea = () => {
    const pool =
      selectedCategory === 'Toutes'
        ? contentIdeasData
        : contentIdeasData.filter((i) => i.category === selectedCategory);
    if (pool.length === 0) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setRandomIdea(random);
    onShowToast('Idée sélectionnée !', `Idée tirée : « ${random.title} »`);
  };

  const handleCopyScript = (idea: ContentIdea) => {
    const text = `Titre : ${idea.title}\nCatégorie : ${idea.category}\nHook : ${idea.hook}\nStructure : ${idea.structure}\nAppel à l'action : ${idea.cta}`;
    navigator.clipboard.writeText(text);
    setCopiedId(idea.id);
    onShowToast('Plan de vidéo copié !', 'Prêt à être collé dans vos notes de tournage.');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header & Main Generator Trigger */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Bibliothèque de Formats
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
            Bibliothèque d'Idées & Angles Vidéo
          </h1>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
            Trouve immédiatement ton prochain contenu avec son accroche psychologique, sa structure de rétention et son appel à l'action.
          </p>
        </div>

        {/* Generate Button Required by Prompt */}
        <button
          onClick={handleGenerateRandomIdea}
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-zinc-950 font-bold text-xs rounded-xl hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/5 shrink-0"
        >
          <Sparkles className="w-4 h-4 text-zinc-950" />
          <span>Générer une idée</span>
        </button>
      </div>

      {/* Featured Generated Idea Card if active */}
      {randomIdea && (
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-700 text-white space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white text-zinc-950 text-[10px] font-bold font-mono">
                SÉLECTION RAPIDE
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {randomIdea.category} · {randomIdea.estimatedDuration}
              </span>
            </div>
            <button
              onClick={() => setRandomIdea(null)}
              className="text-xs text-zinc-400 hover:text-white"
            >
              Fermer
            </button>
          </div>
          <h3 className="text-xl font-display font-bold">{randomIdea.title}</h3>
          <p className="text-xs text-zinc-300">{randomIdea.concept}</p>
          <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 text-xs font-medium text-zinc-200">
            <span className="text-zinc-400 font-mono mr-2">Hook (0-3s) :</span>
            {randomIdea.hook}
          </div>
        </div>
      )}

      {/* Controls: Search and Interactive Category Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Filter Tabs */}
          <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('Toutes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                selectedCategory === 'Toutes'
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              Toutes ({contentIdeasData.length})
            </button>
            {IDEA_CATEGORIES.map((cat) => {
              const count = contentIdeasData.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-zinc-950 font-semibold'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Text Filter Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filtrer par mot-clé (ex: procrastination, micro, routine)..."
            className="w-full pl-9 pr-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-700"
          />
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => {
          const isSaved = savedIdeaIds.includes(idea.id);
          return (
            <div
              key={idea.id}
              className="flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all p-6 space-y-5"
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <span className="text-zinc-200 font-semibold">{idea.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{idea.estimatedDuration}</span>
                  </div>
                  <button
                    onClick={() => {
                      onToggleSaveIdea(idea.id);
                      onShowToast(
                        isSaved ? 'Idée retirée des favoris' : 'Idée enregistrée dans vos favoris !',
                        idea.title
                      );
                    }}
                    className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                      isSaved
                        ? 'bg-zinc-800 border-zinc-600 text-white'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                    title={isSaved ? 'Retirer des favoris' : 'Sauvegarder dans mes favoris'}
                  >
                    {isSaved ? <BookmarkCheck className="w-4 h-4 text-emerald-400" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {idea.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {idea.concept}
                </p>
              </div>

              {/* Hook, Structure, CTA Details Required by Prompt */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/70">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Hook d'ouverture (0-3s)
                  </div>
                  <div className="text-zinc-200 font-medium italic">
                    {idea.hook}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/70">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Structure de la vidéo
                  </div>
                  <div className="text-zinc-300 text-[11px] leading-relaxed">
                    {idea.structure}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/70">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Appel à l'action (CTA)
                  </div>
                  <div className="text-zinc-300 text-[11px]">
                    {idea.cta}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400">
                  Niveau : {idea.difficulty}
                </span>
                <button
                  onClick={() => handleCopyScript(idea)}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedId === idea.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier le plan</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
