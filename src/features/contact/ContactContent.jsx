import { motion } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'

export function ContactContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-20">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
        <div className="layout-content-container flex flex-col max-w-7xl flex-1">
          {/* Hero Section */}
          <motion.div 
            className="flex flex-wrap justify-between gap-3 p-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex w-full flex-col items-center gap-3">
              <p className="text-black dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                让我们携手，共创未来
              </p>
              <p className="text-gray-500 dark:text-[#9292c9] text-base md:text-lg font-normal leading-normal max-w-2xl">
                无论您对我们的技术有任何疑问、有项目合作意向，或是媒体垂询，我们都随时准备为您解答。
              </p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mt-12 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-[#191933]/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-[#323267]">
                <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
                  给我们留言
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">姓名</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder="请输入您的姓名" 
                        type="text"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">公司名称（选填）</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder="请输入您的公司名称" 
                        type="text"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">工作邮箱</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder="name@company.com" 
                        type="email"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">电话号码（选填）</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder="(123) 456-7890" 
                        type="tel"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">咨询主题</p>
                      <motion.select 
                        className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] px-3 text-base font-normal leading-normal"
                        whileFocus={{ scale: 1.01 }}
                      >
                        <option>销售咨询</option>
                        <option>合作意向</option>
                        <option>媒体垂询</option>
                        <option>其他问题</option>
                      </motion.select>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">您的留言</p>
                      <motion.textarea 
                        className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary min-h-[120px] placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder="请在此处留下您的消息..."
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                  </div>
                  <div>
                    <motion.button 
                      className="flex w-full md:w-auto min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="truncate">发送</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-black dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  联系信息
                </h3>
                <div className="space-y-4">
                  <a className="flex items-center gap-4 group" href="mailto:contact@sdhtfz.com">
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">
                      contact@sdhtfz.com
                    </span>
                  </a>
                  <a className="flex items-center gap-4 group" href="tel:+861234567890">
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">
                      +86 123-4567-890
                    </span>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-black dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  我们的地址
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mt-1 flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    山东省菏泽市<br/>
                    中华路1008号<br/>
                    创业大厦
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-64 bg-gray-200 dark:bg-[#191933] rounded-xl overflow-hidden border border-gray-200 dark:border-[#323267]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="一张风格化的深色主题地图，显示了城市区域中的一个图钉位置。" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKdlsy7BokvtbcGhRuOGaRazfaapEGu63gI4hiNauctZwJIncuaPJJNIXp5GGgQcsaivUJ81t9Z53Sy-idYrqln7LCwFw4M79j4MgyZwKVIn4CsU-Yd-MV3RyXJ40WTcctddgZ4fP0QHOTxAihKDrz13w3vmzfhde4FRDvj-xjI71xpW3Wy0uobkyL4R_4DrLkBaPfa1lnQrjI5bz8EADOEp773vZQXvUsCGUEQxEP6qyMusZADsbWdEYqILW4Myycm7w1iBpIBzMl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}