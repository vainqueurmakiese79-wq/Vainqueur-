import React from 'react';
import { NavTab } from '../../types/creator';
import {
  Compass,
  Lightbulb,
  Video,
  Share2,
  BookOpen,
  Zap,
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: NavTab) => void;
  completedDaysCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, completedDaysCount }) => {
  const domains: {
    id: NavTab;
    title: string;
    desc: string;
    icon: any;
    meta: string;
  }[] = [
    {
      id: 'strategies',
      title: 'Stratégies de Contenu',
      desc: 'Niche, audience idéale, positionnement et calendrier éditorial durable.',
      icon: Compass,
      meta: '7 modules pratiques',
    },
    {
      id: 'ideas',
      title: 'Bibliothèque d\'Idées',
      desc: 'Banque d\'idées classées par thématique avec hooks, structures et CTAs.',
      icon: Lightbulb,
      meta: '9 catégories d\'inspiration',
    },
    {
      id: 'creation',
      title: 'Création & Montage',
      desc: 'Techniques d\'accroche 0-3s, rétention, sous-titres et cuts dynamiques.',
      icon: Video,
      meta: 'Guide tournage & montage',
    },
    {
      id: 'platforms',
      title: 'Écosystèmes Réseaux',
      desc: 'Règles spécifiques pour TikTok, Instagram Reels, YouTube et Facebook.',
      icon: Share2,
      meta: 'Décryptage sans promesses creuses',
    },
    {
      id: 'mindset',
      title: 'Mentalité du Créateur',
      desc: 'Surmonter le bide d\'une vidéo, vaincre la comparaison et bâtir la discipline.',
      icon: BookOpen,
      meta: 'Résilience & persévérance',
    },
    {
      id: 'tips',
      title: 'Astuces Rapides',
      desc: 'Cartes actionnables : améliorer un hook, un titre, une miniature en 2 min.',
      icon: Zap,
      meta: 'Micro-ajustements à fort impact',
    },
    {
      id: 'challenge',
      title: 'Défi 30 Jours',
      desc: 'Programme structuré au jour le jour pour installer une régularité indestructible.',
      icon: Target,
      meta: `${completedDaysCount}/30 jours complétés`,
    },
    {
      id: 'ai',
      title: 'VQR AI Assistant',
      desc: 'Générateur intelligent d\'idées, hooks, titres et scripts courts chrono.',
      icon: Sparkles,
      meta: 'Moteur créatif instantané',
    },
  ];

  return (
    <div className="space-y-24 py-6">
      {/* Hero Header Frame */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-900">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* VQR Monogram Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mb-8">
            <div className="w-4 h-4 rounded bg-white text-zinc-950 flex items-center justify-center font-bold text-[9px]">
              V
            </div>
            <span className="font-mono tracking-wide text-zinc-300">
              VQR CREATOR · Plateforme Éducative
            </span>
          </div>

          {/* Main Title Required by Prompt */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] text-balance">
            Transforme tes idées <br className="hidden sm:block" />
            <span className="text-zinc-400">en contenu.</span>
          </h1>

          {/* Subtitle Required by Prompt */}
          <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed text-balance">
            Apprends à créer, persévérer et développer ta présence sur les réseaux sociaux.
          </p>

          {/* Action Buttons Required by Prompt */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('challenge')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-200 transition-all transform hover:-translate-y-0.5 text-sm cursor-pointer shadow-lg shadow-white/5 flex items-center justify-center gap-2"
            >
              <span>Commencer maintenant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('strategies')}
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold rounded-xl hover:bg-zinc-800 hover:text-white transition-all text-sm cursor-pointer flex items-center justify-center"
            >
              Découvrir les stratégies
            </button>
          </div>

          {/* Motto Banner */}
          <div className="mt-16 pt-8 border-t border-zinc-900/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>CRÉE sans attendre la perfection</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>PERSÉVÈRE après chaque bide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>PROGRESSE de 1% par vidéo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Learning Domains Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Architecture d'Apprentissage
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              Les domaines d'apprentissage VQR
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Un cursus structuré pour dépasser le statut de spectateur et bâtir une discipline de création d'élite.
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domains.map((domain) => {
            const IconComp = domain.icon;
            return (
              <button
                key={domain.id}
                onClick={() => onNavigate(domain.id)}
                className="group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-zinc-700 transition-colors mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-mono">{domain.meta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Insight Quote Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-center relative overflow-hidden">
          <div className="text-zinc-600 font-serif text-6xl leading-none select-none mb-2">“</div>
          <p className="text-lg sm:text-2xl font-display font-medium text-zinc-100 max-w-3xl mx-auto leading-snug">
            Une vidéo qui échoue ne signifie pas que ton projet a échoué. Analyse, améliore et recommence.
          </p>
          <div className="mt-6 text-xs text-zinc-400 font-mono tracking-wider uppercase">
            Le Manifeste VQR Creator
          </div>
        </div>
      </section>
    </div>
  );
};
