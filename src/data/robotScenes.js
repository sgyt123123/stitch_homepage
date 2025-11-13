// 机器人场景配置数据
export const robotScenes = {
  // 原始机器人 (眼睛跟随效果)
  original: {
    id: 'original',
    name: '智能机器人 (眼睛跟随)',
    scene: 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode',
    description: '具有眼睛跟随鼠标效果的友好机器人',
    features: ['眼睛跟随鼠标', '友好设计', '互动体验']
  },

  // 3D机器人 (更现代的设计)
  modernRobot: {
    id: 'modernRobot',
    name: '现代3D机器人',
    scene: 'https://prod.spline.design/aZ7N4Bk9F2m8wQ3p/scene.splinecode',
    description: '现代设计风格的3D机器人',
    features: ['现代设计', '流畅动画', '专业感']
  },

  // 友好的助手机器人
  friendlyBot: {
    id: 'friendlyBot',
    name: '友好助手机器人',
    scene: 'https://prod.spline.design/Mn5YkL8P2q7wX9rZ/scene.splinecode',
    description: '专为助手应用设计的友好机器人',
    features: ['友好助手', '专业形象', '交互友好']
  },

  // 未来科技机器人
  futuristic: {
    id: 'futuristic',
    name: '未来科技机器人',
    scene: 'https://prod.spline.design/Qx9vW2Lk8M5nY6pA/scene.splinecode',
    description: '具有未来科技感的机器人设计',
    features: ['科幻感', '现代技术', '科技感强']
  },

  // 简约机器人设计
  simpleBot: {
    id: 'simpleBot',
    name: '简约风格机器人',
    scene: 'https://prod.spline.design/Vz8kX3Lm9N4pQ7rB/scene.splinecode',
    description: '简洁现代的机器人设计',
    features: ['简约设计', '现代风格', '专业感']
  },

  // AI机器人助手
  aiAssistant: {
    id: 'aiAssistant',
    name: 'AI 助手机器人',
    scene: 'https://prod.spline.design/Ty5fL9Mn3K7qX2wC/scene.splinecode',
    description: '专为AI助手应用设计的机器人',
    features: ['AI助手', '专业形象', '智能交互']
  }
};

// 获取默认场景
export const getDefaultScene = () => robotScenes.eyeTracking;

// 根据ID获取场景
export const getSceneById = (id) => robotScenes[id] || robotScenes.eyeTracking;

// 获取所有场景的简单列表
export const getAllScenes = () => Object.values(robotScenes).map(scene => ({
  id: scene.id,
  name: scene.name,
  description: scene.description
}));