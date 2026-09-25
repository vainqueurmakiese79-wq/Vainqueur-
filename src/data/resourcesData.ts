import { ResourceItem } from '../types/creator';

export const resourcesData: ResourceItem[] = [
  // GUIDES
  {
    id: 'res-guide-1',
    category: 'guide',
    categoryLabel: 'Guide Essentiel',
    title: 'Le Guide du Smartphone Studio (Tourner Pro avec 0€)',
    description: 'Comment transformer son téléphone en caméra professionnelle en exploitant la lumière naturelle, les réglages manuels et la stabilisation.',
    content: `1. Nettoyage de l'optique : toujours essuyer l'objectif avec un tissu doux.
2. Éclairage : se placer à 45° ou face à une grande fenêtre. Éviter le plafonnier direct qui crée des ombres sous les yeux.
3. Audio : parler à moins de 40 cm du micro du smartphone, ou utiliser un micro cravate économique.
4. Hauteur caméra : placer l'objectif exactement au niveau des yeux pour un contact naturel.
5. Exposition : appuyer longuement sur son visage sur l'écran pour verrouiller la mise au point et l'exposition (AE/AF Lock).`,
    templateSnippet: 'Paramètres recommandés : 1080p ou 4K à 30fps (ou 24fps cinéma). Grille des tiers activée. Exposition baissée d\'un cran pour éviter les zones blanches brûlées.',
    downloadLabel: 'Copier le mémo'
  },
  {
    id: 'res-guide-2',
    category: 'guide',
    categoryLabel: 'Guide Essentiel',
    title: 'Guide de Survie Mental après un Flop',
    description: 'Le protocole pas à pas pour ne pas laisser une vidéo à faibles vues saboter votre élan créatif.',
    content: `1. Règle des 24h : ne pas consulter les statistiques de manière compulsive dans les 2 heures après publication.
2. Dissocier son identité de la performance d'un contenu : vous n'êtes pas votre nombre de vues.
3. Diagnostic froid : vérifier le hook (a-t-il capté 60% des gens à 3s ?), le sujet (était-il trop générique ?).
4. Recycler : une idée brillante mal servie par son hook peut être re-tournée dans 1 mois avec une nouvelle accroche et exploser.`,
    templateSnippet: '« Une vidéo qui échoue ne signifie pas que ton projet a échoué. Analyse, améliore et recommence. »',
    downloadLabel: 'Copier le protocole'
  },

  // CHECKLISTS
  {
    id: 'res-check-1',
    category: 'checklist',
    categoryLabel: 'Checklist Pratique',
    title: 'Checklist Avant d\'Appuyer sur Enregistrer',
    description: 'Les 6 vérifications indispensables pour ne pas avoir à recommencer un tournage entier pour une bêtise technique.',
    content: `[ ] Lentille de la caméra nettoyée
[ ] Mode avion ou Ne pas déranger activé (pour éviter qu\'un appel coupe la prise)
[ ] Source de lumière orientée vers le visage (pas dans le dos)
[ ] Micro dégagé de tout frottement de vêtement
[ ] Première phrase (hook) répétée 2 fois à voix haute
[ ] Regard fixé sur l'objectif de la caméra (et non sur son propre reflet sur l'écran)`,
    templateSnippet: 'Astuce : colle un petit autocollant fluo juste à côté de l\'œilleton de caméra pour forcer tes yeux à regarder au bon endroit.',
    downloadLabel: 'Copier la checklist'
  },
  {
    id: 'res-check-2',
    category: 'checklist',
    categoryLabel: 'Checklist Pratique',
    title: 'Checklist Contrôle Qualité Avant Publication',
    description: 'La liste de contrôle finale sur votre timeline de montage.',
    content: `[ ] Les 3 premières secondes contiennent-elles un mouvement visuel ou un texte choc ?
[ ] Tous les silences de plus de 0,2s ont-ils été supprimés ?
[ ] Les sous-titres sont-ils lisibles et sans fautes de frappe ?
[ ] Les sous-titres sont-ils hors de la zone basse masquée par les boutons de l\'application ?
[ ] Le volume de la musique est-il bien à -20dB sous la voix parlée ?
[ ] L'appel à l'action propose-t-il une action unique et simple ?`,
    templateSnippet: 'Vérification en 1 clic : coupe le son sur ton téléphone et regarde la vidéo. Si tout est compréhensible et dynamique sans audio, tu as gagné.',
    downloadLabel: 'Copier la checklist'
  },

  // MODÈLES DE SCRIPTS
  {
    id: 'res-script-1',
    category: 'script',
    categoryLabel: 'Modèle de Script',
    title: 'Script « Mythe Déconstruit » (45 secondes)',
    description: 'Le format roi pour créer de la curiosité et démontrer son expertise avec autorité.',
    content: `[00:00 - 00:03] HOOK : « Si tu penses encore que [CROYANCE FAUSSE], regarde attentivement cette vidéo. »
[00:03 - 00:15] POURQUOI C'EST FAUX : « Pendant des années, on nous a répété de [ACTION CLASSIQUE]. Mais en réalité, voici ce qui se passe quand tu fais ça : [CONSÉQUENCE NÉGATIVE]. »
[00:15 - 00:35] LA VRAIE ALTERNATIVE : « Voici plutôt ce que font les meilleurs : [ACTION 1], puis [ACTION 2]. Ça prend 2 fois moins de temps et le résultat est sans comparaison. »
[00:35 - 00:45] CTA : « Enregistre cette astuce pour l'appliquer dès aujourd'hui et dis-moi en com si tu faisais aussi cette erreur. »`,
    templateSnippet: 'Structure idéale : Accroche (3s) -> Déconstruction (12s) -> Solution concrète (20s) -> CTA direct (10s).',
    downloadLabel: 'Copier le modèle'
  },
  {
    id: 'res-script-2',
    category: 'script',
    categoryLabel: 'Modèle de Script',
    title: 'Script « Problème - Agitation - Solution » (60 secondes)',
    description: 'Le canevas universel de persuasion adapté aux vidéos courtes sur les réseaux sociaux.',
    content: `[00:00 - 00:04] PROBLÈME : « Tu as l'impression de passer des heures à tourner sans jamais percer sur les réseaux ? »
[00:04 - 00:18] AGITATION : « Le pire, c'est que plus tu essaies de faire parfait, plus tu perds l'envie. Dans 3 mois, si tu continues comme ça, tu auras tout simplement abandonné ton projet. »
[00:18 - 00:45] SOLUTION VQR : « La solution n'est pas de faire des vidéos plus longues, mais d'appliquer la règle des 3 piliers : un hook ultra-direct, aucun mot superflu, et une régularité de 3 contenus par semaine. »
[00:45 - 00:60] CTA : « Abonne-toi à la chaîne pour recevoir le modèle complet de calendrier dès demain matin. »`,
    templateSnippet: 'L\'agitation doit faire ressentir l\'urgence de changer de comportement sans culpabiliser l\'audience.',
    downloadLabel: 'Copier le modèle'
  },

  // STRUCTURES DE VIDÉOS
  {
    id: 'res-struct-1',
    category: 'structure',
    categoryLabel: 'Structure Chronométrée',
    title: 'La Découpe Chrono 0-60s (La Formule VQR)',
    description: 'L\'anatomie d\'une vidéo verticale performante seconde par seconde.',
    content: `• 00:00 - 00:03 : L'ACCROCHE (Hook) - Déclaration choc, question intime, contradiction ou mouvement d'objet. Zéro intro polie.
• 00:03 - 00:12 : LE PACTE D'INTÉRÊT - Pourquoi le spectateur doit rester jusqu'à la fin (« À la fin de cette vidéo, tu sauras exactement... »).
• 00:12 - 00:38 : LE CŒUR DE VALEUR - 1 à 3 points concrets, précis, chiffrés. Chaque point illustré par un changement de plan visuel.
• 00:38 - 00:48 : LE TWIST OU LA NUANCE - La petite mise en garde pour éviter les mauvaises interprétations.
• 00:48 - 00:55 : L'APPEL À L'ACTION - Simple, unique, orienté bénéfice spectateur.
• 00:55 - 00:60 : BOUCLE OPTIONNELLE - Connexion transparente avec la première phrase.`,
    templateSnippet: 'Règle de rétention : Ne jamais laisser plus de 4 secondes sans changement visuel ou accent de voix.',
    downloadLabel: 'Copier la structure'
  },

  // CONSEILS DE CRÉATION
  {
    id: 'res-advice-1',
    category: 'advice',
    categoryLabel: 'Conseil de Création',
    title: 'Les 5 Règles d\'Or de VQR Creator',
    description: 'Les principes cardinaux à garder en tête tout au long de votre parcours.',
    content: `1. CRÉE : Ne reste pas bloqué dans la théorie. Une vidéo publiée imparfaite vaut 1 000 vidéos parfaites restées dans ta tête.
2. PERSÉVÈRE : Les algorithmes testent ta résilience. Les premiers mois sont une période d'apprentissage où tu apprends ton métier.
3. PROGRESSE : Améliore un détail à la fois. Si tu améliores ta vidéo de 1% chaque semaine, dans un an tu as changé de dimension.
4. SOIS UTILE : Chaque contenu doit laisser le spectateur un peu plus inspiré, plus instruit ou plus souriant qu'avant de cliquer.
5. RESPECTE TON AUDIENCE : Parle à des êtres humains réels avec empathie, honnêteté et sans fausses promesses de miracles instantanés.`,
    templateSnippet: 'VQR CREATOR : « Crée. Persévère. Progresse. »',
    downloadLabel: 'Copier le manifeste'
  }
];
