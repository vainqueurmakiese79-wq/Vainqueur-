import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize GoogleGenAI client if API key is present
const geminiApiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (geminiApiKey && geminiApiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// API Health / Config status
app.get('/api/ai/status', (req, res) => {
  res.json({
    hasApiKey: Boolean(aiClient),
    model: 'gemini-3.8-flash',
    system: 'VQR Creator Engine',
  });
});

// AI Generation Endpoint
app.post('/api/ai/generate', async (req, res) => {
  const { prompt, type = 'all', platform = 'multi' } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Le champ prompt est requis.' });
  }

  // If Gemini API is configured, call it
  if (aiClient) {
    try {
      const systemInstruction = `Tu es l'assistant créatif et stratégique VQR AI pour les créateurs de contenu sur TikTok, Instagram, YouTube et Facebook.
La philosophie VQR est : « Crée. Persévère. Progresse. »
Tes réponses doivent être directes, ultra-pratiques, motivantes, sans bla-bla inutile.
Génère une réponse JSON valide suivant exactement cette structure :
{
  "ideas": [
    {
      "title": "Titre percutant",
      "concept": "Explication claire de l'idée en 2 phrases",
      "hook": "La première phrase exacte (0-3s) qui arrête le scroll",
      "structure": "Intro (0-3s) -> Problème/Curiosité (3-15s) -> Valeur/Solution (15-45s) -> CTA (45-60s)",
      "cta": "Appel à l'action naturel et engageant"
    }
  ],
  "hooks": [
    "Hook 1...",
    "Hook 2...",
    "Hook 3..."
  ],
  "titles": [
    "Titre 1...",
    "Titre 2...",
    "Titre 3..."
  ],
  "shortScript": {
    "title": "Titre du script 45 secondes",
    "hook": "...",
    "body": "...",
    "twist": "...",
    "cta": "..."
  },
  "seriesIdea": {
    "name": "Nom de la série de vidéos",
    "pitch": "Pourquoi cette série va fidéliser",
    "episodes": ["Épisode 1...", "Épisode 2...", "Épisode 3..."]
  },
  "advice": "Conseil personnalisé de persévérance et d'exécution spécifique à la demande."
}`;

      const userMessage = `Demande de l'utilisateur : "${prompt}". Type demandé : ${type}. Plateforme ciblée : ${platform}. Réponds uniquement avec l'objet JSON valide, sans texte additionnel ni markdown en dehors du bloc JSON.`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\n${userMessage}` }] }
        ],
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const responseText = response.text || '';
      try {
        const parsed = JSON.parse(responseText);
        return res.json({
          success: true,
          source: 'gemini-3.8-flash',
          data: parsed,
        });
      } catch (parseError) {
        return res.json({
          success: true,
          source: 'gemini-3.8-flash-raw',
          data: { raw: responseText },
        });
      }
    } catch (apiError: any) {
      console.error('Gemini generation error:', apiError);
      // Fall through to fallback engine below
    }
  }

  // Graceful smart fallback when API key is not supplied or throttled
  // Generates contextual, realistic, domain-specific outputs
  const fallbackResult = generateVqrFallback(prompt, type);
  return res.json({
    success: true,
    source: 'vqr-engine-offline',
    notice: aiClient ? 'Basculé sur le moteur VQR local' : 'Moteur VQR actif (connectez votre clé Gemini dans les paramètres pour le mode direct)',
    data: fallbackResult,
  });
});

function generateVqrFallback(prompt: string, type: string) {
  const pLower = prompt.toLowerCase();
  
  let topic = 'ta thématique';
  if (pLower.includes('motivation') || pLower.includes('discipline')) topic = 'la discipline et la motivation';
  else if (pLower.includes('business') || pLower.includes('argent')) topic = 'le business et la rentabilité';
  else if (pLower.includes('sport') || pLower.includes('fitness')) topic = 'la forme physique et la constance';
  else if (pLower.includes('humour') || pLower.includes('sketch')) topic = 'l\'auto-dérision et les situations du quotidien';
  else if (pLower.includes('storytelling')) topic = 'les leçons d\'échecs et réussites vécues';
  else if (pLower.includes('tech') || pLower.includes('ia')) topic = 'les outils qui font gagner 10h par semaine';

  return {
    ideas: [
      {
        title: `L'erreur que 90% des créateurs font sur ${topic}`,
        concept: `Expliquer une fausse croyance répandue et donner la méthode concrète pour la corriger immédiatement.`,
        hook: `« Arrête de faire ça si tu veux des résultats réels en 2026. »`,
        structure: `0-3s: Hook choc sur l'erreur fatale -> 3-15s: Pourquoi tout le monde se trompe -> 15-40s: Les 3 ajustements simples -> 40-50s: Question engageante`,
        cta: `« Enregistre cette vidéo pour l'appliquer à ton prochain tournage et dis-moi en commentaire si tu faisais cette erreur. »`
      },
      {
        title: `Comment j'ai débloqué ma régularité (méthode en 3 étapes)`,
        concept: `Partager un système simple d'organisation qui élimine la panne d'inspiration et le syndrome de la page blanche.`,
        hook: `« Ce n'est pas un manque de motivation, c'est un problème de système. »`,
        structure: `0-3s: Déconstruction de la motivation -> 3-20s: La règle des 20 minutes -> 20-40s: Le carnet de capture continue -> 40-50s: Défi 24h`,
        cta: `« Abonne-toi pour le jour 2 où je te montre mon modèle de calendrier de publication. »`
      },
      {
        title: `3 vérités brutales sur ${topic} que personne n'ose dire`,
        concept: `Délivrer une vérité authentique et percutante qui crée un soulagement et une forte identification chez le spectateur.`,
        hook: `« Tu n'as pas besoin de plus d'abonnés, tu as besoin de ceci. »`,
        structure: `0-3s: Phrase contre-intuitive -> 3-15s: Vérité #1 -> 15-30s: Vérité #2 -> 30-45s: Vérité #3 -> 45-55s: Résumé VQR`,
        cta: `« Laquelle de ces vérités résonne le plus avec ton expérience ? Partage en com. »`
      }
    ],
    hooks: [
      `« Tout le monde te dit de faire ça... mais voici pourquoi c'est un piège. »`,
      `« Si tu devais recommencer de zéro aujourd'hui, voici l'unique chose sur laquelle te concentrer. »`,
      `« J'ai analysé 100 vidéos qui ont cartonné : elles ont toutes ce point commun. »`,
      `« Ne publie plus aucune vidéo avant d'avoir vérifié ces 3 détails. »`,
      `« Ce qui m'a pris 6 mois à comprendre en 45 secondes. »`
    ],
    titles: [
      `La méthode silencieuse pour progresser sur les réseaux`,
      `Pourquoi tes vidéos n'accrochent pas (et le fix rapide)`,
      `De 0 à régulier : Le guide sans filtre`,
      `3 astuces sous-estimées pour multiplier l'interaction`,
      `Comment surmonter le flop d'une vidéo sans abandonner`
    ],
    shortScript: {
      title: `Script 45s : Déconstruire le mythe du talent`,
      hook: `« Tu penses que les créateurs qui réussissent ont un talent inné ? Regarde ça. »`,
      body: `« La vérité, c'est que leur première vidéo était catastrophique. La mienne aussi. La différence ne s'est pas faite sur la caméra ou le micro, mais sur leur capacité à continuer quand personne ne regardait. Un flop n'est pas une sentence, c'est juste une donnée statistique. »`,
      twist: `« Chaque vidéo moyenne que tu publies aujourd'hui est le prix à payer pour ta meilleure vidéo dans 3 mois. »`,
      cta: `« Enregistre ce rappel pour les jours où le doute s'installe. Crée. Persévère. Progresse. »`
    },
    seriesIdea: {
      name: `« Zéro Filtre : 1 Astuce par Jour »`,
      pitch: `Un format court quotidien ou bi-hebdomadaire où tu résous un micro-problème précis en moins de 30 secondes. Les formats en série incitent les spectateurs à s'abonner pour ne pas rater la suite.`,
      episodes: [
        `Épisode 1 : Le test du son sans casque`,
        `Épisode 2 : L'art du premier mot prononcé`,
        `Épisode 3 : Pourquoi couper chaque silence de respiration`
      ]
    },
    advice: `Ton sujet "${prompt}" a un potentiel énorme. Ne cherche pas la perfection technique dès le départ : concentre-toi sur la clarté du message et l'accroche des 3 premières secondes. Publie régulièrement et analyse tes rétentions d'audience.`
  };
}

// Dev vs Prod Vite Integration
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`[VQR CREATOR] Server running on http://0.0.0.0:${port}`);
  });
}

startServer();
