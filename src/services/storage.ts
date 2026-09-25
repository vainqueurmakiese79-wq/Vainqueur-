import { PersonalGoal, CreatedContentLog } from '../types/creator';

const STORAGE_KEYS = {
  COMPLETED_CHALLENGE_DAYS: 'vqr_completed_challenge_days',
  SAVED_IDEAS: 'vqr_saved_ideas',
  PERSONAL_GOALS: 'vqr_personal_goals',
  CONTENT_LOGS: 'vqr_content_logs',
  USER_PREFERENCES: 'vqr_user_preferences',
};

export const getCompletedChallengeDays = (): number[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_CHALLENGE_DAYS);
    return raw ? JSON.parse(raw) : [1]; // Start with Day 1 unlocked or completed as demonstration
  } catch (e) {
    return [1];
  }
};

export const toggleChallengeDay = (day: number): number[] => {
  const current = getCompletedChallengeDays();
  let updated: number[];
  if (current.includes(day)) {
    updated = current.filter(d => d !== day);
  } else {
    updated = [...current, day].sort((a, b) => a - b);
  }
  try {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_CHALLENGE_DAYS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save completed challenge days', e);
  }
  return updated;
};

export const getSavedIdeaIds = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED_IDEAS);
    return raw ? JSON.parse(raw) : ['mot-1', 'edu-1', 'bus-1'];
  } catch (e) {
    return ['mot-1', 'edu-1', 'bus-1'];
  }
};

export const toggleSavedIdea = (ideaId: string): string[] => {
  const current = getSavedIdeaIds();
  let updated: string[];
  if (current.includes(ideaId)) {
    updated = current.filter(id => id !== ideaId);
  } else {
    updated = [...current, ideaId];
  }
  try {
    localStorage.setItem(STORAGE_KEYS.SAVED_IDEAS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save idea', e);
  }
  return updated;
};

export const getPersonalGoals = (): PersonalGoal[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PERSONAL_GOALS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  const defaults: PersonalGoal[] = [
    {
      id: 'g-1',
      text: 'Publier 3 vidéos cette semaine sans sauter de jour',
      completed: true,
      targetDate: '2026-09-25',
      createdAt: '2026-09-18',
    },
    {
      id: 'g-2',
      text: 'Tester 5 hooks différents sur les 3 premières secondes',
      completed: false,
      targetDate: '2026-09-28',
      createdAt: '2026-09-20',
    },
    {
      id: 'g-3',
      text: 'Créer une série de 3 épisodes autour d\'un sujet précis',
      completed: false,
      targetDate: '2026-10-02',
      createdAt: '2026-09-21',
    },
  ];
  return defaults;
};

export const savePersonalGoals = (goals: PersonalGoal[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.PERSONAL_GOALS, JSON.stringify(goals));
  } catch (e) {
    console.error('Failed to save personal goals', e);
  }
};

export const getContentLogs = (): CreatedContentLog[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONTENT_LOGS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  const defaults: CreatedContentLog[] = [
    {
      id: 'c-1',
      title: '3 erreurs fatales de débutant en création vidéo',
      platform: 'TikTok',
      date: '2026-09-19',
      notes: 'Bonne accroche, 62% de rétention sur les 5 premières secondes.',
    },
    {
      id: 'c-2',
      title: 'Mon système pour ne plus jamais manquer d\'idées',
      platform: 'Instagram',
      date: '2026-09-21',
      notes: 'Beaucoup d\'enregistrements dans les favoris.',
    },
  ];
  return defaults;
};

export const saveContentLogs = (logs: CreatedContentLog[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CONTENT_LOGS, JSON.stringify(logs));
  } catch (e) {
    console.error('Failed to save content logs', e);
  }
};

export const toggleSavedIdeaId = toggleSavedIdea;
export const getCreatedContentLogs = getContentLogs;
export const saveCreatedContentLogs = saveContentLogs;
