import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-2xl p-6 text-white shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold">Politique de Confidentialité</h3>
            <p className="text-xs text-zinc-400">VQR CREATOR respecte votre travail et vos données personnelles</p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
          <div>
            <h4 className="font-semibold text-white text-sm mb-1">1. Stockage Local (Privacy by Design)</h4>
            <p className="text-zinc-400">
              Vos progrès sur le Défi 30 Jours, vos idées de vidéos enregistrées, vos objectifs et vos historiques de contenu sont stockés directement dans le stockage local (localStorage) de votre propre navigateur. Aucune donnée privée n'est vendue ni transférée à des tiers publicitaires.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-1">2. Génération VQR AI</h4>
            <p className="text-zinc-400">
              Lorsque vous utilisez l'assistant de génération VQR AI, les textes saisis ne servent qu'à générer en temps réel vos propositions d'idées, de titres et de scripts. Ils ne sont ni archivés à des fins d'entraînement public, ni associés à votre profil personnel.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-1">3. Transparence Algorithmique</h4>
            <p className="text-zinc-400">
              VQR Creator s'engage à ne jamais vendre de promesses fallacieuses de croissance miraculeuse ou de faux abonnés. L'ensemble des stratégies repose sur la discipline, la rigueur éditoriale et la régularité authentique.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-1">4. Vos Droits</h4>
            <p className="text-zinc-400">
              Vous pouvez à tout moment effacer vos données locales directement en réinitialisant le cache de votre navigateur ou depuis le tableau de bord de progression.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors text-xs"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
