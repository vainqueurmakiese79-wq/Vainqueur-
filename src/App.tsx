import React, { useState, useEffect } from 'react';
import { NavTab, PersonalGoal, CreatedContentLog } from './types/creator';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { NotificationToast, ToastMessage } from './components/NotificationToast';
import { ContactModal } from './components/ContactModal';
import { PrivacyModal } from './components/PrivacyModal';

// Section components
import { HeroSection } from './components/sections/HeroSection';
import { StrategiesSection } from './components/sections/StrategiesSection';
import { ContentIdeasSection } from './components/sections/ContentIdeasSection';
import { VideoCreationSection } from './components/sections/VideoCreationSection';
import { SocialPlatformsSection } from './components/sections/SocialPlatformsSection';
import { MindsetSection } from './components/sections/MindsetSection';
import { QuickTipsSection } from './components/sections/QuickTipsSection';
import { Challenge30DaysSection } from './components/sections/Challenge30DaysSection';
import { VqrAiSection } from './components/sections/VqrAiSection';
import { ProgressDashboardSection } from './components/sections/ProgressDashboardSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { AboutSection } from './components/sections/AboutSection';

// Storage services
import {
  getCompletedChallengeDays,
  toggleChallengeDay,
  getSavedIdeaIds,
  toggleSavedIdeaId,
  getPersonalGoals,
  savePersonalGoals,
  getCreatedContentLogs,
  saveCreatedContentLogs,
} from './services/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Persistent States
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [savedIdeaIds, setSavedIdeaIds] = useState<string[]>([]);
  const [goals, setGoals] = useState<PersonalGoal[]>([]);
  const [contentLogs, setContentLogs] = useState<CreatedContentLog[]>([]);

  // Notifications Queue
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Initialize data on mount
  useEffect(() => {
    setCompletedDays(getCompletedChallengeDays());
    setSavedIdeaIds(getSavedIdeaIds());
    setGoals(getPersonalGoals());
    setContentLogs(getCreatedContentLogs());
  }, []);

  const addToast = (title: string, message?: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // State Handler: Challenge Day Toggle
  const handleToggleDay = (day: number) => {
    const updated = toggleChallengeDay(day);
    setCompletedDays(updated);
  };

  // State Handler: Saved Idea Toggle
  const handleToggleSavedIdea = (id: string) => {
    const updated = toggleSavedIdeaId(id);
    setSavedIdeaIds(updated);
  };

  // State Handler: Goal Toggle
  const handleToggleGoal = (id: string) => {
    const updated = goals.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g));
    setGoals(updated);
    savePersonalGoals(updated);
  };

  // State Handler: Add Goal
  const handleAddGoal = (text: string) => {
    const newGoal: PersonalGoal = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [...goals, newGoal];
    setGoals(updated);
    savePersonalGoals(updated);
  };

  // State Handler: Delete Goal
  const handleDeleteGoal = (id: string) => {
    const updated = goals.filter((g) => g.id !== id);
    setGoals(updated);
    savePersonalGoals(updated);
  };

  // State Handler: Add Content Log
  const handleAddContentLog = (
    title: string,
    platform: 'TikTok' | 'Instagram' | 'YouTube' | 'Facebook'
  ) => {
    const newLog: CreatedContentLog = {
      id: Date.now().toString(),
      title,
      platform,
      date: new Date().toISOString().split('T')[0],
    };
    const updated = [newLog, ...contentLogs];
    setContentLogs(updated);
    saveCreatedContentLogs(updated);
  };

  const handleNavigate = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-white selection:text-zinc-950">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        completedDaysCount={completedDays.length}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HeroSection
            onNavigate={handleNavigate}
            completedDaysCount={completedDays.length}
          />
        )}
        {activeTab === 'strategies' && <StrategiesSection onShowToast={addToast} />}
        {activeTab === 'ideas' && (
          <ContentIdeasSection
            savedIdeaIds={savedIdeaIds}
            onToggleSaveIdea={handleToggleSavedIdea}
            onShowToast={addToast}
          />
        )}
        {activeTab === 'creation' && <VideoCreationSection onShowToast={addToast} />}
        {activeTab === 'platforms' && <SocialPlatformsSection />}
        {activeTab === 'mindset' && <MindsetSection onShowToast={addToast} />}
        {activeTab === 'tips' && <QuickTipsSection onShowToast={addToast} />}
        {activeTab === 'challenge' && (
          <Challenge30DaysSection
            completedDays={completedDays}
            onToggleDay={handleToggleDay}
            onShowToast={addToast}
          />
        )}
        {activeTab === 'ai' && <VqrAiSection onShowToast={addToast} />}
        {activeTab === 'progress' && (
          <ProgressDashboardSection
            completedDays={completedDays}
            savedIdeaIds={savedIdeaIds}
            goals={goals}
            contentLogs={contentLogs}
            onToggleGoal={handleToggleGoal}
            onAddGoal={handleAddGoal}
            onDeleteGoal={handleDeleteGoal}
            onAddContentLog={handleAddContentLog}
            onNavigate={handleNavigate}
            onShowToast={addToast}
          />
        )}
        {activeTab === 'resources' && <ResourcesSection onShowToast={addToast} />}
        {activeTab === 'about' && <AboutSection onNavigate={handleNavigate} />}
      </main>

      {/* Bottom Footer */}
      <Footer
        setActiveTab={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onShowToast={addToast}
      />

      {/* Privacy Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Notification Toasts */}
      <NotificationToast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
