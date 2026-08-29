import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy Gemini client helper
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // AI Scope & Architecture Generator Endpoint
  app.post('/api/gemini/analyze-scope', async (req, res) => {
    try {
      const { prompt, services = [], currency = 'USD', budget = '', timeline = '' } = req.body;

      if (!prompt || typeof prompt !== 'string') {
        res.status(400).json({ error: 'Project description prompt is required' });
        return;
      }

      const client = getGeminiClient();

      if (!client) {
        // Fallback realistic smart response if API key is not yet set
        res.json({
          summary: `Comprehensive web architecture tailored for: "${prompt.slice(0, 120)}..." with modern responsiveness and automated workflows.`,
          recommendedStack: [
            { name: 'React 19 + TypeScript', category: 'Frontend UI', reason: 'High-performance reactive interfaces with strict type safety.' },
            { name: 'Tailwind CSS + Motion', category: 'Design & Animation', reason: 'Rapid styling, fluid responsive layouts, and smooth micro-interactions.' },
            { name: 'Node.js & Express / Next.js', category: 'Backend & APIs', reason: 'Scalable REST/GraphQL endpoints with fast asynchronous I/O.' },
            { name: 'PostgreSQL / MongoDB', category: 'Database Storage', reason: 'Structured, reliable data models with automated indexing.' },
            { name: 'Stripe / Paystack', category: 'Payment Automation', reason: 'Secure global and local payment processing.' },
            { name: 'GitHub Actions & Cloud Run', category: 'CI/CD & Hosting', reason: 'Continuous delivery with 99.9% uptime and instant deployments.' }
          ],
          suggestedArchitecture: 'Modern Decoupled Architecture: Client SPA -> API Gateway / Microservices -> Secure Database & Object Storage with Webhook Automations.',
          keyFeatures: [
            'Fully responsive multi-device design (Mobile, Tablet, Desktop)',
            'Secure authentication & role-based dashboard',
            'Automated email notifications & transactional webhooks',
            'SEO & Core Web Vitals optimization (Score 95+)',
            'Instant WhatsApp & CRM lead sync'
          ],
          estimatedTimeline: timeline || '2–3 weeks (Iterative milestones)',
          recommendedTier: services.includes('E-Commerce Website') || services.includes('Full-Stack Development') ? 'Growth / Custom App' : 'Starter to Growth',
          estimatedBudgetRange: budget || (currency === 'NGN' ? '₦400,000 – ₦900,000' : '$600 – $1,400'),
          automatedWorkflows: [
            { title: 'Instant Lead Notification', description: 'Real-time alert sent to client and admin via WhatsApp & Email webhooks on form submission.', tools: 'Webhook + SMTP' },
            { title: 'Automated CI/CD Deployment', description: 'Zero-downtime builds pushed to production upon git push with automated linting and testing.', tools: 'GitHub Actions' },
            { title: 'Dynamic Asset Optimization', description: 'Automatic image compression and CDN caching for sub-second page loads.', tools: 'Cloudflare / Edge CDN' }
          ],
          suggestedMilestones: [
            { phase: 'Phase 1: Discovery & Wireframing', duration: 'Days 1–3', deliverable: 'Design system, wireframes, and data schema approved.' },
            { phase: 'Phase 2: Core Engineering & Integrations', duration: 'Days 4–10', deliverable: 'Frontend UI, APIs, payment gateways, and database connected.' },
            { phase: 'Phase 3: Automation, QA & Launch', duration: 'Days 11–14', deliverable: 'Automated testing, SSL, SEO setup, domain launch & post-launch support.' }
          ],
          proTips: [
            'Incorporate automated transactional emails from day one to boost user retention.',
            'Use schema.org structured data to rank higher on Google search results.',
            'Implement server-side caching to reduce server costs and improve latency.'
          ]
        });
        return;
      }

      // Call Gemini 3.7 Flash with structured JSON output
      const aiPrompt = `You are FavCode Dev's lead software architect and senior full-stack web developer.
Analyze the following client project request and generate an expert architectural blueprint, recommended tech stack, development milestones, and automation opportunities.

Client Project Request:
"${prompt}"

Selected Services: ${services.join(', ') || 'Custom Web Application'}
Target Currency: ${currency}
User Budget Preference: ${budget || 'Flexible / To be recommended'}
User Timeline Preference: ${timeline || 'Standard delivery'}

Provide a structured, highly professional response.`;

      const response = await client.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: aiPrompt,
        config: {
          systemInstruction: 'You are a world-class senior full-stack software engineer and web agency consultant. Always return realistic, actionable, and mathematically grounded web engineering specifications in valid JSON matching the requested schema.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING, description: 'Executive summary of the proposed digital product' },
              recommendedStack: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    category: { type: Type.STRING },
                    reason: { type: Type.STRING }
                  },
                  required: ['name', 'category', 'reason']
                }
              },
              suggestedArchitecture: { type: Type.STRING, description: 'Architecture style explanation' },
              keyFeatures: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              estimatedTimeline: { type: Type.STRING, description: 'Realistic delivery timeline' },
              recommendedTier: { type: Type.STRING, description: 'Starter, Growth, or Enterprise' },
              estimatedBudgetRange: { type: Type.STRING, description: 'Estimated budget range in target currency' },
              automatedWorkflows: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                    tools: { type: Type.STRING }
                  },
                  required: ['title', 'description', 'tools']
                }
              },
              suggestedMilestones: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    phase: { type: Type.STRING },
                    duration: { type: Type.STRING },
                    deliverable: { type: Type.STRING }
                  },
                  required: ['phase', 'duration', 'deliverable']
                }
              },
              proTips: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: [
              'summary',
              'recommendedStack',
              'suggestedArchitecture',
              'keyFeatures',
              'estimatedTimeline',
              'recommendedTier',
              'estimatedBudgetRange',
              'automatedWorkflows',
              'suggestedMilestones',
              'proTips'
            ]
          }
        }
      });

      const responseText = response.text || '{}';
      const parsedData = JSON.parse(responseText);
      res.json(parsedData);
    } catch (err: any) {
      console.error('Error in analyze-scope:', err);
      res.status(500).json({
        error: 'Failed to generate AI architecture blueprint',
        details: err?.message || 'Server error'
      });
    }
  });

  // Automated Lead Submission & Reference Generator
  app.post('/api/lead/submit', (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        company,
        services = [],
        currency = 'USD',
        budget,
        timeline,
        startDate,
        contactMethod = 'WhatsApp',
        details
      } = req.body;

      if (!fullName || !email || !phone || !details) {
        res.status(400).json({ error: 'Please fill in all required fields' });
        return;
      }

      // Generate unique reference code: FAV-YYYYMM-XXXX
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const yearMonth = new Date().toISOString().slice(2, 7).replace('-', '');
      const refId = `FAV-${yearMonth}-${randomCode}`;

      const timestamp = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      // Prepare prefilled WhatsApp message
      const waText = encodeURIComponent(
        `Hello FavCode Dev! 👋\nI just submitted a project brief on your website.\n\n*Reference ID:* ${refId}\n*Name:* ${fullName}\n*Services:* ${services.join(', ') || 'Custom Project'}\n*Budget:* ${budget || 'Flexible'}\n*Timeline:* ${timeline || 'ASAP'}\n\n*Project Details:*\n${details}`
      );

      const whatsappUrl = `https://wa.me/2348167668000?text=${waText}`;

      // Email payload
      const mailtoSubject = encodeURIComponent(`Project Brief [${refId}] - ${fullName}`);
      const mailtoBody = encodeURIComponent(
        `Reference ID: ${refId}\nClient Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'N/A'}\nServices: ${services.join(', ')}\nBudget: ${budget}\nTimeline: ${timeline}\nStart Date: ${startDate || 'Immediate'}\n\nProject Scope:\n${details}`
      );
      const mailtoUrl = `mailto:favourcode111@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      res.json({
        success: true,
        refId,
        timestamp,
        leadSummary: {
          clientName: fullName,
          email,
          phone,
          services,
          estimatedResponseTime: 'Within 2–4 hours',
          assignedEngineer: 'Favour (FavCode Dev)'
        },
        whatsappUrl,
        mailtoUrl
      });
    } catch (err: any) {
      console.error('Lead submit error:', err);
      res.status(500).json({ error: 'Failed to process lead' });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FavCode Dev Full-Stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
