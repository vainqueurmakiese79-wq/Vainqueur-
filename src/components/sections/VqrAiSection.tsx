import React, { useState } from 'react';
import { requestAiGeneration } from '../../services/aiService';
import { AiGeneratedOutput } from '../../types/creator';
import {
  Sparkles,
  Send,
  Loader2,
  Copy,
  Check,
  Lightbulb,
  FileText,
  Bookmark,
  TrendingUp,
  Cpu,
} from 'lucide-react';

interface VqrAiSectionProps {
  onShowToast: (title: string, msg?: string) => void;
}

export const VqrAiSection: React.FC<VqrAiSectionProps> = ({ onShowToast }) => {
  const [prompt, setPrompt] = useState('Je crée du contenu sur la motivation et je manque d\'idées.');
  const [platform, setPlatform] = useState('TikTok & Reels');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiGeneratedOutput | null>(null);
  const [sourceInfo, setSourceInfo] = useState<string>('Moteur VQR Intelligent');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const samplePrompts = [
    'Je crée du contenu sur la motivation et je manque d\'idées.',
    'Je parle de business et freelance, je veux des hooks percutants.',
    'Je fais du fitness et je veux expliquer les étirements du dos sans jargon.',
    'Je veux créer une série de 3 vidéos sur le minimalisme digital.',
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || loading) return;

    setLoading(true);
    try {
      const res = await requestAiGeneration({
        prompt,
        platform,
      });

      if (res && res.data) {
        setResult(res.data);
        if (res.source.includes('gemini')) {
          setSourceInfo('Généré par Gemini 3.8 Flash (Serveur IA Connecté)');
        } else {
          setSourceInfo('Généré par le Moteur VQR Creator (Architecture prête pour API IA)');
        }
        onShowToast('Génération terminée !', 'Découvrez vos idées, hooks et script ci-dessous.');
      }
    } catch (err) {
      console.error(err);
      onShowToast('Erreur de génération', 'Veuillez réessayer dans un instant.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onShowToast('Élément copié !', 'Prêt pour votre tournage.');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Assistant de Génération VQR AI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          VQR AI : Le Cerveau Créatif
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Exprimez votre thématique ou votre blocage créatif. VQR AI génère instantanément des idées de vidéos, des hooks choc, des titres, un script complet chrono, des idées de séries et des conseils personnalisés.
        </p>

        {/* Transparent API Status Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
          <Cpu className="w-3.5 h-3.5 text-zinc-300" />
          <span>Statut : Architecture Multi-Moteur (Gemini 3.8 Flash Ready)</span>
        </div>
      </div>

      {/* Input Console */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-5 shadow-xl">
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Votre situation ou thématique créative :
            </label>
            <textarea
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex : « Je crée du contenu sur la motivation et je manque d'idées. »"
              className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white text-sm focus:outline-none focus:border-zinc-500 resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Platform Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400">Cible :</span>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white focus:outline-none"
              >
                <option value="TikTok & Reels">TikTok & Instagram Reels (9:16)</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
                <option value="Format Long YouTube">YouTube Format Long</option>
                <option value="Multi-Plateformes">Multi-Plateformes</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-950 font-bold text-xs rounded-xl hover:bg-zinc-200 disabled:opacity-50 transition-all cursor-pointer shadow-lg shadow-white/5"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Génération en cours...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Générer l'ensemble du pack créatif</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Suggestion Pills */}
        <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
          <span className="font-mono text-[11px]">Exemples rapides :</span>
          {samplePrompts.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPrompt(s);
              }}
              className="px-2.5 py-1 bg-zinc-950 hover:bg-zinc-800 rounded-md border border-zinc-800 text-zinc-300 transition-colors cursor-pointer text-[11px]"
            >
              {s.slice(0, 45)}...
            </button>
          ))}
        </div>
      </div>

      {/* Generated Outputs Display */}
      {result && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-900 pb-3">
            <span>RÉSULTATS DE LA GÉNÉRATION</span>
            <span className="text-zinc-300">{sourceInfo}</span>
          </div>

          {/* 1. Video Ideas */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Idées de Vidéos Détaillées</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {result.ideas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-400">Idée #{idx + 1}</span>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.concept}</p>
                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200">
                      <span className="font-mono text-[10px] text-zinc-400 block mb-0.5">Hook :</span>
                      {item.hook}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(
                        `Titre: ${item.title}\nHook: ${item.hook}\nStructure: ${item.structure}\nCTA: ${item.cta}`,
                        `idea-${idx}`
                      )
                    }
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white pt-2 border-t border-zinc-800/80 self-end"
                  >
                    {copiedId === `idea-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>Copier</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Hooks & Titles in 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hooks */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center justify-between">
                <span>Hooks d'accroche (0-3s)</span>
                <span className="text-[10px] text-zinc-400 font-normal">Pour arrêter le scroll</span>
              </h4>
              <div className="space-y-2">
                {result.hooks.map((hk, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <p className="text-zinc-200 italic font-medium">{hk}</p>
                    <button
                      onClick={() => handleCopy(hk, `hk-${i}`)}
                      className="text-zinc-400 hover:text-white shrink-0 p-1"
                      title="Copier le hook"
                    >
                      {copiedId === `hk-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Titles */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center justify-between">
                <span>Titres Accrocheurs</span>
                <span className="text-[10px] text-zinc-400 font-normal">Pour la couverture & miniature</span>
              </h4>
              <div className="space-y-2">
                {result.titles.map((tt, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <p className="text-zinc-200 font-medium">{tt}</p>
                    <button
                      onClick={() => handleCopy(tt, `tt-${i}`)}
                      className="text-zinc-400 hover:text-white shrink-0 p-1"
                      title="Copier le titre"
                    >
                      {copiedId === `tt-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Short Script (45s) */}
          {result.shortScript && (
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-zinc-400">Modèle Prêt à Tourner</span>
                  <h4 className="text-base font-bold text-white">{result.shortScript.title}</h4>
                </div>
                <button
                  onClick={() =>
                    handleCopy(
                      `${result.shortScript?.title}\nHook: ${result.shortScript?.hook}\nCorps: ${result.shortScript?.body}\nTwist: ${result.shortScript?.twist}\nCTA: ${result.shortScript?.cta}`,
                      'full-script'
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-mono transition-colors"
                >
                  {copiedId === 'full-script' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copier le script entier</span>
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="font-mono text-zinc-400 text-[10px] block mb-1">ACCROCHE (0-3s) :</span>
                  <p className="text-zinc-200 font-medium">{result.shortScript.hook}</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="font-mono text-zinc-400 text-[10px] block mb-1">CORPS DU MESSAGE (3-35s) :</span>
                  <p className="text-zinc-300 leading-relaxed">{result.shortScript.body}</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="font-mono text-zinc-400 text-[10px] block mb-1">TWIST / NUANCE (35-45s) :</span>
                  <p className="text-zinc-200">{result.shortScript.twist}</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="font-mono text-zinc-400 text-[10px] block mb-1">APPEL À L'ACTION (CTA) :</span>
                  <p className="text-zinc-200 font-medium">{result.shortScript.cta}</p>
                </div>
              </div>
            </div>
          )}

          {/* 4. Series Idea & Personalized Advice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.seriesIdea && (
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3 text-xs">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  Idée de Série Récurrente
                </span>
                <h4 className="text-sm font-bold text-white">{result.seriesIdea.name}</h4>
                <p className="text-zinc-400 leading-relaxed">{result.seriesIdea.pitch}</p>
                <div className="space-y-1.5 pt-2">
                  {result.seriesIdea.episodes.map((ep, i) => (
                    <div key={i} className="p-2 bg-zinc-950 rounded-lg text-zinc-300 border border-zinc-900">
                      {ep}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3 text-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  Conseil Personnalisé VQR
                </span>
                <h4 className="text-sm font-bold text-white mt-1">Recommandation d'Exécution</h4>
                <p className="text-zinc-300 leading-relaxed mt-2">{result.advice}</p>
              </div>
              <div className="pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
                « Crée. Persévère. Progresse. »
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
