import React, { useState } from 'react';
import { platformsData } from '../../data/platformsData';
import { SocialPlatformData } from '../../types/creator';
import {
  Share2,
  Clock,
  Flame,
  Users,
  BarChart2,
  AlertTriangle,
  Smartphone,
  Tv,
  Check,
} from 'lucide-react';

export const SocialPlatformsSection: React.FC = () => {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>(platformsData[0].id);

  const activePlatform =
    platformsData.find((p) => p.id === selectedPlatformId) || platformsData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Distribution & Écosystèmes
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          Stratégies Réseaux Sociaux
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Comprendre la psychologie d'audience et les dynamiques réelles de TikTok, Instagram, YouTube et Facebook sans fausses illusions.
        </p>

        {/* Anti-Scam / Reality Check Warning Banner Required by Prompt */}
        <div className="mt-6 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-white">Engagement d'honnêteté VQR : </span>
            <span>
              Nous ne promettons jamais de millions de vues ni d'abonnés garantis. Chaque algorithme répond à la réaction humaine de spectateurs réels. Ton travail est de maîtriser ton message, pas de chercher des raccourcis artificiels.
            </span>
          </div>
        </div>
      </div>

      {/* Platform Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {platformsData.map((plat) => {
          const isSelected = plat.id === selectedPlatformId;
          return (
            <button
              key={plat.id}
              onClick={() => setSelectedPlatformId(plat.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-zinc-900 border-zinc-600 text-white shadow-lg'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:border-zinc-800'
              }`}
            >
              <div className="text-xs font-mono text-zinc-400 mb-1">Plateforme</div>
              <div className="text-lg font-display font-bold text-white">{plat.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Platform Card Overview */}
      <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800 space-y-8">
        <div className="border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-white font-semibold">{activePlatform.name}</span>
            <span aria-hidden="true">·</span>
            <span>Guide d'Exécution VQR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
            {activePlatform.tagline}
          </h2>
        </div>

        {/* 2 Big Blocks: Formats & Frequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <Smartphone className="w-4 h-4 text-zinc-300" />
              <span>Format Idéal & Cadrage</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {activePlatform.bestFormats}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <Clock className="w-4 h-4 text-zinc-300" />
              <span>Régularité & Cadence Recommandée</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {activePlatform.recommendedFrequency}
            </p>
          </div>
        </div>

        {/* 3 Detail Columns: Engagement, Community, Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
          {/* Engagement */}
          <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/60 space-y-4">
            <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Engagement & Rétention</span>
            </div>
            <ul className="space-y-3 text-zinc-400">
              {activePlatform.retentionRules.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-1.5" />
                  <span className="text-zinc-300">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/60 space-y-4">
            <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              <Users className="w-4 h-4 text-sky-400" />
              <span>Construction de Communauté</span>
            </div>
            <ul className="space-y-3 text-zinc-400">
              {activePlatform.communityRules.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-1.5" />
                  <span className="text-zinc-300">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Analytics */}
          <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800/60 space-y-4">
            <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              <span>Analyse des Performances</span>
            </div>
            <ul className="space-y-3 text-zinc-400">
              {activePlatform.analyticsKeys.map((a, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-1.5" />
                  <span className="text-zinc-300">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The Realistic Truth Callout */}
        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400">
          <span className="font-mono text-white uppercase tracking-wider font-semibold mr-2">
            La réalité du terrain :
          </span>
          {activePlatform.realisticTruth}
        </div>
      </div>
    </div>
  );
};
