import { VideoCreationGuide } from '../types/creator';

export const videoCreationData: VideoCreationGuide[] = [
  {
    id: 'accroche-premieres-secondes',
    title: 'Trouver une accroche irrésistible (0-3 secondes)',
    shortDesc: 'Arrêter le pouce qui scrolle avant qu\'il ne soit trop tard.',
    principle: 'Les 3 premières secondes déterminent 80% du succès d\'une vidéo courte. Si le spectateur n\'a pas compris en un clin d\'œil ce qu\'il va gagner ou la curiosité en jeu, il disparaît.',
    bestPractices: [
      'Commencer immédiatement par l\'action ou la phrase clé, sans dire « Salut » ni faire de préambule.',
      'Créer un contraste visuel ou auditif dès la première milliseconde (un mouvement physique vers la caméra, un objet montré, une question inattendue).',
      'Activer un déclencheur émotionnel fort : curiosité piquée, soulagement d\'une douleur, déconstruction d\'un mythe répandu.',
      'Afficher un texte d\'accroche en gros caractères au centre de l\'écran pour ceux qui regardent sans le son.'
    ],
    mistakesToAvoid: [
      'Dire « Salut à tous, aujourd\'hui on se retrouve pour une nouvelle vidéo » (la mort instantanée du watch time).',
      'Attendre 5 secondes avant de prononcer le premier mot clé.',
      'Promettre quelque chose d\'exagéré que le reste de la vidéo n\'aborde jamais (clickbait décevant).'
    ],
    actionFormula: '« [Action contre-intuitive ou question percutante] + [Pourquoi tu dois le savoir maintenant]. »'
  },
  {
    id: 'raconter-une-histoire',
    title: 'L\'art du Storytelling condensé',
    shortDesc: 'Transformer une simple astuce technique en aventure humaine captivante.',
    principle: 'Les gens oublient les statistiques et les listes à puces, mais ils se souviennent des épreuves, des erreurs et des transformations. Même en 45 secondes, une vidéo peut avoir un arc narratif complet.',
    bestPractices: [
      'La structure classique en 3 actes : Situation initiale & Déclencheur -> L\'obstacle douloureux -> La révélation & Victoire.',
      'Être ultra-spécifique dans les détails : mentionne une heure précise, un mot exact prononcé ou un objet plutôt que des généralités floues.',
      'Partager tes échecs et tes hésitations réelles : la vulnérabilité crée une connexion et une confiance immédiate.',
      'Relier la leçon de ton histoire personnelle à la vie concrète du spectateur.'
    ],
    mistakesToAvoid: [
      'Raconter des péripéties inutiles qui ralentissent l\'histoire sans faire progresser la tension.',
      'Se poser en héros parfait qui a toujours tout compris dès le premier jour.',
      'Oublier de formuler la morale ou l\'enseignement actionnable à la fin.'
    ],
    actionFormula: '« J\'étais dans cette situation précise... j\'ai fait cette erreur fatale... voici le déclic qui a tout changé pour moi (et pour toi). »'
  },
  {
    id: 'maintenir-attention',
    title: 'Maintenir l\'attention continue (Rythme & Interruptions)',
    shortDesc: 'Garder le spectateur scotché du début à la fin sans temps mort.',
    principle: 'Le cerveau humain s\'habitue à un stimulus en moins de 4 secondes. Pour maintenir un niveau d\'éveil élevé, il faut varier la cadence visuelle et sonore par des interruptions de schéma (pattern interrupts).',
    bestPractices: [
      'Changer de valeur de plan (zoom léger avant/arrière, plan serré) toutes les 3 à 5 secondes.',
      'Utiliser des effets sonores discrets (« whoosh », « pop », « clic ») pour souligner l\'apparition d\'un mot ou d\'un élément clé.',
      'Insérer une question rhétorique au milieu de la vidéo pour relancer la curiosité (« Mais attends, ce n\'est pas le pire... »).',
      'Varier l\'intonation de ta voix : accélérer sur l\'énumération, ralentir sur la phrase clé.'
    ],
    mistakesToAvoid: [
      'Rester sur un plan fixe immobile pendant 30 secondes sans aucune coupure de silence.',
      'Abuser d\'effets sonores assourdissants qui agressent les oreilles de ceux qui écoutent au casque.',
      'Parler sur un ton monocorde sans nuances d\'enthousiasme.'
    ],
    actionFormula: 'Rythme idéal : 1 micro-changement visuel ou sonore toutes les 3 à 4 secondes.'
  },
  {
    id: 'utilisation-sous-titres',
    title: 'Maîtriser les sous-titres dynamiques',
    shortDesc: 'Plus de 70% des utilisateurs regardent les vidéos sans le son dans les transports ou au travail.',
    principle: 'Les sous-titres ne sont pas seulement une transcription : ce sont un guide visuel de lecture qui ancre les concepts et retient les yeux du spectateur sur l\'écran.',
    bestPractices: [
      'Afficher 1 à 3 mots à la fois plutôt que des paragraphes entiers qui cachent le visage.',
      'Mettre en surbrillance (couleur vive ou graisse plus épaisse) le mot le plus important de chaque phrase.',
      'Placer les sous-titres dans la zone centrale sécurisée (safe zone), ni trop bas où ils sont masqués par les boutons de l\'application, ni trop haut.',
      'Choisir une typographie sans-serif ultra-lisible avec un léger contour noir ou ombre portée pour garantir le contraste sur tout fond.'
    ],
    mistakesToAvoid: [
      'Laisser des fautes d\'orthographe grossières générées par la transcription automatique sans relecture.',
      'Utiliser des couleurs néon illisibles ou des animations qui clignotent frénétiquement au détriment du message.',
      'Masquer les yeux de la personne qui parle avec le bloc de texte.'
    ],
    actionFormula: 'Règle d\'or : Typographie grasse, safe zone centrale, 2-3 mots synchronisés au mot près.'
  },
  {
    id: 'choisir-images-videos',
    title: 'Choisir des images et B-rolls pertinents',
    shortDesc: 'Illustrer ses propos sans tomber dans les banques d\'images clichées.',
    principle: 'Un B-roll (plan d\'illustration) doit compléter ou contraster avec ce que tu dis, pas simplement répéter bêtement chaque mot comme une illustration littérale.',
    bestPractices: [
      'Filmer ses propres B-rolls authentiques avec son smartphone (tes mains sur le clavier, ta tasse de café, tes carnets, ton écran d\'ordinateur).',
      'Quand tu utilises des banques vidéo gratuites, choisis des plans qui ont l\'air naturels et tournés sur le vif, pas des acteurs de bureau en costumes parfaits qui sourient faussement.',
      'Synchroniser l\'apparition du plan d\'illustration avec un mot accentué dans ta voix.',
      'Ne laisser un plan d\'illustration que 1,5 à 2,5 secondes avant de revenir sur ton visage pour préserver le lien humain.'
    ],
    mistakesToAvoid: [
      'Utiliser des clips vidéo basse résolution ou pixélisés.',
      'Montrer des plans sans rapport évident avec le sujet qui déstabilisent l\'attention.',
      'Remplacer entièrement sa présence humaine par 100% de stock footage générique.'
    ],
    actionFormula: 'Ratio recommandé : 70% face caméra (connexion humaine) + 30% B-rolls d\'illustration dynamique.'
  },
  {
    id: 'ameliorer-le-montage',
    title: 'Techniques de montage fluides et dynamiques',
    shortDesc: 'Couper l\'inutile pour faire briller l\'essentiel avec élégance.',
    principle: 'Le montage n\'a pas pour but de faire une démonstration d\'effets spéciaux, mais d\'éliminer chaque fraction de seconde d\'hésitation pour offrir une expérience fluide et agréable.',
    bestPractices: [
      'Le Jump-Cut propre : supprimer systématiquement chaque respiration, chaque « euh » et chaque silence de plus de 0,2 seconde.',
      'Utiliser la technique du « J-Cut » et « L-Cut » : faire commencer le son de la phrase suivante une fraction de seconde avant la coupe d\'image pour une transition ultra-naturelle.',
      'Normaliser le volume audio : la voix doit être claire, présente et à niveau constant (-3dB à -1dB).',
      'Régler la musique d\'ambiance à un niveau bas (-18dB à -22dB sous la voix) pour qu\'elle porte l\'émotion sans jamais rivaliser avec la parole.'
    ],
    mistakesToAvoid: [
      'Mettre une musique de fond trop forte qui noie la voix et force le spectateur à tendre l\'oreille.',
      'Laisser des transitions 3D tape-à-l\'œil démodées (fondus en spirale, volets géants).',
      'Couper tellement vite que les syllabes de fin de phrase sont tronquées et inintelligibles.'
    ],
    actionFormula: 'Processus : Nettoyage silences -> Normalisation voix -> Ajout B-rolls -> Sous-titres -> Musique calibrée.'
  },
  {
    id: 'appel-a-action-cta',
    title: 'Terminer avec un Appel à l\'Action (CTA) efficace',
    shortDesc: 'Donner envie d\'interagir sans avoir l\'air d\'un démarcheur agressif.',
    principle: 'Un bon appel à l\'action ne quémande pas un like de manière désespérée : il prolonge naturellement la conversation ou offre une valeur immédiate supplémentaire.',
    bestPractices: [
      'Ne proposer qu\'une SEULE action par vidéo : soit enregistrer, soit commenter, soit s\'abonner. Trop de choix tue l\'action.',
      'Donner une raison bénéfique pour le spectateur d\'effectuer l\'action (ex : « Enregistre pour t\'en rappeler demain lors de ton tournage » plutôt que « Enregistre ma vidéo svp »).',
      'Pour les commentaires, poser une question précise et fermée facile à répondre plutôt qu\'une dissertation philosophique complexe.',
      'Tester la technique de la boucle (loop) : faire en sorte que la dernière phrase de la vidéo s\'enchaîne naturellement avec le premier mot de l\'accroche.'
    ],
    mistakesToAvoid: [
      'Demander « Laissez un like, partagez, commentez, activez la cloche et cliquez sur le lien en bio » en 5 secondes.',
      'Prendre 15 secondes pour dire au revoir (le spectateur a déjà swipé depuis longtemps).',
      'Utiliser des formules passives sans énergie.'
    ],
    actionFormula: '« [Bénéfice direct] + [Action simple en 1 clic]. Exemple : Enregistre ce post pour ton prochain tournage et dis-moi en com quelle est ta plus grosse difficulté. »'
  }
];
