import React from 'react';
import { NavTab } from '../../types/creator';
import { ShieldCheck, Compass, Heart, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5l4 9 4-9" />
            <path d="M12 11a4 4 0 1 0 5 5" />
            <path d="M15 15l4 4" />
          </svg>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Manifeste & Genèse
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white">
          À Propos de VQR CREATOR
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl mx-auto font-serif italic">
          « Crée. Persévère. Progresse. »
        </p>
      </div>

      {/* Narrative Manifesto */}
      <div className="space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <h2 className="text-xl font-display font-bold text-white">
            1. Notre Mission
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            VQR Creator a été conçu pour une raison simple : libérer le potentiel des créateurs de contenu débutants et intermédiaires souvent perdus au milieu de discours contradictoires et de fausses promesses sensationnalistes.
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Notre vocation est de fournir un socle d'apprentissage rigoureux, structuré et sans artifice, où chaque compétence (trouver une idée, structurer un hook, éditer avec du rythme, analyser froidement ses métriques) est découpée en étapes immédiatement activables.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <h2 className="text-xl font-display font-bold text-white">
            2. Pourquoi VQR a vu le jour
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Trop de créateurs talentueux abandonnent après seulement 2 ou 3 semaines. Pourquoi ? Parce qu'ils confondent un début timide avec un échec définitif.
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Le monde des réseaux sociaux fait croire à des ascensions magiques en une nuit. La réalité vécue par tous les créateurs d'exception est bien plus noble : c'est celle de l'artisanat, de l'expérimentation constante et de la résilience émotionnelle.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-700/80 space-y-4 shadow-xl">
          <h2 className="text-xl font-display font-bold text-white">
            3. La Conviction Fondamentale de VQR
          </h2>
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm font-medium">
            La réussite sur les réseaux sociaux ne provient ni de la chance, ni d'un mystérieux "code secret" des algorithmes. Elle est le fruit direct de la discipline, de l'apprentissage continu et de la régularité.
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Si vous vous engagez à vous améliorer de 1% à chaque vidéo, à accepter les bides comme des informations techniques et à vous présenter devant la caméra semaine après semaine, le résultat ne sera qu'une question de temps mathématique.
          </p>
        </div>
      </div>

      {/* 3 Pillars Acronym */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
          <div className="text-2xl font-display font-extrabold text-white">CRÉE</div>
          <p className="text-xs text-zinc-400">
            L'action imparfaite précède toujours la maîtrise. N'attends pas le studio parfait.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
          <div className="text-2xl font-display font-extrabold text-white">PERSÉVÈRE</div>
          <p className="text-xs text-zinc-400">
            Résiste aux doutes des premières semaines. Les algorithmes récompensent la ténacité.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
          <div className="text-2xl font-display font-extrabold text-white">PROGRESSE</div>
          <p className="text-xs text-zinc-400">
            Mesure, ajuste et peaufine tes hooks. 1% d'amélioration cumulée transforme ton audience.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-6">
        <button
          onClick={() => onNavigate('challenge')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-zinc-950 font-bold text-xs rounded-xl hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/5"
        >
          <span>Rejoindre le Défi 30 Jours dès maintenant</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
