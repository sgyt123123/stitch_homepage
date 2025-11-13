'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function DemoPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 返回按钮 */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          variant="outline"
          onClick={onBack}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          ← 返回主页
        </Button>
      </div>

      <div className="container mx-auto p-8 pt-20">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-4"
          >
            3D 互动演示
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300"
          >
            体验美丽的 3D 场景与 Spotlight 效果
          </motion.p>
        </div>

        {/* 主要展示区域 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-purple-500/20">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex h-full">
              {/* 左侧内容 */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  互动式 3D
                </h2>
                <p className="mt-4 text-neutral-300 max-w-lg text-lg">
                  让您的 UI 焕发生命力，创造沉浸式体验的美丽 3D 场景。
                  捕捉注意力，增强您的设计效果。
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-slate-400">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    实时 3D 渲染
                  </div>
                  <div className="flex items-center text-slate-400">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    流畅的动画效果
                  </div>
                  <div className="flex items-center text-slate-400">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    响应式设计
                  </div>
                </div>
              </div>

              {/* 右侧内容 - 3D 场景 */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 第二个示例 - 居中布局 */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="w-full h-[500px] bg-gradient-to-br from-indigo-900/50 to-purple-900/50 relative overflow-hidden border-indigo-500/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center z-10 relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-80 h-80 mx-auto mb-6"
                />
                <h3 className="text-3xl font-bold text-white mb-2">
                  居中式 3D 展示
                </h3>
                <p className="text-slate-300">
                  另一种布局方式的展示效果
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 代码示例 */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-8 bg-slate-900/50 border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">组件使用示例</h3>
            <pre className="text-sm text-slate-300 overflow-x-auto bg-black/30 p-4 rounded">
{`import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function YourComponent() {
  return (
    <Card className="w-full h-[500px] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </Card>
  )
}`}
            </pre>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}