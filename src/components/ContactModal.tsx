import React, { useState } from 'react';
import { X, Send, Mail, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (title: string, msg?: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Question sur les stratégies de contenu');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSent(true);
    setTimeout(() => {
      onShowToast('Message envoyé !', 'L\'équipe VQR Creator vous répondra sous 24 à 48 heures.');
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded-2xl p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold">Contacter VQR CREATOR</h3>
            <p className="text-xs text-zinc-400">Une question, un retour d'expérience ou une suggestion ?</p>
          </div>
        </div>

        {sent ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <p className="text-base font-semibold">Message transmis avec succès !</p>
            <p className="text-xs text-zinc-400">Merci de contribuer à la communauté VQR.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-400 mb-1">Votre Nom ou Pseudo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Sarah Créatrice"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1">Votre Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-zinc-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">Sujet de votre message</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-zinc-500"
              >
                <option value="Question sur les stratégies de contenu">Question sur les stratégies de contenu</option>
                <option value="Témoignage Défi 30 Jours">Témoignage sur le Défi 30 Jours</option>
                <option value="Retour sur l'outil VQR AI">Retour ou suggestion sur l'outil VQR AI</option>
                <option value="Autre demande">Autre demande</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">Votre Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Expliquez-nous comment nous pouvons vous aider..."
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-zinc-500 resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Envoyer</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
