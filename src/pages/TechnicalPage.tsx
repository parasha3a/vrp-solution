import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  Settings, 
  Monitor,
  GitBranch,
  Server,
  Brain,
  BarChart3
} from 'lucide-react'
import { Suspense, lazy } from 'react'

const ThreeBackground = lazy(() => import('../components/ThreeBackground'))

const TechnicalPage: React.FC = () => {
  const techStack = [
    {
      category: 'Машинное обучение',
      icon: <Brain className="w-8 h-8 text-primary-500" />,
      technologies: [
        { name: 'TensorFlow', description: 'Глубокое обучение для прогнозирования' },
        { name: 'scikit-learn', description: 'Алгоритмы оптимизации маршрутов' },
        { name: 'PyTorch', description: 'Нейронные сети для анализа данных' },
        { name: 'Pandas/NumPy', description: 'Обработка больших данных' }
      ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8 text-accent-500" />,
      technologies: [
        { name: 'Python/FastAPI', description: 'Высокопроизводительный API' },
        { name: 'Node.js', description: 'Микросервисная архитектура' },
        { name: 'PostgreSQL', description: 'Надежная база данных' },
        { name: 'Redis', description: 'Кэширование и очереди' }
      ]
    },
    {
      category: 'Инфраструктура',
      icon: <Cloud className="w-8 h-8 text-primary-500" />,
      technologies: [
        { name: 'Docker/Kubernetes', description: 'Контейнеризация и оркестрация' },
        { name: 'AWS/Azure', description: 'Облачная инфраструктура' },
        { name: 'NGINX', description: 'Балансировка нагрузки' },
        { name: 'Prometheus/Grafana', description: 'Мониторинг системы' }
      ]
    },
    {
      category: 'Frontend',
      icon: <Monitor className="w-8 h-8 text-accent-500" />,
      technologies: [
        { name: 'React/TypeScript', description: 'Современный пользовательский интерфейс' },
        { name: 'Next.js', description: 'Server-side rendering' },
        { name: 'Tailwind CSS', description: 'Адаптивная стилизация' },
        { name: 'D3.js', description: 'Интерактивная визуализация данных' }
      ]
    }
  ]

  const architecture = [
    {
      layer: 'Presentation Layer',
      description: 'Веб-интерфейс и мобильные приложения',
      technologies: ['React', 'React Native', 'PWA'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      layer: 'API Gateway',
      description: 'Управление API, аутентификация, rate limiting',
      technologies: ['Kong', 'JWT', 'OAuth 2.0'],
      color: 'from-green-500 to-green-600'
    },
    {
      layer: 'Microservices',
      description: 'Бизнес-логика и алгоритмы оптимизации',
      technologies: ['FastAPI', 'Node.js', 'Docker'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      layer: 'ML Pipeline',
      description: 'Машинное обучение и обработка данных',
      technologies: ['TensorFlow', 'Airflow', 'Spark'],
      color: 'from-red-500 to-red-600'
    },
    {
      layer: 'Data Layer',
      description: 'Хранение и управление данными',
      technologies: ['PostgreSQL', 'MongoDB', 'S3'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const requirements = [
    {
      category: 'Производительность',
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      specs: [
        'Обработка до 10,000 маршрутов в секунду',
        'Время отклика API < 100ms',
        'Доступность системы 99.9%',
        'Автоматическое масштабирование'
      ]
    },
    {
      category: 'Безопасность',
      icon: <Shield className="w-6 h-6 text-accent-500" />,
      specs: [
        'Шифрование данных AES-256',
        'Двухфакторная аутентификация',
        'Регулярный аудит безопасности',
        'Соответствие GDPR/ISO 27001'
      ]
    },
    {
      category: 'Интеграция',
      icon: <GitBranch className="w-6 h-6 text-primary-500" />,
      specs: [
        'RESTful API и GraphQL',
        'Webhook уведомления',
        'SDK для популярных языков',
        'Интеграция с ERP/CRM системами'
      ]
    },
    {
      category: 'Мониторинг',
      icon: <BarChart3 className="w-6 h-6 text-accent-500" />,
      specs: [
        'Real-time dashboard',
        'Алерты и уведомления',
        'Детальная аналитика',
        'Логирование всех операций'
      ]
    }
  ]

  const algorithms = [
    {
      name: 'Genetic Algorithm',
      description: 'Эволюционный алгоритм для поиска оптимальных маршрутов',
      complexity: 'O(n²)',
      useCase: 'Крупные логистические сети'
    },
    {
      name: 'Simulated Annealing',
      description: 'Метод имитации отжига для локальной оптимизации',
      complexity: 'O(n log n)',
      useCase: 'Средние маршрутные задачи'
    },
    {
      name: 'Clarke-Wright',
      description: 'Эвристический алгоритм для базовой оптимизации',
      complexity: 'O(n²)',
      useCase: 'Быстрые приближенные решения'
    },
    {
      name: 'Machine Learning',
      description: 'Предиктивные модели на основе исторических данных',
      complexity: 'O(n)',
      useCase: 'Прогнозирование и адаптация'
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
            <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Техническая документация
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Технические{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                решения
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Современная архитектура, передовые алгоритмы и надежная инфраструктура
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Технологический стек</h2>
            <p className="text-xl text-gray-200">Современные технологии для максимальной производительности</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((stack, stackIndex) => (
              <motion.div
                key={stackIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stackIndex * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 rounded-xl mr-4">
                    {stack.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stack.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold">{tech.name}</h4>
                        <p className="text-gray-300 text-sm">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Архитектура системы</h2>
            <p className="text-xl text-gray-200">Многоуровневая архитектура для надежности и масштабируемости</p>
          </motion.div>

          <div className="space-y-4">
            {architecture.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className={`w-4 h-4 bg-gradient-to-r ${layer.color} rounded-full mr-3`}></div>
                      <h3 className="text-xl font-bold text-white">{layer.layer}</h3>
                    </div>
                    <p className="text-gray-300 mb-3">{layer.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Технические требования</h2>
            <p className="text-xl text-gray-200">Высокие стандарты качества и производительности</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, reqIndex) => (
              <motion.div
                key={reqIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: reqIndex * 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 rounded-xl mr-4">
                    {req.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{req.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {req.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-start text-gray-200">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Алгоритмы оптимизации</h2>
            <p className="text-xl text-gray-200">Передовые математические методы решения VRP задач</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {algorithms.map((algorithm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{algorithm.name}</h3>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-mono">
                    {algorithm.complexity}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{algorithm.description}</p>
                <div className="flex items-center text-sm">
                  <Settings className="w-4 h-4 text-accent-400 mr-2" />
                  <span className="text-gray-400">Применение: {algorithm.useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
              Готовы внедрить передовые технологии?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Наша техническая команда поможет интегрировать VRP Solution в вашу инфраструктуру
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-10 py-4 rounded-lg font-semibold text-lg btn-hover-effect transition-all duration-300 hover:shadow-2xl"
            >
              Техническая консультация
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TechnicalPage
