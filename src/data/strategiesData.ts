import { StrategyModule } from '../types/creator';

export const strategiesData: StrategyModule[] = [
  {
    id: 'strategie-globale',
    title: 'Développer une stratégie de contenu pérenne',
    subtitle: 'Passer de l\'improvisation aléatoire à un système reproductible',
    readTime: '6 min',
    iconName: 'Compass',
    summary: 'Une stratégie n\'est pas un tableau complexe de 50 pages : c\'est l\'art de savoir précisément à qui tu parles, quel problème tu résous, et comment chaque vidéo te rapproche de ton objectif sans t\'épuiser.',
    keyTakeaway: 'Le contenu sans intention fatigue le créateur et désoriente l\'audience. Définis un objectif unique par trimestre.',
    steps: [
      {
        number: '01',
        title: 'Définir la promesse centrale de ton compte',
        description: 'En une seule phrase, que gagne une personne qui s\'abonne à ton compte ? Si tu réponds « je parle d\'un peu de tout », personne ne s\'attachera. Sois la réponse évidente à un besoin précis.',
        tip: 'Complète la formule : « J\'aide [Audience] à [Résultat désiré] sans [Frustration majeure]. »'
      },
      {
        number: '02',
        title: 'Établir tes 3 à 4 piliers de contenu',
        description: 'Ne crée pas au hasard chaque matin. Structure ton univers en 3 ou 4 thèmes récurrents (ex : 1. Astuces directes, 2. Études de cas/Storytelling, 3. Déconstruction de mythes, 4. Coulisses & Expérimentations).',
        tip: 'Fais tourner ces piliers sur chaque semaine pour maintenir la variété sans perdre la cohérence.'
      },
      {
        number: '03',
        title: 'Découpler la recherche d\'idées de la phase de tournage',
        description: 'La cause #1 du burn-out chez les créateurs est de devoir trouver l\'idée, écrire le script, allumer la caméra et monter dans la même heure. Bloque des sessions distinctes pour chaque étape.',
        tip: 'Le lundi : 10 idées. Le mardi : écriture. Le mercredi : tournage par lot (batching).'
      }
    ],
    checklist: [
      'Ma promesse de compte tient en moins de 15 mots.',
      'J\'ai 3 piliers de contenu clairement identifiés.',
      'Mes tournages sont séparés de mes sessions d\'écriture.',
      'Mon objectif actuel est axé sur la maîtrise de l\'exécution, pas sur la vanité des chiffres.'
    ]
  },
  {
    id: 'choisir-sa-niche',
    title: 'Comment choisir et valider sa niche',
    subtitle: 'Trouver l\'intersection entre ta passion, ta compétence et un besoin réel',
    readTime: '5 min',
    iconName: 'Target',
    summary: 'Une niche trop large te noie dans la masse ; une niche trop étroite t\'enferme. Le secret réside dans le positionnement d\'angle plutôt que dans le simple sujet générique.',
    keyTakeaway: 'Tu n\'as pas besoin d\'être le plus grand expert mondial, seulement d\'avoir une longueur d\'avance et une méthode d\'explication claire.',
    steps: [
      {
        number: '01',
        title: 'Le diagramme des trois cercles VQR',
        description: 'Note ce que tu aimes apprendre pendant des heures sans effort, ce sur quoi tes amis te demandent conseil, et les sujets où les gens cherchent activement des solutions pratiques.',
        tip: 'Si un sujet t\'ennuie au bout de 2 semaines, ce n\'est pas une bonne niche pour toi.'
      },
      {
        number: '02',
        title: 'Affiner par l\'angle plutôt que par le métier',
        description: 'Au lieu de « faire du fitness », fais « le fitness pour les personnes qui travaillent 10h par jour assis devant un écran ». Au lieu de « cuisine », fais « repas sains en moins de 12 minutes sans vaisselle ».',
        tip: 'L\'angle crée la différenciation immédiate dès les 3 premières secondes d\'une vidéo.'
      },
      {
        number: '03',
        title: 'Tester sur 20 vidéos avant de pivoter',
        description: 'Beaucoup abandonnent après 3 vidéos en disant « ma niche ne marche pas ». C\'est statistiquement insuffisant. Donne-toi un engagement minimum de 20 contenus avant d\'ajuster.',
        tip: 'Mesure la curiosité des commentaires plutôt que le seul compteur de vues.'
      }
    ],
    checklist: [
      'Je peux citer au moins 30 sujets de vidéos dans cette niche sans hésiter.',
      'Mon angle répond à un profil de personne bien défini.',
      'Je m\'engage sur 20 vidéos avant de juger de la pertinence de la thématique.'
    ]
  },
  {
    id: 'connaitre-son-audience',
    title: 'Comprendre intimement son audience',
    subtitle: 'Créer pour une personne réelle plutôt que pour un algorithme abstrait',
    readTime: '5 min',
    iconName: 'Users',
    summary: 'Les algorithmes ne regardent pas tes vidéos, ce sont des êtres humains avec des journées fatigantes, des doutes et des aspirations qui le font. Quand tu parles à tout le monde, tu ne touches personne.',
    keyTakeaway: 'Chaque vidéo doit donner au spectateur l\'impression que tu lis dans ses pensées.',
    steps: [
      {
        number: '01',
        title: 'Identifier les 5 douleurs et les 5 désirs secrets',
        description: 'Qu\'est-ce qui empêche ton spectateur idéal de dormir ? Quelle petite victoire espère-t-il atteindre cette semaine ? Utilise son propre vocabulaire, pas du jargon théorique.',
        tip: 'Va lire les commentaires sous les vidéos des plus gros créateurs de ton domaine pour repérer les questions sans réponse.'
      },
      {
        number: '02',
        title: 'Parler au singulier : le pouvoir du « Tu »',
        description: 'Bannis les « Salut à tous », « Bienvenue sur ma chaîne les gars ». Une personne regarde son smartphone seule dans son lit ou dans les transports. Parle à un individu unique.',
        tip: 'Remplace « Beaucoup de gens pensent... » par « Tu penses probablement que... ».'
      },
      {
        number: '03',
        title: 'Transformer les commentaires en futurs contenus',
        description: 'Chaque objection, doute ou question formulée par un abonné est le sujet de ta prochaine vidéo la plus engageante.',
        tip: 'Fais des captures d\'écran de tes commentaires stimulants pour alimenter ton carnet d\'idées.'
      }
    ],
    checklist: [
      'Mes vidéos s\'adressent à un « Tu » singulier et intime.',
      'J\'utilise les mots exacts que mon audience utilise dans ses commentaires.',
      'Je réponds aux vraies frustrations plutôt qu\'à des concepts abstraits.'
    ]
  },
  {
    id: 'construire-une-identite',
    title: 'Bâtir une identité et un univers singulier',
    subtitle: 'Ce qui fait qu\'on te reconnaît en 1 seconde avant même d\'avoir lu ton nom',
    readTime: '6 min',
    iconName: 'Sparkles',
    summary: 'Ton identité visuelle et narrative est ce qui transforme un simple passant de flux en abonné fidèle. Elle repose sur la cohérence : un ton, un cadrage, un rythme et des gimmicks mémorables.',
    keyTakeaway: 'Le style ne s\'invente pas dans le vide, il émerge de la répétition disciplinée.',
    steps: [
      {
        number: '01',
        title: 'Le cadre signature (Visuel & Sonore)',
        description: 'Choisis un angle de caméra fixe ou une colorimétrie simple, un type d\'éclairage et une police de sous-titres que tu garderas sur 50 vidéos d\'affilée sans changer tous les 3 jours.',
        tip: 'La familiarité visuelle rassure le spectateur et réduit le temps de décision de scroll.'
      },
      {
        number: '02',
        title: 'Le ton et le débit de parole',
        description: 'Ne joue pas un rôle théâtral qui t\'épuise au bout de 10 vidéos. Trouve une version amplifiée de ta voix naturelle : calme et analytique, ou énergique et directe.',
        tip: 'Parle avec l\'énergie que tu aurais en expliquant une astuce passionnante à un ami proche.'
      },
      {
        number: '03',
        title: 'Les expressions et concepts propriétaires',
        description: 'Donne un nom à tes concepts ou à tes méthodes. C\'est ce qui crée une culture de communauté (comme la règle VQR : Crée, Persévère, Progresse).',
        tip: 'Un concept nommé est un concept que ton audience peut repartager et citer.'
      }
    ],
    checklist: [
      'Mes sous-titres ont une typographie et une palette fixes.',
      'Mon cadrage est stable et identifiable.',
      'J\'ai au moins une phrase ou un gimmick d\'intro/outro reconnaissable.'
    ]
  },
  {
    id: 'calendrier-publication',
    title: 'Créer un calendrier de publication réaliste',
    subtitle: 'La régularité que tu peux tenir 12 mois vaut mieux que le sprint qui te brûle en 2 semaines',
    readTime: '4 min',
    iconName: 'Calendar',
    summary: 'Le plus grand piège est de vouloir publier 3 vidéos par jour la première semaine pour finalement disparaître pendant 2 mois. Choisis un rythme soutenable sur la durée.',
    keyTakeaway: 'Un calendrier n\'est pas une prison, c\'est un protecteur de ton énergie mentale.',
    steps: [
      {
        number: '01',
        title: 'Déterminer ton rythme minimum garanti',
        description: 'Mieux vaut 3 excellentes vidéos par semaine publiées avec une ponctualité d\'horloge suisse que 7 vidéos bâclées au milieu du stress.',
        tip: 'Fixe tes jours de publication immuables (ex : Lundi, Mercredi, Vendredi à 18h).'
      },
      {
        number: '02',
        title: 'Garder 3 vidéos en réserve (« Le Buffer VQR »)',
        description: 'Ne publie jamais la vidéo que tu viens de terminer il y a 10 minutes. Aie toujours 3 à 5 contenus montés et prêts en avance pour amortir les imprévus de la vie.',
        tip: 'Le jour où tu es malade ou sans inspiration, ton buffer sauve ta constance sans anxiété.'
      },
      {
        number: '03',
        title: 'Thématiser les jours de la semaine',
        description: 'Associe chaque jour de publication à un format précis (ex : Lundi = Erreur à éviter, Mercredi = Tutoriel actionnable, Vendredi = Storytelling motivation).',
        tip: 'Ton audience sait ce qu\'elle vient chercher selon le jour de la semaine.'
      }
    ],
    checklist: [
      'Mon calendrier est réaliste compte tenu de mon emploi du temps.',
      'J\'ai constitué un matelas de 3 vidéos prêtes d\'avance.',
      'Mes jours et heures de publication sont fixes.'
    ]
  },
  {
    id: 'analyser-ses-resultats',
    title: 'Analyser ses résultats avec lucidité',
    subtitle: 'Lire les métriques comme un scientifique, sans blesser son ego',
    readTime: '5 min',
    iconName: 'BarChart3',
    summary: 'Les métriques de vanité (vues brutes, likes) cachent les véritables indicateurs de santé d\'un contenu : taux de rétention, pourcentage de vidéo vue et taux de partages/enregistrements.',
    keyTakeaway: 'Une vidéo n\'est jamais « nulle » : elle t\'enseigne précisément où l\'attention a chuté.',
    steps: [
      {
        number: '01',
        title: 'Isoler le point de décrochage sur la courbe de rétention',
        description: 'Ouvre la courbe d\'attention de ta vidéo. Si 50% des gens partent avant 3 secondes, ton hook a échoué. Si la chute est brutale à 12 secondes, ton explication était confuse ou trop lente.',
        tip: 'Rejoue exactement la seconde où la courbe s\'effondre pour comprendre le défaut (silence, hésitation, perte de rythme).'
      },
      {
        number: '02',
        title: 'Observer le ratio Enregistrements / Partages',
        description: 'Les likes sont bon marché. Les partages signifient que ta vidéo apporte une valeur sociale ; les enregistrements prouvent qu\'elle résout un problème durable.',
        tip: 'Un contenu avec beaucoup d\'enregistrements continuera d\'être recommandé plusieurs semaines après.'
      },
      {
        number: '03',
        title: 'Faire un debriefing hebdomadaire de 15 minutes',
        description: 'Chaque dimanche, note ta meilleure vidéo de la semaine et ta moins bonne. Identifie un seul élément concret à modifier pour la semaine suivante.',
        tip: 'La progression est un jeu d\'ajustement de 1% par semaine.'
      }
    ],
    checklist: [
      'Je consulte systématiquement la courbe de rétention avant de juger une vidéo.',
      'Je privilégie les partages et sauvegardes aux simples vues.',
      'Je documente chaque semaine ce qui a fonctionné et ce qui a flanché.'
    ]
  },
  {
    id: 'ameliorer-progressivement',
    title: 'La méthode d\'amélioration progressive (Kaizen créatif)',
    subtitle: 'Comment devenir méconnaissable en 100 vidéos en changeant un seul détail à la fois',
    readTime: '4 min',
    iconName: 'TrendingUp',
    summary: 'Essayer d\'améliorer la lumière, le son, le script, le montage, les animations et la gestuelle en même temps mène à la paralysie. Concentre-toi sur une seule variable par cycle de 5 vidéos.',
    keyTakeaway: 'La maîtrise n\'est pas un coup d\'éclat, c\'est l\'accumulation invisible de micro-ajustements.',
    steps: [
      {
        number: '01',
        title: 'Le cycle des 5 vidéos par variable',
        description: 'Vidéos 1 à 5 : focus exclusif sur la clarté du hook audio. Vidéos 6 à 10 : focus sur la suppression des silences au montage. Vidéos 11 à 15 : travail de l\'éclairage et du regard caméra.',
        tip: 'Quand une variable devient un réflexe automatique, passe à la suivante.'
      },
      {
        number: '02',
        title: 'Comparer sa vidéo #30 à sa vidéo #1',
        description: 'Ne te compare jamais à un créateur qui publie depuis 5 ans avec une équipe de 4 monteurs. Compare ta vidéo d\'aujourd\'hui à celle d\'il y a 2 mois.',
        tip: 'Garde tes premières vidéos archivées pour mesurer visuellement le chemin parcouru.'
      },
      {
        number: '03',
        title: 'Demander un retour honnête à 1 créateur bienveillant',
        description: 'Évite les avis complaisants de la famille qui dit « c\'est génial » sans regarder. Échange avec un créateur de ton niveau qui saura pointer le rythme et le son.',
        tip: 'Pose la question précise : « À quel moment précis as-tu eu envie de passer à la vidéo suivante ? »'
      }
    ],
    checklist: [
      'Je travaille une seule compétence technique à la fois.',
      'Je mesure mes progrès par rapport à mes propres débuts.',
      'J\'accepte que mes premières créations soient imparfaites pour pouvoir progresser.'
    ]
  }
];
