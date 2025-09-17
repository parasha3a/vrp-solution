import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThreeBackground from '../components/ThreeBackground'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary-500" />,
      title: 'Точная оптимизация',
      description: 'Алгоритмы машинного обучения для оптимальных маршрутов'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent-500" />,
      title: 'Экономия до 40%',
      description: 'Снижение транспортных расходов и времени доставки'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: 'Удобство для клиентов',
      description: 'Улучшение качества обслуживания и скорости доставки'
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Точность прогнозов' },
    { number: '40%', label: 'Снижение затрат' },
    { number: '24/7', label: 'Техподдержка' },
    { number: '500+', label: 'Довольных клиентов' }
  ]

  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="page-content pb-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Инновационные решения для логистики
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              VRP{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Solution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Революционная платформа для решения задач маршрутизации транспорта с использованием 
              машинного обучения и передовых алгоритмов оптимизации
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/advantages"
                className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg btn-hover-effect transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Узнать больше
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/technical"
                className="group glass text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Технические решения
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Мы предлагаем передовые решения, которые трансформируют вашу логистику
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group glass p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6 p-3 bg-white/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Результаты в цифрах
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы оптимизировать вашу логистику?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Присоединяйтесь к сотням компаний, которые уже используют VRP Solution
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-10 py-4 rounded-lg font-semibold text-lg btn-hover-effect transition-all duration-300 hover:shadow-2xl"
            >
              Начать бесплатную консультацию
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
