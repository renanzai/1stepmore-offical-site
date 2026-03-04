import { invokeLLM } from "./_core/llm";

async function generateTestimonials() {
  const prompt = `生成3个真实感的客户推荐文案，用于一个多语言内容生产服务平台（1StepMore）。要求：
1. 每个推荐包含：公司名称（虚拟但真实感强）、职位、推荐文案、成果数据
2. 公司名称不能是真实存在的知名公司，但要听起来专业真实
3. 推荐文案要具体，包含实际使用场景和成果
4. 成果数据要有说服力（如提高转化率、节省成本、扩展市场等）
5. 返回 JSON 格式，包含 testimonials 数组

示例格式：
{
  "testimonials": [
    {
      "company": "公司名称",
      "position": "职位",
      "text": "推荐文案",
      "metric": "成果数据",
      "avatar": "首字母"
    }
  ]
}`;

  const response = await invokeLLM({
    messages: [
      {
        role: "system",
        content: "You are a professional copywriter creating authentic-sounding customer testimonials for a multilingual content production platform. Return only valid JSON."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "testimonials",
        strict: true,
        schema: {
          type: "object",
          properties: {
            testimonials: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  company: { type: "string" },
                  position: { type: "string" },
                  text: { type: "string" },
                  metric: { type: "string" },
                  avatar: { type: "string" }
                },
                required: ["company", "position", "text", "metric", "avatar"]
              }
            }
          },
          required: ["testimonials"]
        }
      }
    }
  });

  console.log(JSON.stringify(response, null, 2));
}

generateTestimonials().catch(console.error);
