# 🤖 机器人场景选择指南

## 当前配置
您的项目现在使用的是 **左右分布布局**：
- **左侧**: 文字内容和按钮
- **右侧**: 3D 机器人展示

## 推荐的机器人场景

### 1. 眼睛跟随鼠标的机器人 (强烈推荐)
如果您需要机器人眼睛跟随鼠标效果，可以在 Spline 中寻找或创建：

**在 Spline 中寻找:**
- 搜索关键词: "robot eye tracking", "AI robot interactive", "eye follow mouse"
- 寻找有 "eye tracking" 或 "look at mouse" 效果的机器人

**推荐的场景类型:**
- AI 助手机器人
- 智能对话机器人
- 客户服务机器人

### 2. 其他优秀的机器人场景
您可以在以下地方找到高质量的机器人场景：

#### Spline Community (推荐)
- 访问 [Spline Community](https://community.spline.design/)
- 搜索 "robot", "AI assistant", "interactive character"
- 筛选条件: "Free", "Public"

#### 热门机器人场景示例
- "Friendly Robot Character" - 友好机器人角色
- "AI Assistant Bot" - AI 助手机器人
- "Modern Robot Design" - 现代机器人设计
- "Interactive Robot" - 互动机器人

## 🎯 立即尝试的眼睛跟随机器人

### 选项 1: 使用现有场景
如果您有特定的 Spline 场景链接，可以直接在代码中替换：

```jsx
// 在 HomeContent.jsx 中替换场景链接
<SplineScene
  scene="您的场景链接"
  className="w-full h-full"
/>
```

### 选项 2: 创建自定义场景
1. 访问 [Spline Editor](https://spline.design/)
2. 创建新的 3D 场景
3. 搜索或创建机器人模型
4. 添加眼睛跟随鼠标的交互
5. 发布并获取场景链接

### 选项 3: 社区场景库
寻找社区分享的免费机器人场景：
- Sketchfab (3D 模型)
- Spline Community
- GitHub 开源场景

## 🎨 效果建议

### 推荐的机器人特性
1. **眼睛跟随鼠标** - 增加互动感
2. **轻微动画** - 呼吸或眨眼效果
3. **现代设计** - 简洁专业的外观
4. **友好表情** - 适合商业用途

### 布局优化
当前布局已经实现：
- ✅ 左右分布，文字在左，机器人在右
- ✅ 响应式设计，小屏幕自动隐藏机器人
- ✅ 动画入场效果
- ✅ 流畅的视觉层次

## 🚀 快速测试

要测试不同的机器人场景，只需修改这一行代码：

```jsx
// 在 src/features/home/HomeContent.jsx 第155行附近
<SplineScene
  scene="https://prod.spline.design/您的场景ID/scene.splinecode"
  className="w-full h-full"
/>
```

## 💡 建议

1. **先试现有场景** - 使用当前的机器人场景测试效果
2. **寻找眼睛跟随效果** - 这将大大提升用户体验
3. **保持简单** - 过于复杂的动画可能影响页面性能
4. **测试响应式** - 确保在不同设备上都能正常显示

## 🎭 创建交互式机器人

如果您想创建自己的机器人，可以参考：
- Spline 官方教程
- 社区最佳实践
- 互动设计的原则

**记住**: 一个有眼睛跟随效果的机器人会让您的网站更加生动有趣！