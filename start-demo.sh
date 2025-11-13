#!/bin/bash

echo "🎯 3D Spline 组件演示启动脚本"
echo "=================================="
echo ""

# 检查依赖
echo "📦 检查依赖..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  未找到 node_modules，正在安装依赖..."
    npm install
else
    echo "✅ 依赖已安装"
fi

echo ""
echo "🚀 启动开发服务器..."
echo "📍 演示页面: http://localhost:5173"
echo "🎮 点击顶部导航栏的 '3D 演示' 按钮查看效果"
echo ""
echo "💡 或者直接打开 test-demo.html 查看静态演示"
echo ""
echo "按 Ctrl+C 停止服务器"
echo "=================================="
echo ""

# 启动开发服务器
npm run dev