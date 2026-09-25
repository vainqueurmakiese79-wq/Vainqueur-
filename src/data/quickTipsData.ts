import { QuickTip } from '../types/creator';

export const quickTipsData: QuickTip[] = [
  // AMÉLIORER UN HOOK
  {
    id: 'tip-hook-1',
    category: 'hook',
    categoryLabel: 'Améliorer un Hook',
    title: 'Supprimer l\'introduction polie',
    formula: 'Supprimer « Bonjour, aujourd\'hui nous allons voir... » et démarrer direct au cœur de l\'action.',
    beforeExample: '« Salut tout le monde, j\'espère que vous allez bien, aujourd\'hui je voulais vous parler de mes astuces pour mieux dormir... »',
    afterExample: '« Si tu te réveilles encore fatigué après 8 heures de sommeil, fais cette vérification ce soir. »',
    whyItWorks: 'Le cerveau moderne sur les flux verticaux décide de zapper en moins de 1,2 seconde. Tout préambule poli est ressenti comme une perte de temps.'
  },
  {
    id: 'tip-hook-2',
    category: 'hook',
    categoryLabel: 'Améliorer un Hook',
    title: 'L\'accroche par la contradiction (Pattern Interrupt)',
    formula: '« Tout le monde fait [X] pour obtenir [Y]... mais c\'est exactement pourquoi ça échoue. »',
    beforeExample: '« Comment faire des pompes correctement pour avoir des pectoraux. »',
    afterExample: '« Faire 100 pompes par jour détruit tes épaules. Voici l\'unique angle à adopter. »',
    whyItWorks: 'La contradiction force l\'esprit critique à s\'arrêter pour résoudre la dissonance cognitive.'
  },

  // AMÉLIORER UN TITRE
  {
    id: 'tip-title-1',
    category: 'title',
    categoryLabel: 'Améliorer un Titre',
    title: 'La spécificité numérique et temporelle',
    formula: 'Remplacer les adjectifs vagues (« rapide », « beaucoup ») par des données chiffrées précises.',
    beforeExample: '« Comment gagner du temps sur son montage vidéo »',
    afterExample: '« Comment j\'ai divisé mon temps de montage par 3 en 2 réglages »',
    whyItWorks: 'Les chiffres précis rendent la promesse tangible et hautement crédible.'
  },
  {
    id: 'tip-title-2',
    category: 'title',
    categoryLabel: 'Améliorer un Titre',
    title: 'Le titre orienté anti-douleur',
    formula: 'Nommer la frustration exacte que le spectateur redoute d\'affronter aujourd\'hui.',
    beforeExample: '« Conseils pour débuter la course à pied »',
    afterExample: '« Comment courir sans être essoufflé au bout de 2 minutes »',
    whyItWorks: 'L\'être humain réagit deux fois plus fort au soulagement d\'une douleur immédiate qu\'à la perspective d\'un bénéfice futur abstrait.'
  },

  // CRÉER UNE MINIATURE
  {
    id: 'tip-thumb-1',
    category: 'thumbnail',
    categoryLabel: 'Créer une Miniature',
    title: 'La règle des 3 éléments visuels maximum',
    formula: '1 visage expressif + 1 objet ou point focal + 3 mots de texte percutants au maximum.',
    beforeExample: 'Miniature surchargée avec 14 mots, 5 logos différents et un fond bariolé illisible sur petit écran de smartphone.',
    afterExample: 'Gros plan sur un regard surpris, fond flouté sombre, et 2 mots en jaune/blanc : « LE PIÈGE ! »',
    whyItWorks: 'Sur un écran de smartphone, la miniature mesure souvent moins de 4 centimètres. La simplicité visuelle gagne toujours le clic.'
  },
  {
    id: 'tip-thumb-2',
    category: 'thumbnail',
    categoryLabel: 'Créer une Miniature',
    title: 'Ne pas répéter le titre dans la miniature',
    formula: 'La miniature et le titre doivent se compléter comme une énigme et son indice, pas se dupliquer mot à mot.',
    beforeExample: 'Titre : « Comment faire une bonne vidéo », Miniature : « COMMENT FAIRE UNE BONNE VIDÉO »',
    afterExample: 'Titre : « L\'erreur que font 99% des créateurs », Miniature : « N\'APPUIE PAS ! » avec une caméra barrée.',
    whyItWorks: 'L\'effet de curiosité démultipliée incite le regard à rebondir du visuel vers le texte et déclenche le clic.'
  },

  // AUGMENTER L'INTERACTION
  {
    id: 'tip-inter-1',
    category: 'interaction',
    categoryLabel: 'Augmenter l\'Interaction',
    title: 'Poser une question binaire ou ultra-simple',
    formula: 'Au lieu de demander un avis complexe, proposer un choix A ou B facile à taper en 2 secondes.',
    beforeExample: '« Dites-moi en commentaire votre avis philosophique sur l\'intelligence artificielle générative. »',
    afterExample: '« Tu préfères filmer au smartphone ou à la caméra ? Dis-moi en com (Team 📱 ou Team 📷) ! »',
    whyItWorks: 'Plus la barrière à l\'entrée pour répondre est basse, plus le nombre de commentaires explose dès la première heure.'
  },
  {
    id: 'tip-inter-2',
    category: 'interaction',
    categoryLabel: 'Augmenter l\'Interaction',
    title: 'Laisser une micro-imperfection délibérée',
    formula: 'Une petite maladresse amusante ou un détail insolite en arrière-plan génère des réactions spontanées.',
    beforeExample: 'Tout est aseptisé, parfait et rigide comme un spot de télévision corporate.',
    afterExample: 'Un tableau avec un mot drôle en arrière-plan ou une prononciation taquine qui incite les spectateurs à le signaler dans les commentaires.',
    whyItWorks: 'Les gens adorent repérer les petits détails cachés et le mentionner, ce qui stimule l\'algorithme de discussion.'
  },

  // UTILISER UNE BONNE STRUCTURE
  {
    id: 'tip-struct-1',
    category: 'structure',
    categoryLabel: 'Bonne Structure',
    title: 'La formule PAS (Problème - Agitation - Solution)',
    formula: '1. Identifier le problème -> 2. Montrer pourquoi c\'est grave si on ne fait rien -> 3. Donner l\'astuce concrète.',
    beforeExample: 'Donner la solution immédiatement sans que personne n\'ait compris pourquoi elle était nécessaire.',
    afterExample: '0-5s: « Tu n\'arrives pas à tenir ta régularité ? » -> 5-20s: « Dans 6 mois tu seras au même point avec les mêmes regrets » -> 20-45s: « Voici la règle des 15 minutes. »',
    whyItWorks: 'L\'agitation crée la tension dramatique indispensable pour que la solution prenne toute sa valeur.'
  },
  {
    id: 'tip-struct-2',
    category: 'structure',
    categoryLabel: 'Bonne Structure',
    title: 'La boucle de fin infinie (Seamless Loop)',
    formula: 'Faire en sorte que la dernière réplique devienne le sujet de la première phrase de la vidéo.',
    beforeExample: '« Bon ben voilà c\'était ma vidéo, à la prochaine, ciao ! » (Chute brutale du watch-time).',
    afterExample: 'Dernière phrase : « Et c\'est pour ça que la prochaine fois que tu doutes, rappelle-toi que... » -> Recommence direct au début : « ...ce projet est trop important pour abandonner. »',
    whyItWorks: 'Le spectateur regarde la vidéo 1,5 fois avant de réaliser qu\'elle a recommencé, ce qui double la rétention globale.'
  },

  // ÉVITER LES ERREURS FRÉQUENTES
  {
    id: 'tip-err-1',
    category: 'errors',
    categoryLabel: 'Erreurs Fréquentes',
    title: 'L\'erreur de la lumière dans le dos (contre-jour)',
    formula: 'Toujours placer la source de lumière (fenêtre ou softbox) DEVANT son visage, jamais derrière.',
    beforeExample: 'Se placer devant une fenêtre en plein soleil : visage noir et fond totalement cramé et blanc.',
    afterExample: 'Se tourner face à la fenêtre : visage éclairé naturellement, yeux lumineux et image nette même avec un smartphone d\'entrée de gamme.',
    whyItWorks: 'Un capteur de smartphone a besoin de lumière directe sur le sujet pour éviter le bruit numérique granuleux.'
  },
  {
    id: 'tip-err-2',
    category: 'errors',
    categoryLabel: 'Erreurs Fréquentes',
    title: 'Négliger la propreté de l\'objectif',
    formula: 'Prendre le réflexe systématique d\'essuyer la lentille de son téléphone avec un tissu microfibre avant chaque prise.',
    beforeExample: 'Filmer avec des traces de doigts graisseuses sur la lentille : halos de lumière baveux et image terne.',
    afterExample: 'Lentille nettoyée : piqué net, contrastes francs et image immédiatement professionnelle.',
    whyItWorks: 'C\'est l\'erreur #1 qui trahit un amateur sans dépenser un seul centime pour la résoudre.'
  },

  // CRÉER UNE SÉRIE DE CONTENUS
  {
    id: 'tip-series-1',
    category: 'series',
    categoryLabel: 'Créer une Série',
    title: 'Le format récurrent numéroté (« Jour X sur 30 »)',
    formula: 'Créer une saga temporelle ou un défi qui incite naturellement au clic sur le bouton « S\'abonner » pour suivre la suite.',
    beforeExample: 'Publier des vidéos sans lien apparent où chaque sujet démarre de zéro sans fil conducteur.',
    afterExample: '« Jour 4 sur 30 pour créer un business de zéro sans budget : aujourd\'hui on teste notre premier prototype. »',
    whyItWorks: 'L\'effet de feuilleton (cliffhanger) crée une habitude de rendez-vous psychologique avec ton audience.'
  },
  {
    id: 'tip-series-2',
    category: 'series',
    categoryLabel: 'Créer une Série',
    title: 'La série d\'analyse de cas réels',
    formula: 'Prendre un compte, une vidéo ou un projet public et en faire une autopsie bienveillante en 3 points.',
    beforeExample: 'Donner des leçons théoriques abstraites sorties d\'un manuel universitaire.',
    afterExample: '« J\'analyse 1 vidéo d\'un abonné par semaine : Épisode #7 avec le compte de Julien. »',
    whyItWorks: 'Les spectateurs s\'identifient instantanément aux cas concrets et se bousculent dans les commentaires pour être les prochains sélectionnés.'
  }
];
