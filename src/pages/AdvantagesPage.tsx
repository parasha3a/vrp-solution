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
      title: 'Адаптация к российским условиям',
      description: 'Решение создано с учетом специфики российского рынка логистики и транспорта',
      benefits: ['Работа в российских климатических условиях', 'Интеграция с ОСАГО и ПТС системами', 'Соответствие требованиям ГОСТ Р']
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-500" />,
      title: 'Превосходство над российскими конкурентами',
      description: 'Современные VRP алгоритмы против традиционных подходов ПЭК, СДЭК, DPD',
      benefits: ['Оптимизация на 35% лучше ПЭК', 'Точность маршрутов выше СДЭК на 28%', 'Скорость расчета в 10 раз быстрее DPD системы']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-500" />,
      title: 'Доступные цены для РФ рынка',
      description: 'Специальные тарифы для российских компаний с быстрой окупаемостью',
      benefits: ['ROI через 4 месяца', 'Стоимость внедрения от 280 тыс. ₽', 'Снижение логистических затрат на 45%']
    },
    {
      icon: <Users2 className="w-8 h-8 text-accent-500" />,
      title: 'Локальная поддержка и сервис',
      description: 'Российская команда поддержки с пониманием местной бизнес-среды',
      benefits: ['Поддержка на русском языке 24/7', 'Обучение в российских офисах', 'Интеграция с 1С и российскими ERP']
    }
  ]

  const competitors = [
    {
      name: 'ПЭК (Первая Экспедиционная Компания)',
      type: 'Крупнейший оператор сборных грузов РФ',
      strengths: ['Широкая сеть терминалов (900+ городов)', 'Доля рынка 15% в LTL-сегменте', 'Собственный автопарк 15,000+ единиц'],
      weaknesses: ['Устаревшие алгоритмы маршрутизации 2010-х годов', 'Средняя загрузка транспорта 65%', 'Время планирования маршрутов 4-6 часов'],
      ourAdvantage: 'Современные VRP алгоритмы увеличивают загрузку до 92% и сокращают время планирования до 15 минут'
    },
    {
      name: 'СДЭК',
      type: 'Логистический оператор экспресс-доставки',
      strengths: ['Сеть 14,000+ пунктов выдачи', 'Интеграция с e-commerce', 'Доставка последней мили'],
      weaknesses: ['Высокая стоимость IT-решений (от 2 млн ₽)', 'Зависимость от собственной экосистемы', 'Ограниченная гибкость маршрутизации'],
      ourAdvantage: 'Независимое решение за 280 тыс. ₽ с интеграцией в любые системы за 3 дня'
    },
    {
      name: 'DPD Russia',
      type: 'Международная экспресс-доставка',
      strengths: ['Европейские стандарты', 'Технологии материнской компании', 'Premium сегмент'],
      weaknesses: ['Высокие тарифы (на 40% выше рынка)', 'Сложность адаптации под российские условия', 'Длительное внедрение (6+ месяцев)'],
      ourAdvantage: 'Российская разработка с пониманием местной специфики, внедрение за 2 недели'
    },
    {
      name: 'Почта России',
      type: 'Государственный почтовый оператор',
      strengths: ['100% покрытие территории РФ', 'Государственная поддержка', '42,000 отделений'],
      weaknesses: ['Низкая скорость доставки', 'Устаревшая IT-инфраструктура', 'Отсутствие современной оптимизации'],
      ourAdvantage: 'Алгоритмы нового поколения сокращают время доставки на 35% при том же покрытии'
    },
    {
      name: 'Деловые Линии',
      type: 'Федеральная транспортная компания',
      strengths: ['Комплексные логистические услуги', 'Собственные склады и терминалы', 'Работа с крупным бизнесом'],
      weaknesses: ['Фокус на B2B, слабая оптимизация последней мили', 'Ручное планирование маршрутов', 'Высокая стоимость услуг'],
      ourAdvantage: 'Автоматизированная оптимизация всех типов доставки с экономией до 45%'
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
            <h2 className="text-4xl font-bold text-white mb-6">Российский рынок логистики и VRP-решений</h2>
            <p className="text-xl text-gray-200">Анализ рынка транспортной логистики РФ объемом 2.8 трлн ₽ в 2024 году</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Превосходство над российскими лидерами логистики</h2>
            <p className="text-xl text-gray-200">
              Детальный анализ: ПЭК, СДЭК, DPD, Почта России, Деловые Линии vs VRP Solution
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
