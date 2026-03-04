import { invokeLLM } from "./_core/llm";

const languages = ['en', 'ja', 'ko', 'de', 'fr', 'ru', 'es'];

const contentToTranslate = {
  navigation: {
    home: '首页',
    about: '关于我们',
    services: '服务',
    pricing: '定价',
    ecosystem: '生态合作',
    cases: '成功案例',
    contact: '联系我们',
    consultButton: '预约咨询',
    terms: '服务条款'
  },
  hero: {
    title: '多语言内容资产化',
    subtitle: 'Native-first, Asset-always.',
    description: '不再做重复的搬运工。我们利用 LLM 重塑内容生产链，将碎片信息固化为多语言数字资产。赋能品牌营销与技术出海，助你 1StepMore，占领全球认知高地。',
    cta1: '预约咨询',
    cta2: '查看服务方案'
  },
  valueProposition: {
    title: '核心价值主张',
    subtitle: '为什么选择 1StepMore',
    items: [
      { title: 'AI-Powered Production', description: '利用大模型和专家网络，直接生产多语言内容' },
      { title: 'Human-in-the-Loop', description: '专业团队审核，确保内容质量和文化适配' },
      { title: 'One Step More', description: '从策划到交付，一站完成，助力全球扩展' }
    ]
  },
  services: {
    title: '从内容生产到本地化，再进一步',
    subtitle: '我们的核心服务',
    items: [
      {
        title: '多语言内容生产',
        description: '营销文案、SEO 内容、产品文档等多语言版本'
      },
      {
        title: '专业本地化服务',
        description: '文化适配、品牌一致性、本地市场优化'
      },
      {
        title: '国际化战略咨询',
        description: '市场分析、内容策略、全球扩展规划'
      }
    ]
  }
};

async function generateTranslations() {
  for (const lang of languages) {
    const prompt = `将以下中文内容翻译成${getLanguageName(lang)}。要求：
1. 保持专业、优雅的语气
2. 保留品牌名称 "1StepMore"
3. 确保翻译的一致性（相同概念使用相同术语）
4. 返回 JSON 格式，保持原有结构

中文内容：
${JSON.stringify(contentToTranslate, null, 2)}`;

    try {
      const response = await invokeLLM({
        messages: [
          {
            role: "system",
            content: `You are a professional translator specializing in SaaS and technology content. Translate to ${getLanguageName(lang)} while maintaining professional tone and brand consistency. Return only valid JSON.`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "translations",
            strict: false,
            schema: {
              type: "object",
              properties: {
                navigation: { type: "object" },
                hero: { type: "object" },
                valueProposition: { type: "object" },
                services: { type: "object" }
              }
            }
          }
        }
      });

      const content = response.choices[0]?.message?.content;
      if (content) {
        console.log(`\n=== ${lang.toUpperCase()} ===`);
        console.log(content);
      }
    } catch (error) {
      console.error(`Error translating to ${lang}:`, error);
    }
  }
}

function getLanguageName(code: string): string {
  const names: Record<string, string> = {
    en: 'English',
    ja: 'Japanese',
    ko: 'Korean',
    de: 'German',
    fr: 'French',
    ru: 'Russian',
    es: 'Spanish'
  };
  return names[code] || code;
}

generateTranslations().catch(console.error);
