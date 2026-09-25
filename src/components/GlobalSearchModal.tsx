import React, { useState, useEffect, useMemo, useRef } from 'react';
import { NavTab } from '../types/creator';
import { Search, X, ChevronRight, BookOpen, Lightbulb, Video, Share2, Compass, Zap, Target } from 'lucide-react';
import { strategiesData } from '../data/strategiesData';
import { contentIdeasData } from '../data/contentIdeasData';
import { videoCreationData } from '../data/videoCreationData';
import { quickTipsData } from '../data/quickTipsData';
import { thirtyDayChallengeData } from '../data/thirtyDayChallengeData';
import { mindsetLessons } from '../data/mindsetData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: NavTab) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from parent or global listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    const results: {
      id: string;
      title: string;
      snippet: string;
      tab: NavTab;
      badge: string;
      icon: any;
    }[] = [];

    // Strategies
    strategiesData.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q)) {
        results.push({
          id: `strat-${s.id}`,
          title: s.title,
          snippet: s.summary,
          tab: 'strategies',
          badge: 'Stratégie',
          icon: Compass,
        });
      }
    });

    // Content Ideas
    contentIdeasData.forEach((i) => {
      if (
        i.title.toLowerCase().includes(q) ||
        i.concept.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q) ||
        i.hook.toLowerCase().includes(q)
      ) {
        results.push({
          id: `idea-${i.id}`,
          title: i.title,
          snippet: i.hook,
          tab: 'ideas',
          badge: `Idée · ${i.category}`,
          icon: Lightbulb,
        });
      }
    });

    // Video Creation
    videoCreationData.forEach((v) => {
      if (v.title.toLowerCase().includes(q) || v.principle.toLowerCase().includes(q)) {
        results.push({
          id: `vid-${v.id}`,
          title: v.title,
          snippet: v.shortDesc,
          tab: 'creation',
          badge: 'Création Vidéo',
          icon: Video,
        });
      }
    });

    // Quick Tips
    quickTipsData.forEach((t) => {
      if (
        t.title.toLowerCase().includes(q) ||
        t.formula.toLowerCase().includes(q) ||
        t.categoryLabel.toLowerCase().includes(q)
      ) {
        results.push({
          id: `tip-${t.id}`,
          title: t.title,
          snippet: t.formula,
          tab: 'tips',
          badge: `Astuce · ${t.categoryLabel}`,
          icon: Zap,
        });
      }
    });

    // 30 Day Challenge
    thirtyDayChallengeData.forEach((d) => {
      if (
        d.title.toLowerCase().includes(q) ||
        d.mission.toLowerCase().includes(q) ||
        `jour ${d.day}`.includes(q)
      ) {
        results.push({
          id: `day-${d.day}`,
          title: `Jour ${d.day} : ${d.title}`,
          snippet: d.mission,
          tab: 'challenge',
          badge: 'Défi 30 Jours',
          icon: Target,
        });
      }
    });

    // Mindset
    mindsetLessons.forEach((m) => {
      if (m.title.toLowerCase().includes(q) || m.reframing.toLowerCase().includes(q)) {
        results.push({
          id: `mind-${m.id}`,
          title: m.title,
          snippet: m.quote,
          tab: 'mindset',
          badge: 'Mentalité',
          icon: BookOpen,
        });
      }
    });

    return results.slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden text-white">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-800 gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une stratégie, un hook, une astuce, un jour du défi..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-zinc-400 hover:text-white p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-1 bg-zinc-800 rounded border border-zinc-700"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-zinc-800/50">
          {query.trim() === '' ? (
            <div className="py-8 px-4 text-center">
              <p className="text-xs text-zinc-400">
                Saisissez un mot-clé comme <span className="text-zinc-300 font-mono">« hook »</span>,{' '}
                <span className="text-zinc-300 font-mono">« niche »</span>,{' '}
                <span className="text-zinc-300 font-mono">« TikTok »</span>, ou{' '}
                <span className="text-zinc-300 font-mono">« Jour 4 »</span>.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-xs text-zinc-400">
                {['Accroche', 'Calendrier', 'Flop', 'Miniature', 'Sous-titres', 'Storytelling'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 bg-zinc-800/80 hover:bg-zinc-700/80 rounded text-zinc-300 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-10 text-center text-sm text-zinc-400">
              Aucun résultat pour « {query} ». Essayez un autre terme.
            </div>
          ) : (
            searchResults.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.tab);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg hover:bg-zinc-800/80 transition-colors flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 mt-0.5 text-zinc-300 group-hover:text-white">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-400 font-mono">{item.badge}</span>
                    </div>
                    <p className="text-sm font-semibold text-zinc-100 group-hover:text-white truncate mt-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5 leading-relaxed">
                      {item.snippet}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white shrink-0 self-center" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
