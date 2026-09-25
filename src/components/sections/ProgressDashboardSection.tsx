import React, { useState } from 'react';
import { PersonalGoal, CreatedContentLog, NavTab } from '../../types/creator';
import { contentIdeasData } from '../../data/contentIdeasData';
import {
  Trophy,
  Target,
  Bookmark,
  Video,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface ProgressDashboardSectionProps {
  completedDays: number[];
  savedIdeaIds: string[];
  goals: PersonalGoal[];
  contentLogs: CreatedContentLog[];
  onToggleGoal: (id: string) => void;
  onAddGoal: (text: string) => void;
  onDeleteGoal: (id: string) => void;
  onAddContentLog: (title: string, platform: 'TikTok' | 'Instagram' | 'YouTube' | 'Facebook') => void;
  onNavigate: (tab: NavTab) => void;
  onShowToast: (title: string, msg?: string) => void;
}

export const ProgressDashboardSection: React.FC<ProgressDashboardSectionProps> = ({
  completedDays,
  savedIdeaIds,
  goals,
  contentLogs,
  onToggleGoal,
  onAddGoal,
  onDeleteGoal,
  onAddContentLog,
  onNavigate,
  onShowToast,
}) => {
  const [newGoalText, setNewGoalText] = useState('');
  const [newLogTitle, setNewLogTitle] = useState('');
  const [newLogPlatform, setNewLogPlatform] = useState<'TikTok' | 'Instagram' | 'YouTube' | 'Facebook'>('TikTok');
  const [showLogModal, setShowLogModal] = useState(false);

  const completedDaysCount = completedDays.length;
  const challengePercent = Math.round((completedDaysCount / 30) * 100);

  const savedIdeas = contentIdeasData.filter((i) => savedIdeaIds.includes(i.id));

  // Weekly simulated streak indicator (Mon to Sun)
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  // Active days this week based on completed challenge or logs
  const activeDaysIndices = [0, 1, 3]; // Lun, Mar, Jeu active

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    onAddGoal(newGoalText.trim());
    setNewGoalText('');
    onShowToast('Objectif ajouté !', 'Fixé pour votre semaine de création.');
  };

  const handleCreateLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLogTitle.trim()) return;
    onAddContentLog(newLogTitle.trim(), newLogPlatform);
    setNewLogTitle('');
    setShowLogModal(false);
    onShowToast('Contenu enregistré dans le journal !', 'Félicitations pour cette nouvelle vidéo publiée.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Tableau de Bord Personnel
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          Suivi de Progression & Discipline
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Mesurez vos efforts réels, suivez vos objectifs personnels et conservez votre bibliothèque d'idées favorites en un seul endroit.
        </p>
      </div>

      {/* 4 Stat Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Challenge 30J */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Défi 30 Jours</span>
            <Trophy className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-display font-extrabold text-white">
            {completedDaysCount} <span className="text-sm text-zinc-400 font-mono">/ 30</span>
          </div>
          <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden border border-zinc-800">
            <div className="bg-white h-full" style={{ width: `${challengePercent}%` }} />
          </div>
        </div>

        {/* Stat 2: Personal Goals */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Objectifs Actifs</span>
            <Target className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-display font-extrabold text-white">
            {goals.filter((g) => g.completed).length}{' '}
            <span className="text-sm text-zinc-400 font-mono">/ {goals.length}</span>
          </div>
          <div className="text-[11px] text-zinc-400">
            {goals.filter((g) => !g.completed).length} en attente de réalisation
          </div>
        </div>

        {/* Stat 3: Saved Ideas */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Idées Sauvegardées</span>
            <Bookmark className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-display font-extrabold text-white">
            {savedIdeaIds.length}
          </div>
          <div className="text-[11px] text-zinc-400">Dans votre carnet personnel</div>
        </div>

        {/* Stat 4: Content Created */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Vidéos Publiées</span>
            <Video className="w-4 h-4 text-white" />
          </div>
          <div className="text-3xl font-display font-extrabold text-white">
            {contentLogs.length}
          </div>
          <div className="text-[11px] text-zinc-400">Enregistrées dans le journal</div>
        </div>
      </div>

      {/* Weekly Activity Tracker Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Régularité Hebdomadaire
            </span>
            <h3 className="text-base sm:text-lg font-display font-bold text-white mt-0.5">
              Rythme de publication des 7 derniers jours
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
            3 jours de publication tenus
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2 pt-2">
          {daysOfWeek.map((day, idx) => {
            const isActive = activeDaysIndices.includes(idx);
            return (
              <div
                key={day}
                className={`p-3 sm:p-4 rounded-xl text-center border transition-all ${
                  isActive
                    ? 'bg-zinc-800/90 border-zinc-600 text-white shadow-md'
                    : 'bg-zinc-950/40 border-zinc-900 text-zinc-400'
                }`}
              >
                <div className="text-[11px] font-mono text-zinc-400 mb-1">{day}</div>
                <div className="flex justify-center">
                  {isActive ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2 Main Columns: Personal Goals & Content Log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Goals Section */}
        <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase">Focus Personnel</span>
              <h3 className="text-lg font-display font-bold text-white">Objectifs de la Semaine</h3>
            </div>
            <Target className="w-4 h-4 text-zinc-400" />
          </div>

          {/* Add Goal Input */}
          <form onSubmit={handleCreateGoal} className="flex gap-2">
            <input
              type="text"
              value={newGoalText}
              onChange={(e) => setNewGoalText(e.target.value)}
              placeholder="Ajouter un nouvel objectif (ex: tourner 3 vidéos)..."
              className="flex-1 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-white text-zinc-950 rounded-xl text-xs font-bold hover:bg-zinc-200 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Ajouter</span>
            </button>
          </form>

          {/* Goals List */}
          <div className="space-y-2 text-xs">
            {goals.map((g) => (
              <div
                key={g.id}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 group"
              >
                <button
                  onClick={() => onToggleGoal(g.id)}
                  className="flex items-center gap-2.5 text-left flex-1 mr-2 cursor-pointer"
                >
                  {g.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-zinc-400 shrink-0 group-hover:text-zinc-200" />
                  )}
                  <span
                    className={`${
                      g.completed ? 'text-zinc-400 line-through' : 'text-zinc-200 font-medium'
                    }`}
                  >
                    {g.text}
                  </span>
                </button>
                <button
                  onClick={() => onDeleteGoal(g.id)}
                  className="text-zinc-400 hover:text-rose-400 p-1 rounded transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Created Logs Section */}
        <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase">Journal d'Activité</span>
              <h3 className="text-lg font-display font-bold text-white">Contenus Créés & Publiés</h3>
            </div>
            <button
              onClick={() => setShowLogModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-mono transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Enregistrer une vidéo</span>
            </button>
          </div>

          {/* Logs List */}
          <div className="space-y-3 text-xs">
            {contentLogs.length === 0 ? (
              <p className="text-xs text-zinc-400 py-4 text-center">
                Aucune vidéo enregistrée pour l'instant. Cliquez sur le bouton pour consigner votre première création !
              </p>
            ) : (
              contentLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                      {log.platform}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">{log.date}</span>
                  </div>
                  <h4 className="font-semibold text-white text-xs">{log.title}</h4>
                  {log.notes && <p className="text-zinc-400 text-[11px] italic">{log.notes}</p>}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Saved Ideas Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase">Favoris Personnels</span>
            <h3 className="text-xl font-display font-bold text-white">
              Idées Sauvegardées ({savedIdeas.length})
            </h3>
          </div>
          <button
            onClick={() => onNavigate('ideas')}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Explorer la bibliothèque</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {savedIdeas.length === 0 ? (
          <div className="text-center py-8 text-xs text-zinc-400">
            Vous n'avez pas encore d'idées dans vos favoris. Parcourez l'onglet{' '}
            <button
              onClick={() => onNavigate('ideas')}
              className="text-white underline cursor-pointer"
            >
              Idées de Contenu
            </button>{' '}
            et cliquez sur l'icône marque-page pour en sauvegarder.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {savedIdeas.map((idea) => (
              <div
                key={idea.id}
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">
                    {idea.category}
                  </div>
                  <h4 className="font-bold text-white line-clamp-2">{idea.title}</h4>
                  <p className="text-zinc-400 text-[11px] line-clamp-2 mt-1">{idea.hook}</p>
                </div>
                <button
                  onClick={() => onNavigate('ideas')}
                  className="text-[11px] font-mono text-zinc-400 hover:text-white pt-2 border-t border-zinc-900 text-left"
                >
                  Voir la structure complète →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Log Content Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl p-6 text-white shadow-2xl space-y-4">
            <h3 className="text-base font-bold font-display">Consigner une vidéo publiée</h3>
            <form onSubmit={handleCreateLog} className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-400 mb-1">Titre ou sujet de la vidéo</label>
                <input
                  type="text"
                  required
                  value={newLogTitle}
                  onChange={(e) => setNewLogTitle(e.target.value)}
                  placeholder="Ex : 3 astuces pour débuter sur TikTok"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Plateforme de diffusion</label>
                <select
                  value={newLogPlatform}
                  onChange={(e) =>
                    setNewLogPlatform(e.target.value as 'TikTok' | 'Instagram' | 'YouTube' | 'Facebook')
                  }
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none"
                >
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram">Instagram</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Facebook">Facebook</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="px-3 py-1.5 bg-zinc-800 rounded-lg text-zinc-300"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-white text-zinc-950 font-bold rounded-lg"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
