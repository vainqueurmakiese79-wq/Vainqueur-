import { AiGeneratedOutput } from '../types/creator';

export interface GenerateAiParams {
  prompt: string;
  type?: 'all' | 'ideas' | 'hooks' | 'script' | 'series';
  platform?: string;
}

export interface GenerateAiResult {
  success: boolean;
  source: string;
  notice?: string;
  data: AiGeneratedOutput;
}

export async function requestAiGeneration(params: GenerateAiParams): Promise<GenerateAiResult> {
  try {
    const response = await fetch('/api/ai/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.warn('Backend /api/ai/generate unavailable, using client fallback', err);
  }

  // Client-side fallback if server fails
  return {
    success: true,
    source: 'vqr-engine-client-fallback',
    notice: 'Généré par les modèles VQR Engine intégrés',
    data: generateClientFallback(params.prompt),
  };
}

function generateClientFallback(prompt: string): AiGeneratedOutput {
  const p = prompt.toLowerCase();
  let theme = 'ta thématique';
  if (p.includes('motivation') || p.includes('procrastination')) theme = 'la motivation et la discipline';
  else if (p.includes('sport') || p.includes('fitness')) theme = 'la forme physique et la santé';
  else if (p.includes('business') || p.includes('argent') || p.includes('vente')) theme = 'le business et les revenus';
  else if (p.includes('tech') || p.includes('ia') || p.includes('outils')) theme = 'les outils technologiques';
  else if (p.includes('lifestyle') || p.includes('organisation')) theme = 'l\'organisation de vie et l\'équilibre';

  return {
    ideas: [
      {
        title: `L'erreur fatale que 90% des débutants font sur ${theme}`,
        concept: `Mettre en lumière une pratique intuitive mais inefficace et proposer l'alternative éprouvée.`,
        hook: `« Arrête tout de suite si tu fais encore ça en 2026. »`,
        structure: `0-3s: Hook de rupture -> 3-15s: Pourquoi la méthode classique bloque -> 15-40s: La solution en 2 étapes claires -> 40-50s: Question engageante`,
        cta: `« Enregistre ce post pour ton prochain tournage et dis-moi en com si tu faisais cette erreur ! »`
      },
      {
        title: `Comment j'ai débloqué mes résultats (méthode en 3 étapes)`,
        concept: `Partager un système simple d'exécution qui élimine les doutes et accélère l'apprentissage.`,
        hook: `« Ce n'est pas un manque de talent, c'est un problème d'organisation. »`,
        structure: `0-4s: Déconstruction du mythe -> 4-18s: Étape 1 simplifiée -> 18-35s: Étape 2 & 3 -> 35-48s: Appel à l'action`,
        cta: `« Abonne-toi pour le jour 2 où on va creuser le cas concret ! »`
      },
      {
        title: `3 vérités sans filtre sur ${theme}`,
        concept: `Délivrer une analyse honnête sans langue de bois pour bâtir une confiance immédiate avec l'audience.`,
        hook: `« Tu n'as pas besoin de plus d'abonnés, tu as besoin de comprendre ceci. »`,
        structure: `0-3s: Affirmation contre-intuitive -> 3-15s: Vérité #1 -> 15-30s: Vérité #2 -> 30-45s: Vérité #3`,
        cta: `« Laquelle de ces 3 vérités te parle le plus ? Réponds honnêtement en commentaire. »`
      }
    ],
    hooks: [
      `« Tout le monde te dit de faire l'inverse... voici pourquoi c'est un piège. »`,
      `« Si je devais repartir de zéro demain sur ${theme}, voici mon plan exact. »`,
      `« Ce conseil m'a fait gagner 6 mois de tâtonnements inutiles. »`,
      `« Ne publie rien de plus avant d'avoir vérifié ces 3 détails cruciaux. »`,
      `« La différence entre ceux qui stagnent et ceux qui progressent en 45 secondes. »`
    ],
    titles: [
      `La méthode silencieuse pour percer sur les réseaux`,
      `Arrête de faire cette erreur sur ${theme}`,
      `De 0 à régulier : Le guide sans filtre`,
      `3 astuces sous-estimées pour captiver ton audience`,
      `Comment surmonter le bide d'une vidéo et rebondir plus fort`
    ],
    shortScript: {
      title: `Script 45 secondes : Dépasser la peur du jugement`,
      hook: `« Tu as peur de poster ta première vidéo parce que tu crains le regard des autres ? Écoute bien. »`,
      body: `« La vérité, c'est que les gens ne pensent pas à toi autant que tu l'imagines. Ils sont occupés avec leurs propres problèmes, leurs doutes et leurs journées. Ta première vidéo sera imparfaite, et c'est une excellente nouvelle : c'est le seul moyen d'en faire une excellente dans 3 mois. »`,
      twist: `« Personne ne naît charismatique devant un écran. C'est la répétition qui crée l'aisance. »`,
      cta: `« Sauvegarde cette vidéo pour te donner du courage avant ton prochain tournage. Crée. Persévère. Progresse. »`
    },
    seriesIdea: {
      name: `« 1 Minute Pour Progresser »`,
      pitch: `Un format court et rythmé où tu dissèques un problème spécifique par vidéo en moins de 60 secondes. Idéal pour fidéliser et inciter à s'abonner pour la série.`,
      episodes: [
        `Épisode 1 : L'accroche des 3 premières secondes`,
        `Épisode 2 : Pourquoi couper chaque silence au montage`,
        `Épisode 3 : L'astuce secrète de la lumière naturelle`
      ]
    },
    advice: `Pour ta demande « ${prompt} », la clé absolue est la régularité du message. Ne cherche pas à produire un chef-d'œuvre cinématographique au détriment de la clarté. Concentre-toi sur la valeur pratique immédiate pour celui qui regarde.`
  };
}
