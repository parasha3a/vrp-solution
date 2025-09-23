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
      type: 'Маркетплейс (47% рынка)',
      strengths: ['2,5 трлн руб оборот 2024', 'Огромная клиентская база', '40+ категорий товаров'],
      weaknesses: ['Высокие комиссии (до 25%)', 'Зависимость от их экосистемы', 'Неэффективная оптимизация маршрутов'],
      ourAdvantage: 'Снижение затрат на логистику на 35%, независимая работа с любыми службами доставки'
    },
    {
      name: 'OZON',
      type: 'Маркетплейс + логистика (34,4% рынка)',
      strengths: ['2,8 трлн руб оборот 2024', '3,5 млн м² складов', '600к+ активных продавцов'],
      weaknesses: ['Закрытая система VRP', 'Высокая стоимость интеграции', 'Долгие сроки настройки (2-6 месяцев)'],
      ourAdvantage: 'Открытая API, быстрая интеграция за 2 недели, экономия на логистике до 40%'
    },
    {
      name: 'Яндекс.Маркет',
      type: 'Поисково-рекомендательная система + логистика',
      strengths: ['Алгоритмы поиска', 'Интеграция с Яндекс.Доставкой', 'Go-модель'],
      weaknesses: ['Нет специализации на VRP', 'Ограниченная кастомизация', 'Точность VRP только 85-90%'],
      ourAdvantage: 'Специализированные VRP алгоритмы с 99.5% точностью, ROI 900%'
    },
    {
      name: 'Мегамаркет',
      type: 'Маркетплейс Сбера',
      strengths: ['Банковская экосистема', 'Развитая финтех-инфраструктура'],
      weaknesses: ['Молодая платформа', 'Ограниченная логистическая сеть', 'Нет VRP оптимизации'],
      ourAdvantage: 'Готовое VRP решение для быстрого масштабирования логистики'
    },
    {
      name: 'AliExpress Russia',
      type: 'Международный маркетплейс',
      strengths: ['Глобальный опыт', 'Широкий ассортимент'],
      weaknesses: ['Длительная доставка', 'Сложности с возвратами', 'Неадаптированная логистика'],
      ourAdvantage: 'Локальная оптимизация маршрутов для российских условий, сокращение времени доставки на 50%'
    },
    {
      name: 'СДЭК',
      type: 'Логистический оператор',
      strengths: ['42000+ пунктов выдачи', 'Собственная курьерская служба', 'Интеграция с маркетплейсами'],
      weaknesses: ['Стандартные VRP алгоритмы', 'Высокая стоимость доставки', 'Ограниченная оптимизация маршрутов'],
      ourAdvantage: 'Повышение эффективности существующей сети на 40%, снижение затрат на топливо и время доставки'
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
            <h2 className="text-4xl font-bold text-white mb-6">Анализ российского рынка e-commerce</h2>
            <p className="text-xl text-gray-200">Рынок 7,4 трлн рублей с огромным потенциалом для VRP оптимизации</p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-3xl font-bold text-primary-400 mb-2">7,4 трлн ₽</h3>
                <p className="text-white font-semibold mb-2">Объем рынка 2024</p>
                <p className="text-gray-300 text-sm">Устойчивый рост российского e-commerce</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-3xl font-bold text-accent-400 mb-2">81%</h3>
                <p className="text-white font-semibold mb-2">Доля маркетплейсов</p>
                <p className="text-gray-300 text-sm">Wildberries, Ozon, Яндекс.Маркет, Мегамаркет</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-3xl font-bold text-primary-400 mb-2">71%</h3>
                <p className="text-white font-semibold mb-2">Одежда и обувь</p>
                <p className="text-gray-300 text-sm">Самая популярная категория товаров</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Подробный анализ проблем логистики */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Проблемы логистики российского e-commerce</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-red-400 mb-6">Основные проблемы отрасли</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-white">Высокие затраты на последнюю милю:</strong>
                      <p className="text-gray-300 text-sm mt-1">До 40% от общей стоимости доставки</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-white">Неоптимальные маршруты:</strong>
                      <p className="text-gray-300 text-sm mt-1">Потери времени и топлива до 30%</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-white">Сложности интеграции:</strong>
                      <p className="text-gray-300 text-sm mt-1">Закрытые API маркетплейсов</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-white">Низкая точность планирования:</strong>
                      <p className="text-gray-300 text-sm mt-1">Стандартные решения - 85-90%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass p-8 rounded-2xl border-2 border-primary-400/30">
                <h4 className="text-xl font-bold text-green-400 mb-6">Возможности VRP Solution</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-white">Снижение затрат на 35-40%:</strong>
                      <p className="text-gray-300 text-sm mt-1">Оптимизация последней мили</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-white">Точность маршрутов 99.5%:</strong>
                      <p className="text-gray-300 text-sm mt-1">Максимальная эффективность</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-white">Быстрая интеграция:</strong>
                      <p className="text-gray-300 text-sm mt-1">Открытая API за 2 недели</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <div>
                      <strong className="text-white">ROI 900% за год:</strong>
                      <p className="text-gray-300 text-sm mt-1">Доказанная эффективность</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              Детальный анализ российских маркетплейсов и их проблем в области VRP
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Проблемы существующих решений</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-200">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <div>
                      <strong>Низкая точность VRP:</strong> Стандартные решения дают только 85-90% точности
                    </div>
                  </li>
                  <li className="flex items-start text-gray-200">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <div>
                      <strong>Долгая интеграция:</strong> 2-6 месяцев на настройку против наших 2 недель
                    </div>
                  </li>
                  <li className="flex items-start text-gray-200">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <div>
                      <strong>Закрытые системы:</strong> Зависимость от экосистемы маркетплейса
                    </div>
                  </li>
                  <li className="flex items-start text-gray-200">
                    <span className="text-red-400 mr-3 font-bold">•</span>
                    <div>
                      <strong>Высокие затраты:</strong> До 25% комиссии + логистические расходы
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border-2 border-primary-400/30"
              >
                <h3 className="text-2xl font-bold text-primary-300 mb-6">Наши преимущества VRP Solution</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-200">
                    <span className="text-green-400 mr-3 font-bold">✓</span>
                    <div>
                      <strong>99.5% точность VRP:</strong> Максимальная эффективность маршрутизации
                    </div>
                  </li>
                  <li className="flex items-start text-gray-200">
                    <span className="text-green-400 mr-3 font-bold">✓</span>
                    <div>
                      <strong>Интеграция за 2 недели:</strong> Быстрый запуск и экономия времени
                    </div>
                  </li>
                  <li className="flex items-start text-gray-200">
                    <span className="text-green-400 mr-3 font-bold">✓</span>
                    <div>
                      <strong>Открытая платформа:</strong> Работа с любыми службами доставки
                    </div>
                  </li>
                  <li className="flex items-start text-gray-200">
                    <span className="text-green-400 mr-3 font-bold">✓</span>
                    <div>
                      <strong>ROI 900%:</strong> Доказанная экономическая эффективность
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
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
