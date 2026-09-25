import React, { useState } from 'react';
import { mindsetLessons } from '../../data/mindsetData';
import { MindsetLesson } from '../../types/creator';
import {
  BookOpen,
  Sparkles,
  Heart,
  ShieldAlert,
  CheckCircle2,
  RefreshCw,
  Copy,
  Check,
} from 'lucide-react';

interface MindsetSectionProps {
  onShowToast: (title: string, msg?: string) => void;
}

export const MindsetSection: React.FC<MindsetSectionProps> = ({ onShowToast }) => {
  const [activeLessonId, setActiveLessonId] = useState<string>(mindsetLessons[1].id); // Start with 'surmonter-le-flop'
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Anti-flop interactive tool
  const [flopViews, setFlopViews] = useState('38');
  const [flopEffort, setFlopEffort] = useState('5 heures');
  const [flopAnalyzed, setFlopAnalyzed] = useState(false);

  const activeLesson =
    mindsetLessons.find((l) => l.id === activeLessonId) || mindsetLessons[0];

  const handleCopyQuote = (quote: string, id: string) => {
    navigator.clipboard.writeText(quote);
    setCopiedKey(id);
    onShowToast('Citation VQR copiée !', 'Partagez-la ou notez-la sur votre espace de travail.');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Psychologie & Résilience
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          La Mentalité du Créateur Inarrêtable
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Le talent commence le voyage, mais seule la solidité mentale face aux bides et à la lenteur te permettra d'atteindre tes objectifs.
        </p>
      </div>

      {/* Flagship Banner Required by Prompt */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-700/80 text-center space-y-4 shadow-xl">
        <div className="w-10 h-10 rounded-xl bg-white text-zinc-950 flex items-center justify-center mx-auto font-display font-black text-sm">
          VQR
        </div>
        <p className="text-xl sm:text-2xl font-display font-bold text-white max-w-2xl mx-auto leading-snug">
          « Une vidéo qui échoue ne signifie pas que ton projet a échoué. Analyse, améliore et recommence. »
        </p>
        <p className="text-xs text-zinc-400 max-w-lg mx-auto">
          Chaque grand créateur que tu admires aujourd'hui possède des dizaines de vidéos oubliées qui n'avaient fait que 50 vues à ses débuts.
        </p>
      </div>

      {/* 6 Core Mindset Lessons Grid */}
      <div className="space-y-6">
        <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Les 6 Piliers Psychologiques
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mindsetLessons.map((lesson) => {
            const isSelected = lesson.id === activeLessonId;
            return (
              <div
                key={lesson.id}
                onClick={() => setActiveLessonId(lesson.id)}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer space-y-5 ${
                  isSelected
                    ? 'bg-zinc-900 border-zinc-500 shadow-xl'
                    : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Pilier Mental</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {lesson.title}
                  </h3>
                  <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs">
                    <span className="font-mono text-rose-400 block text-[10px] uppercase mb-1">
                      Le piège classique :
                    </span>
                    <p className="text-zinc-400 leading-relaxed">{lesson.coreDilemma}</p>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {lesson.reframing}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                  <div className="text-xs text-zinc-400 font-mono">
                    <span className="text-white font-semibold">Habitude VQR : </span>
                    {lesson.actionableHabit}
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-[11px] text-zinc-300 font-serif italic flex items-center justify-between gap-2">
                    <span className="line-clamp-2">{lesson.quote}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyQuote(lesson.quote, lesson.id);
                      }}
                      className="p-1 text-zinc-400 hover:text-white shrink-0"
                      title="Copier la citation"
                    >
                      {copiedKey === lesson.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Anti-Flop Protocol Tool */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Outil Anti-Découragement
            </span>
            <h3 className="text-xl font-display font-bold text-white mt-0.5">
              Le Dé-stresseur après une vidéo qui a floppé
            </h3>
          </div>
          <RefreshCw className="w-4 h-4 text-zinc-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-zinc-400 mb-1">Nombre de vues de ta vidéo décevante</label>
            <input
              type="text"
              value={flopViews}
              onChange={(e) => {
                setFlopViews(e.target.value);
                setFlopAnalyzed(false);
              }}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-600"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1">Temps que tu as passé dessus</label>
            <input
              type="text"
              value={flopEffort}
              onChange={(e) => {
                setFlopEffort(e.target.value);
                setFlopAnalyzed(false);
              }}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>

        <button
          onClick={() => setFlopAnalyzed(true)}
          className="px-6 py-2.5 bg-white text-zinc-950 font-bold text-xs rounded-xl hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          Lancer le recadrage rationnel VQR
        </button>

        {flopAnalyzed && (
          <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 animate-in fade-in">
            <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Analyse rationnelle terminée</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Même à <span className="font-semibold text-white">{flopViews} vues</span>, imagine une salle de conférence remplie de {flopViews} personnes réelles qui t'écoutent parler pendant 45 secondes. Ce n'est pas "rien".
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Les <span className="font-semibold text-white">{flopEffort}</span> que tu as investies ne sont pas perdues : tu as affiné ton montage, entraîné ta voix et appris ce qui ne capte pas le spectateur. Garde la vidéo en ligne, isole le hook pour comprendre le décrochage, et prépare le tournage de demain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
