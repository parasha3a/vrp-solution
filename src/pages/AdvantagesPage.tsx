import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, DollarSign, Users2 } from 'lucide-react'
import { Suspense, lazy } from 'react'

const ThreeBackground = lazy(() => import('../components/ThreeBackground'))
import { AnalyticsStats } from '../components/AnalyticsCharts'
import CompetitorAnalysis from '../components/CompetitorAnalysis'
import LazyComponent from '../components/LazyComponent'

// Lazy load heavy components
const MarketChart = React.lazy(() => import('../components/AnalyticsCharts').then(module => ({ default: module.MarketChart })))
const ROIChart = React.lazy(() => import('../components/AnalyticsCharts').then(module => ({ default: module.ROIChart })))
const TAMSAMSOMChart = React.lazy(() => import('../components/BusinessMetrics').then(module => ({ default: module.TAMSAMSOMChart })))
const DeliveryMetrics = React.lazy(() => import('../components/BusinessMetrics').then(module => ({ default: module.DeliveryMetrics })))
const ROICalculator = React.lazy(() => import('../components/BusinessMetrics').then(module => ({ default: module.ROICalculator })))
const TimelineChart = React.lazy(() => import('../components/BusinessMetrics').then(module => ({ default: module.TimelineChart })))

const AdvantagesPage: React.FC = () => {

  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: 'Надежность и безопасность',
      description: 'Высокий уровень защиты данных и стабильная работа системы 24/7',
      benefits: ['Шифрование данных SSL', 'Резервное копирование', 'Мониторинг системы']
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-500" />,
      title: 'Скорость внедрения',
      description: 'Быстрое развертывание и интеграция с существующими системами',
      benefits: ['Настройка за 3 дня', 'API интеграция', 'Обучение персонала']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-500" />,
      title: 'Экономическая эффективность',
      description: 'Быстрая окупаемость инвестиций и долгосрочная экономия',
      benefits: ['ROI через 6 месяцев', 'Снижение затрат на 40%', 'Прозрачное ценообразование']
    },
    {
      icon: <Users2 className="w-8 h-8 text-accent-500" />,
      title: 'Экспертная поддержка',
      description: 'Круглосуточная техническая поддержка и консультации экспертов',
      benefits: ['24/7 поддержка', 'Персональный менеджер', 'Регулярные обновления']
    }
  ]

  const competitors = [
    {
      name: 'Wildberries',
      type: 'Маркетплейс',
      strengths: ['Огромная клиентская база', 'Развитая логистика'],
      weaknesses: ['Высокие комиссии (до 25%)', 'Зависимость от их экосистемы'],
      ourAdvantage: 'Независимая оптимизация, работа с любыми службами доставки'
    },
    {
      name: 'OZON',
      type: 'Маркетплейс + логистика',
      strengths: ['Технологичность', 'Собственная логистика'],
      weaknesses: ['Закрытая система', 'Высокая стоимость интеграции'],
      ourAdvantage: 'Открытая API, быстрая интеграция за 2 недели'
    },
    {
      name: 'Яндекс.Маркет',
      type: 'Поисково-рекомендательная система',
      strengths: ['Алгоритмы поиска', 'Интеграция с Яндекс.Доставкой'],
      weaknesses: ['Нет специализации на VRP', 'Ограниченная кастомизация'],
      ourAdvantage: 'Специализированные VRP алгоритмы с 99.5% точностью'
    }
  ]

  return (
    <div className="relative min-h-screen">
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 -z-10" />}>
        <ThreeBackground />
      </Suspense>
      
      {/* Header */}
      <section className="page-content pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Почему выбирают{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                VRP Solution
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Уникальные преимущества и передовые решения для вашего бизнеса
            </p>
          </motion.div>
        </div>
      </section>


      {/* Analytics Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Аналитика эффективности</h2>
            <p className="text-xl text-gray-200">Объективные показатели работы VRP Solution</p>
          </motion.div>

          <AnalyticsStats />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <LazyComponent>
                <MarketChart />
              </LazyComponent>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <LazyComponent>
                <ROIChart />
              </LazyComponent>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Рыночные возможности и бизнес-модель</h2>
            <p className="text-xl text-gray-200">Компьютерное зрение для ритейла в Северной Америке - наша ниша</p>
          </motion.div>

          <LazyComponent>
            <DeliveryMetrics />
          </LazyComponent>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <LazyComponent>
                <TAMSAMSOMChart />
              </LazyComponent>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <LazyComponent>
                <TimelineChart />
              </LazyComponent>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20 bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Экономическая эффективность</h2>
            <p className="text-xl text-gray-200">Конкретные расчеты экономии для вашего бизнеса</p>
          </motion.div>

          <LazyComponent>
            <ROICalculator />
          </LazyComponent>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ключевые преимущества</h2>
            <p className="text-xl text-gray-200">Что делает VRP Solution уникальным решением</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group glass p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-white/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">{advantage.description}</p>
                <ul className="space-y-3">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-200">
                      <CheckCircle className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-20 bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Сравнение с конкурентами</h2>
            <p className="text-xl text-gray-200">
              Анализ российского рынка: WB, OZON, Яндекс.Маркет vs VRP Solution
            </p>
          </motion.div>

          <CompetitorAnalysis competitors={competitors} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Убедитесь сами в превосходстве VRP Solution
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Получите персональную демонстрацию и расчет экономии для вашего бизнеса
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-10 py-4 rounded-lg font-semibold text-lg btn-hover-effect transition-all duration-300 hover:shadow-2xl"
            >
              Запросить демонстрацию
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AdvantagesPage
