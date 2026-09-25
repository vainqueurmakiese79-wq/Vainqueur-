import React from 'react';
import { NavTab } from '../types/creator';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenContact: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenContact,
  onOpenPrivacy,
}) => {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="font-display font-bold text-white text-lg tracking-tight">
                VQR CREATOR
              </span>
            </div>
            <p className="text-sm text-zinc-400 font-serif italic">
              « Crée. Persévère. Progresse. »
            </p>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Plateforme éducative indépendante dédiée à l'apprentissage pratique de la création de contenu vidéo et au développement de la persévérance sur les réseaux sociaux.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <button
              onClick={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              À propos
            </button>
            <button
              onClick={() => {
                setActiveTab('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Ressources
            </button>
            <button
              onClick={onOpenContact}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={onOpenPrivacy}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Confidentialité
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {currentYear} VQR CREATOR. Tous droits réservés.
          </div>
          <div className="text-zinc-400 font-mono">
            Vision · Qualité · Résilience
          </div>
        </div>
      </div>
    </footer>
  );
};
