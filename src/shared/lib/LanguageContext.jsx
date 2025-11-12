import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const translations = {
  zh: {
    nav: {
      home: '主页',
      about: '关于我们',
      solutions: '解决方案',
      contact: '联系我们',
      login: '登录',
    },
    brand: {
      name: '山东菏投科技发展集团',
      languageToggle: '中文 / EN',
    },
    hero: {
      title: '尖端智能体，赋能企业未来。',
      subtitle: '部署先进AI代理，实现复杂工作流程自动化，驱动您的业务增长。',
      demo: '预约演示',
      video: '观看介绍',
      partners: '我们的合作伙伴',
    },
    about: {
        subtitle: '品牌故事',
        title: '引领AI代理技术的未来',
        description: '山东菏投科技发展集团致力于通过自主AI代理技术，为全球企业提供革命性的自动化解决方案。',
        hero: {
          title: '开创智能协作的未来',
          subtitle: '了解我们为人类革新技术这一使命背后的理念、历程和团队。',
        },
        mission: {
          title: '我们的创始理念',
          description: '在山东菏投科技发展集团，我们始于一个简单的信念：技术应是人类潜能的延伸，而非替代品。',
          quote: '在菏投，我们的目标是创造与人类协作的智能体，增强我们的创造力和生产力，而不是取而代之。',
          author: '张广俊，创始人兼首席执行官',
        },
        journey: {
          title: '我们的发展历程',
          timeline: [
            { year: '2021年', title: '灵感迸发', desc: '菏投的想法诞生了。一支由充满热情的工程师和设计师组成的小团队，怀着共同的愿景走到了一起。' },
            { year: '2022年', title: '首个原型', desc: '经过数月不懈的努力，我们推出了第一个功能原型，证明了我们协作式AI的核心概念。' },
            { year: '2023年', title: '赢得信任', desc: '我们成功获得了种子轮融资，这使我们能够扩大团队并加速产品公开发布的进程。' },
            { year: '2024年', title: '公开发布', desc: '我们的平台向公众发布，赋能成千上万的用户通过我们的AI智能体取得更多成就。' },
          ],
        },
        team: {
          title: '我们的企业文化与团队',
          description: '我们是一支由创新者、思想家和创造者组成的团队，因一个共同的目标而团结在一起。我们的文化建立在透明、协作和对卓越的不懈追求之上。',
          members: [
            { name: '张广俊', role: '创始人兼首席执行官' },
            { name: '李伟', role: '首席技术官' },
            { name: '张敏', role: '产品负责人' },
            { name: '陈磊', role: '首席AI研究员' },
          ],
        },
      },
    solutions: {
      subtitle: '我们的智能体',
      title: '为您的行业量身定制的AI解决方案',
      description: '探索我们的AI代理如何为不同行业带来效率和创新，解决从客户服务到数据分析的各种挑战。',
      cards: [
        { icon: 'support_agent', title: '智能客户支持', desc: '提供24/7全天候支持，即时响应客户咨询' },
        { icon: 'query_stats', title: '自动化数据分析', desc: '自动收集、处理和分析海量数据集' },
        { icon: 'task_alt', title: '业务流程自动化', desc: '自动化执行重复性高的后台任务' },
      ],
      detailedCards: [
        {
          icon: 'support_agent',
          title: '智能客户支持',
          desc: '我们的AI客服代理提供24/7全天候支持，即时响应客户咨询，解决常见问题，显著提升客户满意度。',
        },
        {
          icon: 'query_stats',
          title: '自动化数据分析',
          desc: '部署能够自动收集、处理和分析海量数据集的AI代理，从中提取有价值的业务洞察，辅助决策。',
        },
        {
          icon: 'task_alt',
          title: '业务流程自动化',
          desc: '从发票处理到员工入职，我们的AI代理能够自动化执行重复性高的后台任务，让您的团队专注于核心业务。',
        },
        {
          icon: 'psychology',
          title: '智能决策支持',
          desc: '利用先进的机器学习算法，为企业提供数据驱动的决策建议，优化业务流程和资源配置。',
        },
      ],
      solutionsPage: {
        hero: {
          title: '我们的智能代理',
          subtitle: '了解我们旨在重新定义行业标准的先进AI解决方案。',
        },
        products: [
          {
            name: 'Orion',
            title: '智能代理 \'Orion\'',
            desc: '通过预测性洞察自动化复杂的财务分析。',
            learnMore: '了解更多',
          },
          {
            name: 'Nexus',
            title: 'Nexus 平台',
            desc: '以无与伦比的效率实时优化供应链物流。',
            learnMore: '了解更多',
          },
          {
            name: 'Synapse',
            title: 'Synapse Core',
            desc: '使开发人员能够无缝构建和部署自定义 AI 智能代理。',
            learnMore: '了解更多',
          },
          {
            name: 'Quantum',
            title: 'Quantum Leap',
            desc: '通过先进的模拟智能代理彻底改变研发。',
            learnMore: '了解更多',
          },
        ],
        cta: {
          title: '准备好革新您的业务了吗？',
          subtitle: '了解我们的 AI 智能代理如何改变您的业务。',
          button: '申请演示',
        },
      },
      industries: {
        title: '应用场景',
        list: ['金融服务', '医疗健康', '电子商务', '制造业', '教育培训', '物流运输'],
      },
    },
    
    contactPage: {
        hero: {
          title: '让我们携手，共创未来',
          subtitle: '无论您对我们的技术有任何疑问、有项目合作意向，或是媒体垂询，我们都随时准备为您解答。',
        },
        form: {
          title: '给我们留言',
          nameLabel: '姓名',
          companyLabel: '公司名称（选填）',
          emailLabel: '工作邮箱',
          phoneLabel: '电话号码（选填）',
          topicLabel: '咨询主题',
          messageLabel: '您的留言',
          namePlaceholder: '请输入您的姓名',
          companyPlaceholder: '请输入您的公司名称',
          emailPlaceholder: 'name@company.com',
          phonePlaceholder: '(123) 456-7890',
          messagePlaceholder: '请在此处留下您的消息...',
          topics: ['销售咨询', '合作意向', '媒体垂询', '其他问题'],
          submit: '发送',
        },
        info: {
          title: '联系信息',
          email: 'contact@sdhtfz.com',
          phone: '+86 123-4567-890',
        },
        address: {
          title: '我们的地址',
          content: '山东省菏泽市<br />中华路1008号<br />创业大厦',
        },
      },
    footer: {
      copyright: '© 2025 山东菏投科技发展集团. 版权所有.',
      privacy: '隐私政策',
      terms: '服务条款',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      solutions: 'Solutions',
      contact: 'Contact',
      login: 'Login',
    },
    brand: {
      name: 'Shandong Hetou Technology Development Group',
      languageToggle: 'EN / 中文',
    },
    hero: {
      title: 'Cutting-edge AI Agents, Empowering Business Future.',
      subtitle: 'Deploy advanced AI agents to automate complex workflows and drive your business growth.',
      demo: 'Book Demo',
      video: 'Watch Intro',
      partners: 'Our Partners',
    },
    about: {
        subtitle: 'Our Story',
        title: 'Leading the Future of AI Agent Technology',
        description: 'Shandong Hetou Technology Development Group is committed to providing revolutionary automation solutions to global enterprises through autonomous AI agent technology.',
        hero: {
          title: 'Creating the Future of Intelligent Collaboration',
          subtitle: 'Understand the philosophy, journey, and team behind our mission to innovate technology for humanity.',
        },
        mission: {
          title: 'Our Founding Philosophy',
          description: 'At Shandong Hetou Technology Development Group, we start with a simple belief: technology should be an extension of human potential, not a replacement.',
          quote: 'At Hetou, our goal is to create intelligent agents that collaborate with humans, enhancing our creativity and productivity rather than replacing them.',
          author: 'Zhang Guangjun, Founder & CEO',
        },
        journey: {
          title: 'Our Journey',
          timeline: [
            { year: '2021', title: 'Inspiration Strikes', desc: 'The idea for Hetou was born. A small team of passionate engineers and designers came together with a shared vision.' },
            { year: '2022', title: 'First Prototype', desc: 'After months of relentless effort, we launched our first functional prototype, proving the core concept of our collaborative AI.' },
            { year: '2023', title: 'Gaining Trust', desc: 'We successfully secured seed funding, enabling us to expand our team and accelerate the path to public release.' },
            { year: '2024', title: 'Public Launch', desc: 'Our platform was launched to the public, empowering thousands of users to achieve more through our AI agents.' },
          ],
        },
        team: {
          title: 'Our Culture & Team',
          description: 'We are a team of innovators, thinkers, and creators united by a common goal. Our culture is built on transparency, collaboration, and relentless pursuit of excellence.',
          members: [
            { name: 'Zhang Guangjun', role: 'Founder & CEO' },
            { name: 'Li Wei', role: 'Chief Technology Officer' },
            { name: 'Zhang Min', role: 'Head of Product' },
            { name: 'Chen Lei', role: 'Chief AI Researcher' },
          ],
        },
      },
    solutions: {
      subtitle: 'Our AI Agents',
      title: 'AI Solutions Tailored for Your Industry',
      description: 'Explore how our AI agents bring efficiency and innovation to various industries, solving challenges from customer service to data analysis.',
      cards: [
        { icon: 'support_agent', title: 'Intelligent Customer Support', desc: 'Provide 24/7 support, instant response to customer inquiries' },
        { icon: 'query_stats', title: 'Automated Data Analysis', desc: 'Automatically collect, process and analyze massive datasets' },
        { icon: 'task_alt', title: 'Business Process Automation', desc: 'Automate repetitive back-office tasks' },
      ],
      detailedCards: [
        {
          icon: 'support_agent',
          title: 'Intelligent Customer Support',
          desc: 'Our AI customer service agents provide 24/7 support, instantly responding to customer inquiries and resolving common issues, significantly improving customer satisfaction.',
        },
        {
          icon: 'query_stats',
          title: 'Automated Data Analysis',
          desc: 'Deploy AI agents that automatically collect, process, and analyze massive datasets, extracting valuable business insights to support decision-making.',
        },
        {
          icon: 'task_alt',
          title: 'Business Process Automation',
          desc: 'From invoice processing to employee onboarding, our AI agents automate repetitive back-office tasks, allowing your team to focus on core business.',
        },
        {
          icon: 'psychology',
          title: 'Intelligent Decision Support',
          desc: 'Leverage advanced machine learning algorithms to provide data-driven decision recommendations, optimizing business processes and resource allocation.',
        },
      ],
      solutionsPage: {
        hero: {
          title: 'Our AI Agents',
          subtitle: 'Discover our advanced AI solutions designed to redefine industry standards.',
        },
        products: [
          {
            name: 'Orion',
            title: 'AI Agent \'Orion\'',
            desc: 'Automate complex financial analysis with predictive insights.',
            learnMore: 'Learn More',
          },
          {
            name: 'Nexus',
            title: 'Nexus Platform',
            desc: 'Optimize supply chain logistics in real-time with unmatched efficiency.',
            learnMore: 'Learn More',
          },
          {
            name: 'Synapse',
            title: 'Synapse Core',
            desc: 'Enable developers to seamlessly build and deploy custom AI agents.',
            learnMore: 'Learn More',
          },
          {
            name: 'Quantum',
            title: 'Quantum Leap',
            desc: 'Revolutionize R&D with advanced simulation AI agents.',
            learnMore: 'Learn More',
          },
        ],
        cta: {
          title: 'Ready to revolutionize your business?',
          subtitle: 'Discover how our AI agents can transform your business.',
          button: 'Request Demo',
        },
      },
      industries: {
        title: 'Application Scenarios',
        list: ['Financial Services', 'Healthcare', 'E-commerce', 'Manufacturing', 'Education', 'Logistics'],
      },
    },
    
    contactPage: {
        hero: {
          title: "Let's Work Together, Create the Future",
          subtitle: 'Whether you have questions about our technology, collaboration opportunities, or media inquiries, we are always ready to help.',
        },
        form: {
          title: 'Leave Us a Message',
          nameLabel: 'Name',
          companyLabel: 'Company Name (Optional)',
          emailLabel: 'Work Email',
          phoneLabel: 'Phone Number (Optional)',
          topicLabel: 'Inquiry Topic',
          messageLabel: 'Your Message',
          namePlaceholder: 'Enter your name',
          companyPlaceholder: 'Enter your company name',
          emailPlaceholder: 'name@company.com',
          phonePlaceholder: '(123) 456-7890',
          messagePlaceholder: 'Leave your message here...',
          topics: ['Sales Inquiry', 'Partnership', 'Media Inquiry', 'Other'],
          submit: 'Send',
        },
        info: {
          title: 'Contact Information',
          email: 'contact@sdhtfz.com',
          phone: '+86 123-4567-890',
        },
        address: {
          title: 'Our Address',
          content: 'Heze City, Shandong Province<br />Zhonghua Road 1008<br />Startup Building',
        },
      },
    footer: {
      copyright: '© 2025 Shandong Hetou Technology Development Group. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'zh'
    }
    return 'zh'
  })

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
