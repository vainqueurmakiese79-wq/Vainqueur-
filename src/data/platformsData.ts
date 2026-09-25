import { SocialPlatformData } from '../types/creator';

export const platformsData: SocialPlatformData[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    tagline: 'Le laboratoire de la viralité organique et de la spontanéité',
    bestFormats: 'Vidéos verticales 9:16 de 20s à 60s pour la découverte, et formats de 90s à 3 min pour les sujets plus denses. Éclairage naturel, voix brute ou micro cravate, montage direct sans fioritures.',
    recommendedFrequency: '1 vidéo par jour ou au minimum 4 à 5 vidéos par semaine pour nourrir les tests de l\'algorithme de distribution.',
    retentionRules: [
      'Les 2 premières secondes sont impitoyables : aucun générique, aucun temps de chauffe.',
      'Le taux de complétion (watch time complet) et les re-visionnages pèsent plus que les simples likes.',
      'Les sons tendances peuvent aider, mais la clarté de la valeur pédagogique reste reine.'
    ],
    communityRules: [
      'Répondre en vidéo aux commentaires les plus pertinents pour créer une boucle vertueuse de contenu.',
      'Participer aux conversations de son secteur sous les vidéos d\'autres créateurs avec des avis argumentés.',
      'Créer des concepts récurrents identifiables (ex: un gimmick ou un objet récurrent à chaque vidéo).'
    ],
    analyticsKeys: [
      'Taux de rétention à 3s (Objectif sain : > 60%)',
      'Taux de visionnage complet (Objectif sain : > 25% sur 45s)',
      'Pourcentage de trafic provenant du flux « Pour Toi » (FYP)'
    ],
    realisticTruth: 'TikTok ne garantit jamais de vues. Même un compte avec 100 000 abonnés peut faire 400 vues sur une vidéo qui ne capte pas l\'attention dès le début. Chaque contenu est jugé individuellement par un échantillon de spectateurs.'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    tagline: 'L\'écosystème de la marque personnelle et de la relation de confiance',
    bestFormats: 'Reels 9:16 (30s à 90s) pour toucher de nouvelles personnes (découverte) + Carrousels pédagogiques (5 à 8 slides) pour les sauvegardes + Stories quotidiennes pour créer une intimité avec les abonnés existants.',
    recommendedFrequency: '3 à 4 Reels par semaine, 1 ou 2 carrousels approfondis, et des stories quotidiennes (3 à 6 stories spontanées par jour).',
    retentionRules: [
      'Les sauvegardes (enregistrements) et les partages en messages privés (DM) sont les signaux les plus puissants pour l\'algorithme.',
      'L\'esthétique visuelle compte davantage que sur TikTok : privilégie un cadrage propre et des sous-titres nets.',
      'Rédige une description (légende) soignée qui apporte un complément de valeur et invite à la lecture.'
    ],
    communityRules: [
      'Utiliser les stickers interactifs en Stories (sondages, curseurs, boîtes à questions) pour faire participer son audience.',
      'Engager de vraies conversations bienveillantes en messages privés avec les personnes qui réagissent.',
      'Mettre en avant les réussites de sa communauté dans des stories à la une (highlights).'
    ],
    analyticsKeys: [
      'Nombre de partages en DM et d\'enregistrements dans les favoris',
      'Comptes touchés non-abonnés (Reach)',
      'Taux de réponse aux stories'
    ],
    realisticTruth: 'Sur Instagram, la croissance organique est plus lente que sur TikTok, mais les abonnés acquis sont souvent beaucoup plus engagés et fidèles sur le long terme.'
  },
  {
    id: 'youtube',
    name: 'YouTube & Shorts',
    tagline: 'Le moteur de recherche pérenne où ton contenu vit pendant des années',
    bestFormats: 'Format double : Shorts (9:16, moins de 60s) pour l\'acquisition rapide de nouveaux spectateurs + Vidéos longues horizontales (16:9, 8 à 15 min) pour installer une autorité inébranlable.',
    recommendedFrequency: 'Shorts : 3 à 5 par semaine. Vidéos longues : 1 vidéo par semaine ou tous les 15 jours avec un niveau d\'exigence élevé sur le script et la miniature.',
    retentionRules: [
      'Le titre et la miniature sont les deux facteurs décisifs du taux de clic (CTR). Sans bon clic, personne ne voit le contenu.',
      'Dans les Shorts, viser un pourcentage moyen de visionnage supérieur à 85% pour déclencher des recommandations d\'envergure.',
      'Dans les formats longs, structurer avec des chapitres clairs et une accroche solide dès la première minute.'
    ],
    communityRules: [
      'Épingler un commentaire stimulant sous chaque vidéo pour lancer la discussion.',
      'Utiliser l\'onglet Communauté pour poster des sondages entre deux vidéos et recueillir les souhaits de sujets.',
      'Remercier nominativement les commentateurs fidèles dans les futures vidéos.'
    ],
    analyticsKeys: [
      'Taux de clic par impression (CTR, objectif sain : 4% à 9%)',
      'Durée moyenne de visionnage (Average View Duration)',
      'Sources de trafic : Recherche YouTube vs Vidéos suggérées'
    ],
    realisticTruth: 'Contrairement aux plateformes éphémères où une vidéo s\'éteint après 48h, une vidéo YouTube bien positionnée sur un mot-clé recherché peut continuer à générer des vues et des abonnés 3 ans après sa sortie.'
  },
  {
    id: 'facebook',
    name: 'Facebook & Reels',
    tagline: 'La puissance des communautés matures, des groupes et du partage viral',
    bestFormats: 'Facebook Reels verticaux (30s à 90s) et publications de formats narratifs avec image ou vidéo carrée/horizontale. L\'audience valorise les histoires humaines inspirantes, la nostalgie et les débats constructifs.',
    recommendedFrequency: '3 à 5 Reels par semaine combinés à des posts textuels ou photos dans des groupes thématiques ciblés.',
    retentionRules: [
      'Les spectateurs sur Facebook sont en moyenne plus âgés et apprécient un rythme de parole légèrement plus posé qu\'un montage ultra-frénétique.',
      'Les sous-titres sont indispensables car une grande partie de l\'audience consomme le flux sans casque au travail ou à la maison.',
      'Les sujets d\'actualité, de bon sens, d\'expériences de vie et de transmission familiale fonctionnent particulièrement bien.'
    ],
    communityRules: [
      'Créer ou animer un groupe Facebook privé lié à ta niche où les membres peuvent s\'entraider.',
      'Poser des questions ouvertes qui incitent les gens à partager leurs souvenirs ou leurs avis personnels.',
      'Partager des conseils bienveillants sans condescendance ni jargon complexe.'
    ],
    analyticsKeys: [
      'Nombre de partages publics sur les profils des utilisateurs',
      'Temps de visionnage moyen (Minutes vues)',
      'Interactions par commentaire approfondi'
    ],
    realisticTruth: 'Facebook offre un potentiel de partage viral intergénérationnel sous-estimé, mais requiert une modération rigoureuse des commentaires pour maintenir un climat d\'échange respectueux.'
  }
];
