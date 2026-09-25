import { ContentIdea, IdeaCategory } from '../types/creator';

export const IDEA_CATEGORIES: IdeaCategory[] = [
  'Motivation',
  'Éducation',
  'Humour',
  'Storytelling',
  'Business',
  'Lifestyle',
  'Actualité',
  'Sport',
  'Technologie',
];

export const contentIdeasData: ContentIdea[] = [
  // MOTIVATION
  {
    id: 'mot-1',
    category: 'Motivation',
    title: 'La règle des 20 secondes pour vaincre la procrastination',
    concept: 'Expliquer comment réduire la friction physique pour commencer une tâche difficile sans attendre la motivation émotionnelle.',
    hook: '« Si tu as du mal à passer à l\'action aujourd\'hui, écoute cette règle des 20 secondes. »',
    structure: '0-4s: Le piège de l\'attente de motivation -> 4-18s: Le principe neurologique de friction -> 18-38s: Exemple concret (téléphone loin, carnet ouvert) -> 38-50s: Défi immédiat',
    cta: '« Quelle tâche repousses-tu depuis ce matin ? Applique ça dans les 5 minutes et dis-moi si ça a marché. »',
    difficulty: 'Facile',
    estimatedDuration: '45s'
  },
  {
    id: 'mot-2',
    category: 'Motivation',
    title: 'Pourquoi tes doutes actuels sont un signe de croissance',
    concept: 'Déculpabiliser le créateur qui traverse une phase de stagnation et lui montrer que le malaise précède toujours le saut de compétence.',
    hook: '« Ce moment exact où tu as envie de tout abandonner est en réalité ta plus grande opportunité. »',
    structure: '0-3s: Déclaration contre-intuitive -> 3-15s: La traversée du désert dans l\'apprentissage -> 15-35s: Pourquoi 95% des gens s\'arrêtent ici -> 35-48s: Le choix du créateur VQR',
    cta: '« Enregistre ce rappel pour ton prochain coup de mou. Tu n\'as pas échoué, tu es en plein apprentissage. »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '50s'
  },
  {
    id: 'mot-3',
    category: 'Motivation',
    title: 'La vérité sur la discipline quotidienne',
    concept: 'Démystifier les réveils à 4h30 du matin et revenir aux fondations simples : faire le minimum non négociable chaque jour.',
    hook: '« Oublie les discours de motivation à l\'américaine. Voici ce qu\'est réellement la discipline. »',
    structure: '0-4s: Rejet des clichés extrêmes -> 4-20s: La notion de "seuil minimal garanti" -> 20-40s: Comment 15 minutes par jour battent 8h le dimanche -> 40-52s: Conclusion puissante',
    cta: '« Quel est ton engagement non-négociable pour cette semaine ? Écris-le en commentaire pour sceller ta promesse. »',
    difficulty: 'Facile',
    estimatedDuration: '40s'
  },

  // ÉDUCATION
  {
    id: 'edu-1',
    category: 'Éducation',
    title: 'La méthode Feynman pour apprendre 3x plus vite',
    concept: 'Présenter la technique qui consiste à vulgariser un concept comme si on l\'expliquait à un enfant de 10 ans pour détecter ses lacunes.',
    hook: '« Si tu ne peux pas expliquer ton sujet à un enfant de 10 ans, c\'est que tu ne le maîtrises pas. »',
    structure: '0-4s: La citation provocatrice -> 4-18s: Les 4 étapes de la méthode Feynman -> 18-35s: Démonstration pratique en direct -> 35-48s: Application pour tes révisions ou ton contenu',
    cta: '« Essaie de résumer ta passion en 1 phrase simple dans les commentaires. Je noterai ta clarté ! »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '48s'
  },
  {
    id: 'edu-2',
    category: 'Éducation',
    title: '3 biais cognitifs qui te manipulent au quotidien',
    concept: 'Décrypter le biais de confirmation, l\'effet de halo et l\'illusion de fin de l\'histoire avec des exemples de la vie courante.',
    hook: '« Ton cerveau te ment au moins 10 fois par jour, et voici la preuve en 30 secondes. »',
    structure: '0-3s: Accroche psychologique -> 3-15s: Biais #1 et mise en situation -> 15-30s: Biais #2 -> 30-45s: Comment s\'en protéger au quotidien',
    cta: '« Lequel de ces biais as-tu remarqué le plus souvent chez toi ? Partage ton ressenti. »',
    difficulty: 'Facile',
    estimatedDuration: '45s'
  },
  {
    id: 'edu-3',
    category: 'Éducation',
    title: 'Comment prendre des notes que tu reliras vraiment',
    concept: 'Critiquer les surligneurs multicolores inutiles et enseigner la prise de notes orientée vers l\'action et la synthèse.',
    hook: '« Arrête de surligner tes livres en jaune fluo, ça ne sert strictement à rien. »',
    structure: '0-4s: Déconstruction de la mauvaise méthode -> 4-18s: Pourquoi le cerveau oublie les notes passives -> 18-38s: La méthode de résumé en 3 puces d\'action -> 38-50s: Démo rapide',
    cta: '« Sauvegarde la vidéo pour ta prochaine session de lecture ou de cours. »',
    difficulty: 'Facile',
    estimatedDuration: '42s'
  },

  // HUMOUR
  {
    id: 'hum-1',
    category: 'Humour',
    title: 'Quand tu essaies de tourner ta première vidéo (POV)',
    concept: 'Mise en scène comique de la personne qui recommence 47 fois sa première phrase, hésite, bafouille et perd patience contre son téléphone.',
    hook: '« POV : Tu as dit "Aujourd\'hui je tourne ma première vidéo en 10 minutes chrono". »',
    structure: '0-3s: Texte à l\'écran avec regard confiant -> 3-25s: Enchaînement rapide de ratés ("Bonjour à tous... non... Salut les... argh") -> 25-35s: Regard désespéré sur la batterie à 2% -> 35-42s: Fin ironique',
    cta: '« Tague le créateur qui met 3 heures pour sortir une story de 15 secondes. »',
    difficulty: 'Facile',
    estimatedDuration: '35s'
  },
  {
    id: 'hum-2',
    category: 'Humour',
    title: 'Les 4 types de personnes en réunion vidéo',
    concept: 'Imitation express des archétypes : celui qui a oublié son micro éteint, celui dont la connexion lag, celui qui mange en cachette, et le perfectionniste.',
    hook: '« On a tous ces 4 personnes dans nos appels de groupe, sans exception. »',
    structure: '0-3s: Annonce du concept -> 3-12s: Archétype 1 -> 12-22s: Archétype 2 -> 22-32s: Archétype 3 -> 32-40s: Le pire pour la fin',
    cta: '« Sois honnête : tu es lequel parmi les 4 ? »',
    difficulty: 'Facile',
    estimatedDuration: '40s'
  },
  {
    id: 'hum-3',
    category: 'Humour',
    title: 'L\'attente des premières statistiques après publication',
    concept: 'Sketch parodique montrant le créateur qui rafraîchit son écran toutes les 3 secondes en espérant un million de vues dans la minute.',
    hook: '« Ce que ton cerveau imagine 12 secondes après avoir appuyé sur "Publier". »',
    structure: '0-4s: Clic dramatique sur publier -> 4-18s: Attente intense avec musique épique -> 18-30s: Résultat : 1 vue (la sienne) -> 30-40s: Choc comique et réconfort',
    cta: '« Avoue qu\'on l\'a TOUS fait au moins une fois ! Partage ton pire record de rafraîchissement. »',
    difficulty: 'Facile',
    estimatedDuration: '30s'
  },

  // STORYTELLING
  {
    id: 'sto-1',
    category: 'Storytelling',
    title: 'Le jour où j\'ai tout effacé par accident (et ce que ça m\'a appris)',
    concept: 'Raconter une mésaventure technique douloureuse vécue au début et la révélation qui a suivi sur la résilience.',
    hook: '« Le 14 novembre dernier, j\'ai perdu 3 mois de travail en un seul clic. »',
    structure: '0-4s: Hook mystérieux et émotionnel -> 4-15s: La panique du moment -> 15-32s: La reconstruction forcée et la découverte d\'une méthode bien meilleure -> 32-48s: La morale universelle',
    cta: '« Quelle est la plus grosse erreur de débutant que tu as déjà commise ? Dis-le moi, on se sentira moins seuls. »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '55s'
  },
  {
    id: 'sto-2',
    category: 'Storytelling',
    title: 'Comment une rencontre imprévue a changé ma vision du travail',
    concept: 'Histoire concise d\'une conversation brève avec un inconnu ou mentor qui a déverrouillé un blocage mental.',
    hook: '« Un homme de 72 ans m\'a dit une phrase dans un train qui a détruit toutes mes certitudes. »',
    structure: '0-4s: Cadre narratif fort -> 4-18s: Le contexte de la rencontre -> 18-35s: La phrase exacte et le silence qui a suivi -> 35-50s: La leçon applicable pour chacun d\'entre nous',
    cta: '« As-tu déjà reçu un conseil d\'un parfait inconnu qui t\'a marqué à vie ? Raconte en com. »',
    difficulty: 'Avancé',
    estimatedDuration: '58s'
  },
  {
    id: 'sto-3',
    category: 'Storytelling',
    title: 'Ma première vidéo a fait 8 vues : pourquoi j\'ai quand même continué',
    concept: 'Partager le contraste entre l\'attente déçue du début et la fierté d\'avoir persévéré jusqu\'à construire une communauté engagée.',
    hook: '« Si tu as honte de tes premiers chiffres, regarde où j\'ai commencé il y a un an. »',
    structure: '0-4s: Capture d\'écran du premier résultat modeste -> 4-18s: Le sentiment de solitude initial -> 18-36s: Le déclic du plaisir d\'apprendre plutôt que de plaire -> 36-50s: L\'encouragement VQR',
    cta: '« Ton voyage commence au même endroit que tout le monde. N\'abandonne pas aujourd\'hui. »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '45s'
  },

  // BUSINESS
  {
    id: 'bus-1',
    category: 'Business',
    title: 'Pourquoi 90% des offres en ligne ne se vendent jamais',
    concept: 'Démontrer la différence fondamentale entre vendre des fonctionnalités abstraites et vendre la résolution d\'une douleur vive.',
    hook: '« Ne lance aucun produit ou service avant d\'avoir compris cette règle d\'offre irremplaçable. »',
    structure: '0-4s: Constat d\'échec fréquent -> 4-18s: L\'erreur de vendre la "caractéristique" -> 18-38s: La formule de la transformation émotionnelle -> 38-50s: Exemple avant/après',
    cta: '« Décris ton projet en un commentaire, je te donnerai un retour honnête sur ton angle de proposition. »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '50s'
  },
  {
    id: 'bus-2',
    category: 'Business',
    title: 'La stratégie de prix que les freelances oublient toujours',
    concept: 'Expliquer pourquoi facturer à l\'heure pénalise les experts et comment passer à la facturation à la valeur délivrée.',
    hook: '« Pourquoi facturer à l\'heure est le moyen le plus rapide de plafonner tes revenus. »',
    structure: '0-4s: Attaque de la tarification au temps -> 4-16s: Le paradoxe de l\'expert rapide -> 16-36s: La méthode de tarification au résultat client -> 36-48s: Modèle de négociation',
    cta: '« Enregistre ce conseil pour ta prochaine proposition commerciale. »',
    difficulty: 'Avancé',
    estimatedDuration: '45s'
  },
  {
    id: 'bus-3',
    category: 'Business',
    title: 'Comment valider une idée de business sans dépenser un euro',
    concept: 'Présenter la technique de pré-vente ou de sondage actif auprès d\'une audience avant de construire le moindre prototype.',
    hook: '« N\'investis pas 6 mois dans un projet que personne ne veut acheter. Fais ce test en 48h. »',
    structure: '0-4s: Le piège de construire en secret -> 4-18s: L\'expérience du formulaire de désir -> 18-36s: Les 3 questions de validation -> 36-48s: Conclusion pragmatique',
    cta: '« As-tu déjà testé ton idée auprès de vrais clients potentiels ? Dis-moi où tu en es. »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '48s'
  },

  // LIFESTYLE
  {
    id: 'life-1',
    category: 'Lifestyle',
    title: 'Une routine du matin minimaliste en 15 minutes',
    concept: 'Prendre le contre-pied des routines de 3 heures irréalistes et proposer 3 actions simples qui posent l\'intention de la journée.',
    hook: '« Tu n\'as pas besoin d\'une routine de 2 heures pour réussir ta journée. Voici la méthode 15 minutes. »',
    structure: '0-4s: Critique des routines impossibles -> 4-16s: 5 min d\'eau et lumière naturelle -> 16-28s: 5 min de clarification des 3 priorités -> 28-40s: 5 min de mouvement léger -> 40-48s: Clôture',
    cta: '« Quel est le premier geste que tu fais le matin ? (Si c\'est regarder ton téléphone, commente 📱). »',
    difficulty: 'Facile',
    estimatedDuration: '42s'
  },
  {
    id: 'life-2',
    category: 'Lifestyle',
    title: 'Le minimalisme digital : désencombrer son smartphone en 10 min',
    concept: 'Montrer comment transformer son téléphone d\'un aspirateur d\'attention en un outil de création délibéré.',
    hook: '« Voici à quoi ressemble un téléphone configuré pour créer au lieu de subir. »',
    structure: '0-3s: Écran d\'accueil épuré en vidéo -> 3-15s: La suppression des notifications inutiles -> 15-30s: L\'écran d\'accueil en noir et blanc -> 30-45s: Le gain de clarté mentale',
    cta: '« Essaie de passer ton écran en nuances de gris aujourd\'hui et dis-moi si ton temps d\'écran diminue ! »',
    difficulty: 'Facile',
    estimatedDuration: '40s'
  },
  {
    id: 'life-3',
    category: 'Lifestyle',
    title: 'Comment concilier travail, vie perso et création de contenu',
    concept: 'Partager le système de blocage de temps (time-blocking) pour créer sans sacrifier son sommeil ni ses relations.',
    hook: '« "Je n\'ai pas le temps de créer du contenu" : voici comment j\'ai trouvé 7 heures cachées dans ma semaine. »',
    structure: '0-4s: Démystification du manque de temps -> 4-18s: L\'audit honnête du temps d\'écran passif -> 18-36s: La règle des créneaux sacrés de 45 minutes -> 36-48s: Synthèse équilibre',
    cta: '« Quel créneau de ta journée pourrais-tu dédier à ton projet créatif ? Partage-le pour t\'engager. »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '46s'
  },

  // ACTUALITÉ
  {
    id: 'act-1',
    category: 'Actualité',
    title: 'Ce changement récent sur les algorithmes que personne ne voit',
    concept: 'Analyser une mise à jour d\'Instagram ou TikTok (ex: recherche SEO vidéo) et donner l\'ajustement pratique à faire immédiatement.',
    hook: '« Si tu publies encore tes vidéos comme en 2023, l\'algorithme ne te montrera plus. »',
    structure: '0-4s: Alerte tendance urgente -> 4-18s: Le changement technique expliqué simplement -> 18-36s: Ce qu\'il faut faire dès ta prochaine publication -> 36-48s: Résumé concret',
    cta: '« Enregistre ce post pour ajuster tes prochains sous-titres et ta description ! »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '45s'
  },
  {
    id: 'act-2',
    category: 'Actualité',
    title: 'Décryptage : Pourquoi cette pub a fait le tour du web',
    concept: 'Analyser une campagne de marque virale récente et en extraire la mécanique psychologique réutilisable pour un petit créateur.',
    hook: '« Cette marque a généré des millions de vues avec un budget quasi nul. Voici leur secret. »',
    structure: '0-4s: Extrait court du phénomène -> 4-18s: Les 2 leviers d\'émotion utilisés -> 18-35s: Comment tu peux adapter cette idée à ton échelle -> 35-48s: Question ouverte',
    cta: '« Avais-tu vu passer cette vidéo ? Qu\'en avais-tu pensé au premier abord ? »',
    difficulty: 'Avancé',
    estimatedDuration: '50s'
  },
  {
    id: 'act-3',
    category: 'Actualité',
    title: 'La nouvelle tendance de contenu qui explose ce mois-ci',
    concept: 'Présenter un nouveau format émergent (ex: podcasts silencieux, vlogs parlés intimes, carrousels documentaires) et pourquoi il performe.',
    hook: '« Tu as sans doute vu ce nouveau style de vidéo partout cette semaine. Voici pourquoi ça cartonne. »',
    structure: '0-3s: Démonstration visuelle du format -> 3-16s: Pourquoi le public en avait marre de l\'ancien style -> 16-34s: La structure pas à pas pour le reproduire -> 34-45s: Encouragement',
    cta: '« Prêt à tester ce format sur ta prochaine vidéo ? Abonne-toi pour plus de décryptages tendances. »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '44s'
  },

  // SPORT
  {
    id: 'spo-1',
    category: 'Sport',
    title: 'L\'erreur la plus commune qui détruit tes progrès à la salle',
    concept: 'Corriger un défaut de posture ou de programmation (surentraînement, manque de sommeil, surcharge progressive oubliée).',
    hook: '« Tu peux t\'entraîner 6 jours sur 7, si tu fais cette erreur, tes muscles ne progresseront jamais. »',
    structure: '0-4s: Avertissement sur l\'effort gaspillé -> 4-18s: Démonstration visuelle de l\'erreur -> 18-36s: La correction immédiate en 2 étapes -> 36-48s: Rappel de persévérance',
    cta: '« Partage cette vidéo à ton pote de salle qui fait encore cette erreur sur ses séries ! »',
    difficulty: 'Facile',
    estimatedDuration: '45s'
  },
  {
    id: 'spo-2',
    category: 'Sport',
    title: 'Comment reprendre le sport quand on a tout arrêté depuis 1 an',
    concept: 'Donner un protocole progressif pour éviter les courbatures paralysantes et la démotivation de la première semaine.',
    hook: '« La pire chose à faire quand tu reprends le sport, c\'est de vouloir rattraper le temps perdu en 1 séance. »',
    structure: '0-4s: Mise en garde psychologique -> 4-18s: Le principe de la première semaine à 50% d\'intensité -> 18-35s: Pourquoi la constance bat l\'intensité brute -> 35-48s: Message motivant',
    cta: '« Enregistre ce programme de reprise et commence par 15 minutes demain matin. »',
    difficulty: 'Facile',
    estimatedDuration: '45s'
  },
  {
    id: 'spo-3',
    category: 'Sport',
    title: '3 étirements essentiels pour ceux qui restent assis toute la journée',
    concept: 'Présenter 3 mouvements rapides pour débloquer les hanches et soulager le bas du dos après des heures de travail.',
    hook: '« Si tu as mal au bas du dos à force d\'être assis, fais ces 3 mouvements avant de dormir. »',
    structure: '0-3s: Identification de la douleur -> 3-15s: Mouvement 1 (Hanches) -> 15-28s: Mouvement 2 (Psoas) -> 28-40s: Mouvement 3 (Colonne) -> 40-48s: Soulagement',
    cta: '« Sauvegarde pour ce soir et dis-moi demain matin si ton dos te remercie ! »',
    difficulty: 'Facile',
    estimatedDuration: '40s'
  },

  // TECHNOLOGIE
  {
    id: 'tech-1',
    category: 'Technologie',
    title: '3 outils gratuits qui remplacent des logiciels à 50€/mois',
    concept: 'Faire découvrir des alternatives open-source ou gratuites pour le montage, le sous-titrage automatique et la retouche miniature.',
    hook: '« Arrête de payer des abonnements mensuels ruineux pour tes vidéos quand ces 3 outils existent gratuitement. »',
    structure: '0-4s: Économie financière immédiate -> 4-16s: Outil 1 (Sous-titres & transcription) -> 16-28s: Outil 2 (B-roll & sons libres) -> 28-40s: Outil 3 (Détourage et miniatures) -> 40-48s: Récap',
    cta: '« Commente "OUTILS" et je te donne le lien direct de chacun dans la description. »',
    difficulty: 'Facile',
    estimatedDuration: '45s'
  },
  {
    id: 'tech-2',
    category: 'Technologie',
    title: 'Comment utiliser l\'IA pour trouver des angles d\'idées originaux',
    concept: 'Montrer le prompt exact pour transformer un sujet générique en 5 angles captivants et percutants sans sonner robotique.',
    hook: '« Si tu demandes à une IA "donne-moi des idées de vidéos", tu auras les mêmes idées plates que tout le monde. Fais plutôt ceci. »',
    structure: '0-4s: La critique du prompt basique -> 4-18s: Le prompt structuré (Rôle + Contrainte + Contre-intuition) -> 18-36s: Exemple en direct de la réponse obtenue -> 36-48s: Conclusion',
    cta: '« Essaie ce prompt dans l\'onglet VQR AI du site et dis-moi le résultat que tu obtiens ! »',
    difficulty: 'Intermédiaire',
    estimatedDuration: '48s'
  },
  {
    id: 'tech-3',
    category: 'Technologie',
    title: 'Les réglages de caméra de smartphone que personne n\'active',
    concept: 'Expliquer le verrouillage d\'exposition, le mode 4K 24fps ou 30fps, et la désactivation de l\'adoucissement artificiel pour une image professionnelle.',
    hook: '« Ton iPhone ou ton Samsung filme comme une caméra cinéma, mais tu as laissé ces 2 réglages par défaut. »',
    structure: '0-4s: Démonstration visuelle avant/après -> 4-18s: Réglage 1 : Exposition manuelle verrouillée -> 18-32s: Réglage 2 : Fréquence d\'images et quadrillage -> 32-46s: Astuce nettoyage de lentille',
    cta: '« Prends 30 secondes pour changer ces paramètres maintenant et observe la différence sur ton prochain plan. »',
    difficulty: 'Facile',
    estimatedDuration: '42s'
  }
];
