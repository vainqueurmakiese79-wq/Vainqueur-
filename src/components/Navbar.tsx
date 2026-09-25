import React, { useState } from 'react';
import { NavTab } from '../types/creator';
import { Search, Menu, X, Sparkles, Trophy } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenSearch: () => void;
  completedDaysCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  completedDaysCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'strategies', label: 'Stratégies' },
    { id: 'ideas', label: 'Idées' },
    { id: 'creation', label: 'Création' },
    { id: 'platforms', label: 'Réseaux' },
    { id: 'mindset', label: 'Mentalité' },
    { id: 'tips', label: 'Astuces' },
    { id: 'challenge', label: 'Défi 30 jours' },
    { id: 'ai', label: 'VQR AI' },
    { id: 'progress', label: 'Progression' },
    { id: 'resources', label: 'Ressources' },
    { id: 'about', label: 'À propos' },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Monogram */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="VQR Creator Accueil"
        >
          {/* Distinctive VQR Monogram */}
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Dynamic stylized V-Q-R geometry */}
              <path d="M4 5l4 9 4-9" />
              <path d="M12 11a4 4 0 1 0 5 5" />
              <path d="M15 15l4 4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-tight text-white text-base leading-none group-hover:text-zinc-200 transition-colors">
              VQR CREATOR
            </span>
            <span className="text-[10px] tracking-widest text-zinc-400 font-mono uppercase mt-0.5">
              Crée · Persévère · Progresse
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1" aria-label="Navigation principale">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer rounded-md ${
                  isActive
                    ? 'text-white bg-zinc-900 border border-zinc-800'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                {item.label}
                {item.id === 'ai' && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1.5 align-middle animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Search + Quick Progress + Hamburger) */}
        <div className="flex items-center gap-2">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs transition-colors cursor-pointer"
            title="Rechercher (Ctrl+K)"
            aria-label="Ouvrir la recherche"
          >
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Recherche</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-950 rounded border border-zinc-800">
              ⌘K
            </kbd>
          </button>

          {/* Quick Challenge Progress Indicator */}
          <button
            onClick={() => handleNavClick('challenge')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs transition-colors cursor-pointer"
            title="Accéder au défi 30 jours"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">{completedDaysCount}/30 j</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors focus:outline-none"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-3 pb-5 space-y-1">
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-white border border-zinc-800 font-semibold'
                      : 'text-zinc-300 hover:bg-zinc-900/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'ai' && (
                    <span className="flex items-center text-[10px] text-emerald-400 font-mono">
                      <Sparkles className="w-3 h-3 mr-1" /> IA
                    </span>
                  )}
                  {item.id === 'challenge' && (
                    <span className="text-[10px] text-zinc-400 font-mono">
                      {completedDaysCount}/30
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-xs text-zinc-400 px-1">
            <span>VQR CREATOR v1.0</span>
            <span className="font-mono">« Crée. Persévère. Progresse. »</span>
          </div>
        </div>
      )}
    </header>
  );
};
