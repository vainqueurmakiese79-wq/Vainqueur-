import React, { useState } from 'react';
import { thirtyDayChallengeData } from '../../data/thirtyDayChallengeData';
import { ChallengeDay } from '../../types/creator';
import {
  CheckCircle2,
  Circle,
  Trophy,
  Calendar,
  Clock,
  Flame,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface Challenge30DaysSectionProps {
  completedDays: number[];
  onToggleDay: (day: number) => void;
  onShowToast: (title: string, msg?: string) => void;
}

export const Challenge30DaysSection: React.FC<Challenge30DaysSectionProps> = ({
  completedDays,
  onToggleDay,
  onShowToast,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [activeDayModal, setActiveDayModal] = useState<ChallengeDay | null>(null);

  const completedCount = completedDays.length;
  const progressPercent = Math.round((completedCount / 30) * 100);

  const phases = [
    { id: 'all', label: 'Les 30 Jours' },
    { id: 'Semaine 1', label: 'S1 : Fondations (J1-J7)' },
    { id: 'Semaine 2', label: 'S2 : Rythme & Batching (J8-J14)' },
    { id: 'Semaine 3', label: 'S3 : Rétention & Story (J15-J21)' },
    { id: 'Semaine 4', label: 'S4 : Analyse & Maîtrise (J22-J30)' },
  ];

  const filteredDays = thirtyDayChallengeData.filter((d) => {
    if (selectedPhase === 'all') return true;
    return d.phase.includes(selectedPhase);
  });

  const handleCheckboxClick = (dayNum: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const willBeCompleted = !completedDays.includes(dayNum);
    onToggleDay(dayNum);

    if (willBeCompleted) {
      onShowToast(
        `Jour ${dayNum} terminé ! 🎉`,
        `Mission accomplie : « ${thirtyDayChallengeData.find((d) => d.day === dayNum)?.title} »`
      );
    } else {
      onShowToast(`Jour ${dayNum} démarqué`, 'Reprenez la mission quand vous êtes prêt.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-zinc-900 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Programme de Discipline
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-1">
          Le Défi 30 Jours du Créateur VQR
        </h1>
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          30 missions quotidiennes progressives pour passer de l'hésitation à une habitude de création automatique et inébranlable.
        </p>
      </div>

      {/* Progress Dashboard Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Progression du Défi</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
              {completedCount}
            </span>
            <span className="text-lg text-zinc-400 font-mono">/ 30 jours complétés</span>
            <span className="text-sm font-mono text-zinc-300">({progressPercent}%)</span>
          </div>
          <p className="text-xs text-zinc-400">
            {completedCount === 30
              ? 'Félicitations ! Vous avez achevé l\'intégralité du programme VQR avec brio.'
              : `Plus que ${30 - completedCount} journées pour ancrer votre routine définitive.`}
          </p>
        </div>

        {/* Progress Bar & Badges */}
        <div className="w-full md:w-80 space-y-3">
          <div className="w-full bg-zinc-950 h-3 rounded-full overflow-hidden border border-zinc-800">
            <div
              className="bg-white h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-400">
            <span>J0 Démarrage</span>
            <span>J15 Mi-parcours</span>
            <span>J30 Créateur VQR</span>
          </div>
        </div>
      </div>

      {/* Phase Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {phases.map((ph) => (
          <button
            key={ph.id}
            onClick={() => setSelectedPhase(ph.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
              selectedPhase === ph.id
                ? 'bg-white text-zinc-950 font-semibold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {ph.label}
          </button>
        ))}
      </div>

      {/* 30 Days Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDays.map((day) => {
          const isDone = completedDays.includes(day.day);
          return (
            <div
              key={day.day}
              onClick={() => setActiveDayModal(day)}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer space-y-4 ${
                isDone
                  ? 'bg-zinc-900/40 border-zinc-800 opacity-90'
                  : 'bg-zinc-900/90 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900'
              }`}
            >
              {/* Card Header with Checkbox */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    Jour {day.day < 10 ? `0${day.day}` : day.day}
                  </span>
                  <button
                    onClick={(e) => handleCheckboxClick(day.day, e)}
                    className="p-1 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                    aria-label={`Marquer le jour ${day.day} comme terminé`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-zinc-400 hover:text-zinc-200" />
                    )}
                  </button>
                </div>

                <h3
                  className={`text-sm font-bold ${
                    isDone ? 'text-zinc-300 line-through' : 'text-white'
                  }`}
                >
                  {day.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {day.mission}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  {day.timeEstimate}
                </span>
                <span className="text-zinc-400 hover:text-white flex items-center gap-1">
                  Détails <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Day Mission Detail Modal */}
      {activeDayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-zinc-900 border border-zinc-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6 relative">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>Jour {activeDayModal.day} sur 30</span>
                <span aria-hidden="true">·</span>
                <span>{activeDayModal.phase}</span>
              </div>
              <button
                onClick={() => setActiveDayModal(null)}
                className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-1 bg-zinc-800 rounded"
              >
                Fermer
              </button>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold">
                {activeDayModal.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Objectif clé : {activeDayModal.objective}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
              <span className="font-mono text-zinc-400 uppercase tracking-wider block text-[10px]">
                Ta mission du jour :
              </span>
              <p className="text-zinc-200 leading-relaxed font-medium text-sm">
                {activeDayModal.mission}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Plan d'action pas à pas ({activeDayModal.timeEstimate}) :
              </span>
              <div className="space-y-2">
                {activeDayModal.actionChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                onClick={() => {
                  onToggleDay(activeDayModal.day);
                  const isNowDone = !completedDays.includes(activeDayModal.day);
                  if (isNowDone) {
                    onShowToast(
                      `Jour ${activeDayModal.day} terminé ! 🎉`,
                      'Continue sur cette lancée !'
                    );
                  }
                  setActiveDayModal(null);
                }}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                  completedDays.includes(activeDayModal.day)
                    ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    : 'bg-white text-zinc-950 hover:bg-zinc-200'
                }`}
              >
                {completedDays.includes(activeDayModal.day) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Déjà terminé (Décocher)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Marquer cette journée comme terminée</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
