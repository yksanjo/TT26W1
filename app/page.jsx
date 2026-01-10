'use client';

import React, { useState } from 'react';
import { TrendingUp, Zap, DollarSign, Users, Code, ChevronDown, ChevronUp, ExternalLink, Download, Share2 } from 'lucide-react';

export default function TechTrendsJan2026() {
  const [expandedSection, setExpandedSection] = useState('deepseek');
  const [selectedResource, setSelectedResource] = useState(null);

  const trends = [
    {
      id: 'deepseek',
      title: 'DeepSeek R1: The $5.6M AI Disruption',
      icon: <Zap className="w-6 h-6" />,
      impact: 'Revolutionary',
      date: 'Jan 20, 2025 (impact throughout week)',
      color: 'from-red-500 to-orange-500',
      summary: 'Chinese AI startup DeepSeek released R1, an open-source reasoning model that matches GPT-4 and OpenAI o1 performance at 1/100th the cost, triggering $600B market cap loss for NVIDIA and forcing a complete industry rethink.',
      keyInsights: [
        'Trained for $5.6M vs $100M+ for comparable models',
        'MIT licensed - fully open source',
        'Achieved with limited compute (H800 chips under US sanctions)',
        'Sparked immediate price war across Chinese AI industry',
        'Became #1 app on iOS App Store, surpassing ChatGPT'
      ],
      implications: [
        'Capital is no longer the primary moat in AI',
        'Algorithmic efficiency > raw compute power',
        'Open source can compete with closed proprietary models',
        'US chip export controls less effective than assumed',
        'Democratization of frontier AI capabilities'
      ]
    },
    {
      id: 'ai-pragmatism',
      title: 'AI Shifts from Hype to Practical Deployment',
      icon: <TrendingUp className="w-6 h-6" />,
      impact: 'Transformative',
      date: 'Ongoing through Jan 2026',
      color: 'from-blue-500 to-cyan-500',
      summary: 'The industry pivots from building ever-larger models to making AI actually usable - smaller models, edge computing, and integration into real workflows.',
      keyInsights: [
        'Focus on smaller, specialized models over massive foundation models',
        'World models gaining traction (gaming market: $1.2B → $276B by 2030)',
        'Model Context Protocol (MCP) emerges as "USB-C for AI"',
        'Edge computing enables on-device AI without cloud dependency',
        'Emphasis on AI augmentation vs replacement'
      ],
      implications: [
        'Lower costs and accessibility for startups',
        'Privacy-preserving local AI deployments',
        'New job categories in AI governance and safety',
        'Shift from demo culture to production systems',
        'Integration beats innovation for 2026'
      ]
    },
    {
      id: 'funding',
      title: 'Record AI & Biotech Funding',
      icon: <DollarSign className="w-6 h-6" />,
      impact: 'Significant',
      date: 'Jan 6-8, 2026',
      color: 'from-green-500 to-emerald-500',
      summary: 'Massive capital deployment across AI infrastructure, biotech therapeutics, and enterprise platforms signals continued investor conviction despite market volatility.',
      keyInsights: [
        'xAI: $20B Series E for AGI development',
        'Cyera: $400M for enterprise AI security',
        'Corsera Health: $80M for RNAi heart disease treatment',
        'Articul8: $70M for regulated industry AI',
        'Diagonal Therapeutics: $125M Series B for rare diseases'
      ],
      implications: [
        'AI infrastructure remains top priority',
        'Biotech seeing AI-driven acceleration',
        'Enterprise AI security becoming critical',
        'Healthcare AI getting serious funding',
        'Focus on practical applications over research'
      ]
    },
    {
      id: 'ces',
      title: 'CES 2026: Hardware & Edge AI',
      icon: <Code className="w-6 h-6" />,
      impact: 'Notable',
      date: 'Jan 6-9, 2026',
      color: 'from-purple-500 to-pink-500',
      summary: 'CES showcased the convergence of AI with consumer hardware - AR glasses, edge computing, and efficiency-focused chips dominate.',
      keyInsights: [
        'AMD MI440X AI data center chips announced',
        'Samsung Display reveals creaseless foldable screens',
        'Intel Core Ultra Series 3 with 77% faster iGPU',
        'Qualcomm Snapdragon X2 Plus: 35% single-core performance boost',
        'LG OLED Wallpaper TV - pencil-thin wireless display'
      ],
      implications: [
        'AI moving from cloud to edge devices',
        'Form factors evolving (foldables, AR, thin displays)',
        'Chip war intensifying beyond just NVIDIA',
        'Consumer AI becoming tangible and physical',
        'Focus on efficiency and power consumption'
      ]
    },
    {
      id: 'regulation',
      title: 'AI Regulatory Battle Intensifies',
      icon: <Users className="w-6 h-6" />,
      impact: 'Critical',
      date: 'Ongoing Jan 2026',
      color: 'from-amber-500 to-yellow-500',
      summary: 'Trump executive order aims to block state AI laws, setting up federal vs state showdown with massive implications for innovation vs safety.',
      keyInsights: [
        'Executive order targets state AI regulations',
        'AI companies deploying super-PACs for political influence',
        'OpenAI reverses stance on military applications',
        'Congress failed twice to pass AI legislation in 2025',
        'Midterm elections will be battleground for AI policy'
      ],
      implications: [
        'Patchwork state regulations vs federal framework',
        'AI companies gaining political leverage',
        'Safety vs innovation narrative weaponized',
        'International competitiveness used to resist regulation',
        'Uncertainty for startups on compliance'
      ]
    }
  ];

  const communityResources = [
    {
      id: 'deepseek-starter',
      title: 'DeepSeek R1 Quick Start Guide',
      description: 'Get started with DeepSeek R1 in under 10 minutes',
      type: 'tutorial',
      difficulty: 'beginner',
      content: `# DeepSeek R1 Quick Start

## Option 1: Use the API (Fastest)
\`\`\`python
import openai

client = openai.OpenAI(
    api_key="YOUR_DEEPSEEK_API_KEY",
    base_url="https://api.deepseek.com"
)

response = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[
        {"role": "user", "content": "Explain quantum computing"}
    ]
)
print(response.choices[0].message.content)
\`\`\`

## Option 2: AWS Deployment
DeepSeek R1 is available on:
- Amazon Bedrock Marketplace
- SageMaker JumpStart
- EC2 Trn1 instances

## Option 3: Local Deployment
\`\`\`bash
# Install ollama
curl -fsSL https://ollama.com/install.sh | sh

# Run DeepSeek R1 locally
ollama pull deepseek-r1
ollama run deepseek-r1
\`\`\`

## Pricing Advantage
- DeepSeek R1: $8/1M tokens
- OpenAI o1: $15/1M input + $60/1M output
- **~85% cost savings**

## Use Cases
✅ Complex reasoning tasks
✅ Mathematical problem solving
✅ Code generation & debugging
✅ Research analysis
✅ Educational applications`
    },
    {
      id: 'cost-calculator',
      title: 'AI Cost Optimization Calculator',
      description: 'Calculate potential savings by switching models',
      type: 'tool',
      difficulty: 'beginner',
      content: `# AI Model Cost Calculator

## Monthly Usage Estimation

| Metric | Your Usage | DeepSeek R1 | OpenAI o1 |
|--------|-----------|-------------|-----------|
| Input Tokens/Month | 10M | $5.50 | $150 |
| Output Tokens/Month | 2M | $4.38 | $120 |
| **Total/Month** | - | **$9.88** | **$270** |
| **Annual Savings** | - | - | **$3,121** |

## ROI Scenarios

### Small Startup (1M tokens/month)
- DeepSeek R1: $8/month
- GPT-4: $30/month
- **Savings: $264/year**

### Growing Company (50M tokens/month)
- DeepSeek R1: $400/month
- GPT-4: $1,500/month
- **Savings: $13,200/year**

### Enterprise (500M tokens/month)
- DeepSeek R1: $4,000/month
- GPT-4: $15,000/month
- **Savings: $132,000/year**

## Migration Strategy
1. **Week 1**: Run parallel testing
2. **Week 2**: Migrate 25% of traffic
3. **Week 3**: Scale to 50% if metrics good
4. **Week 4**: Full migration or rollback`
    },
    {
      id: 'mcp-integration',
      title: 'Model Context Protocol Integration',
      description: 'Connect AI agents to your tools and data',
      type: 'tutorial',
      difficulty: 'intermediate',
      content: `# Model Context Protocol (MCP) Integration

## What is MCP?
"USB-C for AI" - standardized way to connect AI agents to external tools, databases, and APIs.

## Quick Setup

### 1. Install MCP SDK
\`\`\`bash
npm install @modelcontextprotocol/sdk
# or
pip install mcp
\`\`\`

### 2. Create an MCP Server
\`\`\`javascript
import { Server } from '@modelcontextprotocol/sdk/server';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio';

const server = new Server({
  name: 'my-data-source',
  version: '1.0.0'
}, {
  capabilities: {
    resources: {},
    tools: {}
  }
});

// Add your tools
server.setRequestHandler('tools/list', async () => ({
  tools: [
    {
      name: 'query_database',
      description: 'Query company database',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string' }
        }
      }
    }
  ]
}));

const transport = new StdioServerTransport();
await server.connect(transport);
\`\`\`

### 3. Connect to AI Agent
\`\`\`python
from anthropic import Anthropic

client = Anthropic()

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "Query our sales database for Q4 results"
        }
    ],
    tools=[
        {
            "type": "mcp_server",
            "server_url": "stdio://./my-data-source"
        }
    ]
)
\`\`\`

## Common Use Cases
- Database connections
- API integrations
- File system access
- Search engines
- CRM/ERP systems

## Benefits
✅ Standardized interface
✅ Security through isolation
✅ Easy to swap AI models
✅ Reusable across projects`
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Deployment Pattern',
      description: 'Run AI models on-device for privacy and speed',
      type: 'architecture',
      difficulty: 'advanced',
      content: `# Edge AI Deployment Pattern

## Why Edge AI?
- **Privacy**: Data never leaves device
- **Latency**: No network round trips
- **Cost**: No API fees per request
- **Reliability**: Works offline

## Architecture

\`\`\`
┌─────────────────────────────────────┐
│         User Device                 │
│  ┌──────────────────────────────┐  │
│  │   Distilled Model (1-7B)     │  │
│  │   - DeepSeek R1 Distill      │  │
│  │   - Llama 3.2 1B/3B          │  │
│  │   - Qwen 2.5 0.5B            │  │
│  └──────────────────────────────┘  │
│           ↓                         │
│  ┌──────────────────────────────┐  │
│  │   Inference Engine           │  │
│  │   - ONNX Runtime             │  │
│  │   - CoreML (iOS)             │  │
│  │   - TFLite (Android)         │  │
│  └──────────────────────────────┘  │
│           ↓                         │
│  ┌──────────────────────────────┐  │
│  │   Application Layer          │  │
│  │   - UI/UX                    │  │
│  │   - Business Logic           │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
\`\`\`

## Implementation Example (iOS)

\`\`\`swift
import CoreML

class EdgeAIManager {
    let model: MLModel
    
    init() throws {
        // Load distilled model
        let config = MLModelConfiguration()
        config.computeUnits = .all
        self.model = try DeepSeekR1_Distill_1B(configuration: config).model
    }
    
    func generateResponse(prompt: String) async throws -> String {
        let input = DeepSeekR1_Distill_1BInput(text: prompt)
        let output = try model.prediction(from: input)
        return output.generatedText
    }
}
\`\`\`

## Web Implementation (ONNX)

\`\`\`javascript
import * as ort from 'onnxruntime-web';

async function loadModel() {
    const session = await ort.InferenceSession.create(
        './models/deepseek-r1-distill-1b.onnx'
    );
    return session;
}

async function runInference(session, text) {
    const tokens = tokenize(text);
    const inputTensor = new ort.Tensor('int64', tokens, [1, tokens.length]);
    
    const results = await session.run({
        input_ids: inputTensor
    });
    
    return detokenize(results.output.data);
}
\`\`\`

## Performance Optimization
1. **Model Quantization**: INT8/INT4 reduces size by 4-8x
2. **Pruning**: Remove unused parameters
3. **Caching**: Store frequent responses
4. **Batching**: Process multiple requests together

## When to Use Edge vs Cloud
- **Edge**: <1B parameter models, privacy-critical, offline-required
- **Cloud**: >7B parameters, complex reasoning, infrequent use`
    },
    {
      id: 'funding-strategy',
      title: 'Founder's Fundraising Playbook',
      description: 'Insights from Jan 2026 funding trends',
      type: 'strategy',
      difficulty: 'intermediate',
      content: `# 2026 Fundraising Playbook

## Key Trends from Jan 6-8 Data

### What's Hot
1. **AI Infrastructure** ($20B+ deployed)
   - Enterprise security (Cyera: $400M)
   - Data platforms (Protege: $30M)
   - Custom silicon alternatives
   
2. **Healthcare AI** ($300M+ deployed)
   - RNA therapeutics (Corsera: $80M)
   - Metabolic AI (Twin Health: $53M)
   - Medical devices (Spiro: $67M)

3. **Vertical AI** (specialized > general)
   - Regulated industries (Articul8: $70M)
   - Domain-specific models
   - Compliance automation

### What's Not
❌ Generic AI wrappers
❌ GPT-4 API businesses without moat
❌ Consumer AI without distribution
❌ Pure research without product

## Positioning Strategy

### If Building AI Infrastructure
**Pitch**: "We enable efficient AI at 1/10th the cost"
- Emphasize efficiency over scale
- Reference DeepSeek disruption
- Focus on ROI metrics
- Target: Andreessen Horowitz, Sequoia

### If Building Healthcare AI
**Pitch**: "AI-native solution for [specific condition]"
- Clinical validation first
- Real patient outcomes
- Regulatory pathway clarity
- Target: Sanofi Ventures, Omega Funds

### If Building Enterprise AI
**Pitch**: "Compliant AI for [regulated industry]"
- Security & governance built-in
- Integration with existing systems
- Clear ROI case studies
- Target: Enterprise VCs, strategics

## Traction Metrics Investors Want

| Stage | Revenue | Users/Customers | Growth Rate |
|-------|---------|-----------------|-------------|
| Pre-seed | $0-50K MRR | 100-1K users | Product-market fit signals |
| Seed | $50K-500K MRR | 1K-10K users | 15-20% MoM |
| Series A | $1M-5M ARR | 10K-100K users | 10%+ MoM |
| Series B | $10M+ ARR | 100K+ users | Proven unit economics |

## 2026-Specific Talking Points
✅ "We're the DeepSeek approach for [vertical]"
✅ "Built for the efficiency era, not the scaling era"
✅ "On-device AI for privacy and cost reduction"
✅ "Open source to capture developer mindshare"
✅ "Profitable within 18 months at current burn"`
    },
    {
      id: 'compliance',
      title: 'AI Regulatory Compliance Checklist',
      description: 'Navigate the 2026 regulatory landscape',
      type: 'guide',
      difficulty: 'intermediate',
      content: `# AI Regulatory Compliance Checklist

## Current Landscape (Jan 2026)

### Federal Level (US)
⚠️ **Uncertain**: Executive order aims to block state laws
- No comprehensive federal AI law yet
- FTC guidelines on deceptive AI claims
- NIST AI Risk Management Framework (voluntary)

### State Level (US)
✅ **Active Regulations**:
- California AI Transparency Act
- New York AI Employment Rules
- Colorado AI Impact Assessments
- EU AI Act (for EU operations)

## Compliance Checklist

### 1. Data & Privacy
- [ ] Data inventory documented
- [ ] User consent mechanisms in place
- [ ] Data minimization strategy
- [ ] Right to deletion implemented
- [ ] Cross-border data transfer agreements
- [ ] Privacy impact assessment completed

### 2. Model Governance
- [ ] Training data provenance tracked
- [ ] Model cards for each deployed model
- [ ] Bias testing conducted
- [ ] Performance monitoring dashboard
- [ ] Version control for models
- [ ] Rollback procedures documented

### 3. Transparency & Explainability
- [ ] AI disclosure to users (when required)
- [ ] Decision explanation capability
- [ ] Human oversight for critical decisions
- [ ] Appeals process for automated decisions

### 4. Security
- [ ] Model access controls
- [ ] Adversarial testing completed
- [ ] Prompt injection safeguards
- [ ] API rate limiting
- [ ] Incident response plan
- [ ] Regular security audits

### 5. Employment (if using AI for hiring)
- [ ] Bias audit (annual requirement in NYC)
- [ ] Candidate notification of AI use
- [ ] Alternative evaluation process available
- [ ] Disparate impact analysis

### 6. Content & Safety
- [ ] Content moderation system
- [ ] Harmful content detection
- [ ] Age-appropriate safeguards
- [ ] Deepfake/synthetic media labeling
- [ ] User reporting mechanism

## Risk Assessment Matrix

| Risk Level | Actions Required | Timeline |
|------------|------------------|----------|
| High (healthcare, finance, hiring) | Full compliance + legal review | Immediate |
| Medium (e-commerce, marketing) | Core compliance + monitoring | 30 days |
| Low (internal tools, research) | Basic documentation | 90 days |

## Documentation Template

\`\`\`markdown
# AI System Documentation

## System Overview
- Name:
- Purpose:
- Deployment date:
- Owner:

## Data
- Training data sources:
- Sensitive data: Y/N
- Data retention period:

## Model
- Base model:
- Fine-tuning approach:
- Performance metrics:
- Known limitations:

## Risk Assessment
- Potential harms:
- Mitigation strategies:
- Human oversight level:

## Compliance
- Applicable regulations:
- Last audit date:
- Next review date:
\`\`\`

## State-Specific Quick Reference

### California
- Transparency required for automated decisions
- Consumer right to opt-out
- Annual risk assessment

### New York
- Bias audit for employment AI
- 60-day notice before deployment
- Public posting of audit results

### Colorado
- Impact assessment for high-risk AI
- Consumer notification requirement
- Right to appeal automated decisions

## When in Doubt
1. Consult legal counsel (not just engineers)
2. Document everything
3. Err on side of transparency
4. Implement human oversight for high-stakes decisions`
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const TrendCard = ({ trend }) => {
    const isExpanded = expandedSection === trend.id;
    
    return (
      <div className="mb-6 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div 
          className={`bg-gradient-to-r ${trend.color} p-6 cursor-pointer`}
          onClick={() => toggleSection(trend.id)}
        >
          <div className="flex items-start justify-between text-white">
            <div className="flex items-start space-x-4 flex-1">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                {trend.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{trend.title}</h3>
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <span className="bg-white/20 px-3 py-1 rounded-full">{trend.impact}</span>
                  <span>{trend.date}</span>
                </div>
              </div>
            </div>
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </div>
        
        {isExpanded && (
          <div className="bg-white p-6 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{trend.summary}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">Key Insights</h4>
                <ul className="space-y-2">
                  {trend.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">Implications</h4>
                <ul className="space-y-2">
                  {trend.implications.map((implication, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">→</span>
                      <span className="text-gray-700">{implication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ResourceCard = ({ resource }) => {
    const difficultyColors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800'
    };

    return (
      <div 
        className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-200 border-2 border-transparent hover:border-blue-500"
        onClick={() => setSelectedResource(resource)}
      >
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-bold text-lg text-gray-900">{resource.title}</h4>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[resource.difficulty]}`}>
            {resource.difficulty}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{resource.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 capitalize">{resource.type}</span>
          <ExternalLink className="w-4 h-4 text-blue-500" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tech Trends: Jan 3-10, 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive analysis of the week's technological advances and actionable resources to empower your community
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              <Download className="w-5 h-5" />
              Export Analysis
            </button>
            <button className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold border-2 border-gray-200">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>

        {/* Trends Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Major Trends & Developments</h2>
          {trends.map(trend => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </section>

        {/* Community Resources Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Community Resources</h2>
            <p className="text-lg text-gray-600">
              Immediately actionable guides, tutorials, and tools ready for deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {communityResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>

        {/* Resource Modal */}
        {selectedResource && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedResource(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedResource.title}</h3>
                  <p className="text-gray-600 mt-2">{selectedResource.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap bg-gray-50 p-6 rounded-lg text-sm leading-relaxed">
                  {selectedResource.content}
                </pre>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  <Download className="w-5 h-5" />
                  Download
                </button>
                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Key Takeaways for Builders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">Immediate Actions</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Test DeepSeek R1 - evaluate if you can reduce AI costs by 85%</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Implement MCP for better AI agent integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Explore edge AI for privacy-sensitive applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Audit AI compliance - regulatory uncertainty is high</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Strategic Shifts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Efficiency > Scale: Optimize for cost and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integration > Innovation: Focus on making AI work in real workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Open Source First: Consider releasing models/tools for ecosystem capture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Vertical Depth: Specialize in specific industries vs horizontal platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p>Analysis compiled from TechCrunch, MIT Technology Review, CNBC, Fortune, and official announcements</p>
          <p className="mt-2">Ready for immediate community deployment • Jan 10, 2026</p>
        </footer>
      </div>
    </div>
  );
}
